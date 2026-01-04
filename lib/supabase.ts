
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Create a function to lazily initialize the client
let supabaseInstance: ReturnType<typeof createClient> | null = null;

function getSupabaseClient() {
    if (!supabaseUrl || !supabaseKey) {
        if (process.env.NODE_ENV !== 'production') {
            console.warn('Missing Supabase credentials. Some features may not work.');
        }
        // Return a mock client that throws helpful errors
        return null;
    }

    if (!supabaseInstance) {
        supabaseInstance = createClient(supabaseUrl, supabaseKey);
    }

    return supabaseInstance;
}

export const supabase = getSupabaseClient();
