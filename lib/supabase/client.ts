import { createClient as _createClient } from '@supabase/supabase-js'

export const supabase = _createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
)

export const createClient = _createClient
