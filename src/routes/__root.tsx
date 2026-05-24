import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { BackToTop } from "@/components/BackToTop";
import { Toaster } from "@/components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <div className="text-8xl font-display font-extrabold text-gradient-sunset">404</div>
        <h1 className="mt-4 text-2xl font-display font-bold">Page not found</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          This mango isn't ripe yet. Let's get you back to the orchard.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-gradient-sunset px-6 py-3 text-sm font-semibold text-white shadow-soft hover:scale-105 transition-transform"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-display font-bold">Something went wrong</h1>
        <p className="mt-2 text-sm text-muted-foreground">Please try again in a moment.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-full bg-gradient-sunset px-5 py-2.5 text-sm font-semibold text-white shadow-soft"
          >
            Try again
          </button>
          <a href="/" className="rounded-full border border-input px-5 py-2.5 text-sm font-semibold">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "MangoBliz — Fresh Mangoes. Real Taste. | Bangalore" },
      {
        name: "description",
        content:
          "Buy fresh Alphonso, Kesar and premium mangoes online in Bangalore. Naturally ripened, hand-picked. Pickup across Bangalore.",
      },
      { name: "keywords", content: "Fresh Mangoes Bangalore, Buy Mangoes Online Bangalore, Alphonso Mango Bangalore, Mango Pickup Bangalore, Kesar mango" },
      { name: "author", content: "MangoBliz" },
      { name: "theme-color", content: "#FFB000" },
      { property: "og:title", content: "MangoBliz — Fresh Mangoes. Real Taste. | Bangalore" },
      { property: "og:description", content: "Build a premium e-commerce website for MangoBliz, showcasing mangoes with online ordering and Bangalore pickup." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "MangoBliz" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "MangoBliz — Fresh Mangoes. Real Taste. | Bangalore" },
      { name: "description", content: "Build a premium e-commerce website for MangoBliz, showcasing mangoes with online ordering and Bangalore pickup." },
      { name: "twitter:description", content: "Build a premium e-commerce website for MangoBliz, showcasing mangoes with online ordering and Bangalore pickup." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/78b2c1c0-6819-4125-8dae-2a08d958854c/id-preview-431ffe17--1953b4d4-ae81-4cdb-95df-a5eb774e7a28.lovable.app-1779622885919.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/78b2c1c0-6819-4125-8dae-2a08d958854c/id-preview-431ffe17--1953b4d4-ae81-4cdb-95df-a5eb774e7a28.lovable.app-1779622885919.png" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <FloatingWhatsApp />
        <BackToTop />
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}
