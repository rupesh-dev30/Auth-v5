import NextAuth from "next-auth"
import authConfig from "./auth.config"

export const { auth } = NextAuth(authConfig)

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  console.log("ROUTE: ", req.nextUrl.pathname);

  console.log("IS LOGGED IN: ", isLoggedIn);
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};