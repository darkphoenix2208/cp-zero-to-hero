-- Enable the pgvector extension to work with embedding vectors
create extension if not exists vector;

-- Create a table to store problem embeddings
create table if not exists problem_embeddings (
  id bigint primary key generated always as identity,
  problem_id text not null unique, -- e.g. "1385C"
  title text,
  tags text[],
  rating integer,
  embedding vector(384), -- Dimension for all-MiniLM-L6-v2
  created_at timestamptz default now()
);

-- Create a function to search for similar problems
create or replace function match_problems (
  query_embedding vector(384),
  match_threshold float,
  match_count int
)
returns table (
  id bigint,
  problem_id text,
  title text,
  rating integer,
  similarity float
)
language plpgsql
as $$
begin
  return query
  select
    problem_embeddings.id,
    problem_embeddings.problem_id,
    problem_embeddings.title,
    problem_embeddings.rating,
    1 - (problem_embeddings.embedding <=> query_embedding) as similarity
  from problem_embeddings
  where 1 - (problem_embeddings.embedding <=> query_embedding) > match_threshold
  order by problem_embeddings.embedding <=> query_embedding
  limit match_count;
end;
$$;
