import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qyjklhdmhmxzroezqfnq.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF5amtsaGRtaG14enJvZXpxZm5xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM1MjI1NzUsImV4cCI6MjA3OTA5ODU3NX0.2jo3Ye0_gWsrzNPbkPfrN2w7U0PHz6ITyShUQtSYp5Y";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
