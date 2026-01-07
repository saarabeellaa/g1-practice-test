import { createClient } from '@supabase/supabase-js';

export const TEST_USER_ID = '0f4c7b43-6561-4bd9-ac84-4e2ca63bb831';

// Replace these values with your own Supabase project credentials:
export const supabase = createClient(
  'https://lrbqntycvzvdwwrudpfm.supabase.co',    // Supabase URL
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxyYnFudHljdnp2ZHd3cnVkcGZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAwMzQ1NTIsImV4cCI6MjA3NTYxMDU1Mn0.IyVj0H9TqsEuEkcBiJ7tAq6fZVMImPNeSrimQb1LQxg'   // Supabase anon key
);