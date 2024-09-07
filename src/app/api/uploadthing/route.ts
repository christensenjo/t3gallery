

// Test route showing how easy it is to implement api endpoints
// eg GET, POST
// export function GET(){
//     return new Response('Hello World');
// }


import { createRouteHandler } from "uploadthing/next";
 
import { ourFileRouter } from "./core"; // -> The uploadthing FileRouter from their core.ts code we pasted as setup
 
// Export routes for Next App Router
export const { GET, POST } = createRouteHandler({
  router: ourFileRouter,
  // Apply an (optional) custom config:
  // config: { ... },
});