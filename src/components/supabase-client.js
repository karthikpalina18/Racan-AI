// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://cedrbmkbynekmvqxyyus.supabase.co'; 
const supabaseAnonKey = 'cedrbmkbynekmvqxyyus';            

export const supabase = createClient(supabaseUrl, supabaseAnonKey);