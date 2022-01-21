import { renderToString } from "react-dom/server";
import { RemixServer } from "remix";

import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://fvkjjslqnalybettkizj.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNjQyODAzODU1LCJleHAiOjE5NTgzNzk4NTV9.gLSbP6IKIgewQuo46gllv52UID0H0rjLL3RshvIhdBo')

export default function handleRequest(
  request,
  responseStatusCode,
  responseHeaders,
  remixContext
) {
  const markup = renderToString(
    <RemixServer context={remixContext} url={request.url} />
  );

  responseHeaders.set("Content-Type", "text/html");

  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}
