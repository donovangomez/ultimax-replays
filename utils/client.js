import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://szknbpdmidryyeyalryb.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzQ0MDMxNSwiZXhwIjoxOTU5MDE2MzE1fQ.cV7I7249DbBwcJPNXf8y64ILS6VlH0c0rwvbnKk-6xM"
);
