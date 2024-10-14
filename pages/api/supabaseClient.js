import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SupaBase_URL; // Replace with your Supabase project URL
const supabaseAnonKey = process.env.SupaBase_ANON_KEY; // Replace with your Supabase anon key

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
