
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

if (!supabaseUrl || !supabaseKey) {
    // We don't want to crash the build if these aren't present during build time, 
    // but we should log a warning.
    if (process.env.NODE_ENV !== 'production') {
        console.warn('Missing Supabase credentials in .env');
    }
}

export const supabase = createClient(supabaseUrl || '', supabaseKey || '');
