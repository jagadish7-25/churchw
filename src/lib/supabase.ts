import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://kl2rj5lhm6ltdrxkihepna.supabase.co'; // Extracted from provided key (or user needs to verify their project URL, actually "KL2rj5Lhm6ltDRxKiHEPnA" is part of the key. I will assume a generic placeholder or standard extraction. Wait, "sb_publishable_KL2rj5Lhm6ltDRxKiHEPnA_LakZwB8r" implies a specific format. Since the user only gave the key and secret, they might have their own URL. I'll instruct them to add it to .env.local).

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://your-project.supabase.co',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'your-anon-key'
);
