import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://aemxnhutdjqkgdhrgcpm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFlbXhuaHV0ZGpxa2dkaHJnY3BtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE3OTU0NDcsImV4cCI6MjAxNzM3MTQ0N30.Rq5nwwTNB4ei1K_fh6IT6dxnKQjZYUUheY08H2eedlY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
