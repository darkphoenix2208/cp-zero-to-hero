import os
import uvicorn
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List, Optional
from sentence_transformers import SentenceTransformer
# import xgboost as xgb
import numpy as np
from supabase import create_client, Client
from dotenv import load_dotenv

load_dotenv(os.path.join(os.path.dirname(__file__), '..', '.env'))

app = FastAPI(title="CP-ZeroToHero ML Engine")

# --- Configuration ---
SUPABASE_URL = os.getenv("NEXT_PUBLIC_SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_SERVICE_ROLE_KEY") # Use Service Role for ML backend
supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

# --- Models ---
# Load SBERT model for Semantic Search
print("Loading Embedding Model...")
embedder = SentenceTransformer('all-MiniLM-L6-v2')
print("Embedding Model Loaded.")

# Load XGBoost (Mock for now, normally load from file)
# bst = xgb.Booster()
# bst.load_model('coach_model.json')

class SearchQuery(BaseModel):
    query: str
    limit: int = 10

class Problem(BaseModel):
    problem_id: str
    tags: List[str]
    rating: int

class UserContext(BaseModel):
    user_rating: int
    user_id: str

class PredictionRequest(BaseModel):
    user: UserContext
    problems: List[Problem]

# --- Endpoints ---

@app.get("/")
def health_check():
    return {"status": "active", "engine": "Dual-Core ML"}

@app.post("/search_problems")
def search_problems(payload: SearchQuery):
    """
    Engine A (The Finder): Semantic Search
    """
    try:
        # 1. Embed Query
        vector = embedder.encode(payload.query).tolist()
        
        # 2. RPC call to Supabase pgvector
        response = supabase.rpc(
            "match_problems",
            {
                "query_embedding": vector,
                "match_threshold": 0.3, # Minimum similarity
                "match_count": payload.limit
            }
        ).execute()
        
        return {"input": payload.query, "results": response.data}
        
    except Exception as e:
        print(f"Search Error: {e}")
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/predict_success")
def predict_success(payload: PredictionRequest):
    """
    Engine B (The Coach): Win Probability Classifier
    """
    results = []
    
    for prob in payload.problems:
        # --- Feature Engineering Logic (Mock for MVP) ---
        # Real model would use: (UserRating - ProblemRating), TagEfficiency, etc.
        
        rating_diff = payload.user.user_rating - prob.rating
        
        # Simple heuristic to simulate ML model until real training
        # Sigmoid-like probability curve based on rating difference
        # If RatingDiff = 0 (Same level) -> ~50% chance
        # If RatingDiff > 400 (Easy) -> ~90% chance
        # If RatingDiff < -400 (Hard) -> ~10% chance
        
        # Basic logistic function simulation
        z = rating_diff / 400.0
        probability = 1.0 / (1.0 + np.exp(-z))
        
        # Adjust for tags (Mock: if tag is 'dp', user might be worse)
        # In real ML, this comes from the XGBoost model
        
        results.append({
            "problem_id": prob.problem_id,
            "win_probability": round(float(probability), 2),
            "label": "Comfort Zone" if probability > 0.8 else "Sweet Spot" if probability > 0.5 else "Challenge"
        })
        
    return {"predictions": results}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
