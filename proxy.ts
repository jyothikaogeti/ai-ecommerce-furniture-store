import { clerkMiddleware } from "@clerk/nextjs/server";

const protectedRoutes = ["/orders", "/checkout", "/checkout/success"];

export default clerkMiddleware(async (auth, req) => {
  const pathname = req.nextUrl.pathname;

  const isProtected =
    protectedRoutes.includes(pathname) || pathname.startsWith("/orders/");

  if (isProtected) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
