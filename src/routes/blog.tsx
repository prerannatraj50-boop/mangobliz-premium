import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Mango Blog — Tips, Stories & Recipes | MangoBliz" },
      { name: "description", content: "Learn about Alphonso vs Kesar, mango benefits, storage tips, and the best mangoes for milkshakes." },
      { property: "og:title", content: "MangoBliz Blog" },
      { property: "og:description", content: "Mango stories, recipes and tips from the orchard." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: Blog,
});

const posts = [
  { t: "The Difference Between Alphonso and Kesar", d: "Two iconic Indian mangoes — origin, taste, aroma and how to pick the right one for you.", read: "5 min read" },
  { t: "Best Mangoes for Milkshakes", d: "Creamy, sweet, low-fibre — these are the varieties bartenders and chefs swear by.", read: "4 min read" },
  { t: "Health Benefits of Mangoes", d: "Vitamin A, antioxidants and gut-friendly fibre — what a daily mango actually does.", read: "6 min read" },
  { t: "Mango Storage Tips", d: "How to ripen, refrigerate and freeze mangoes so nothing ever goes to waste.", read: "3 min read" },
  { t: "Naturally Ripened Mango Guide", d: "Five honest signs your mango ripened the slow, right way — not in a chemical chamber.", read: "5 min read" },
];

function Blog() {
  return (
    <div>
      <section className="bg-gradient-tropical py-20 text-center">
        <div className="container mx-auto px-5">
          <h1 className="font-display text-5xl md:text-6xl font-extrabold">The <span className="text-gradient-sunset">Orchard</span> Journal</h1>
          <p className="mt-4 max-w-2xl mx-auto text-foreground/75">Stories, recipes and tips from our farms — for the mango obsessed.</p>
        </div>
      </section>

      <section className="container mx-auto px-5 lg:px-8 py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((p) => (
          <article key={p.t} className="rounded-3xl bg-card shadow-soft overflow-hidden hover:-translate-y-1 transition-transform">
            <div className="aspect-[16/10] bg-gradient-sunset" />
            <div className="p-6">
              <div className="text-xs text-muted-foreground">{p.read}</div>
              <h2 className="font-display text-xl font-bold mt-2">{p.t}</h2>
              <p className="text-sm text-muted-foreground mt-2">{p.d}</p>
              <button className="mt-4 text-sm font-semibold underline underline-offset-4">Read more</button>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
