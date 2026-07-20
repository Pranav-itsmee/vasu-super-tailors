import { createFileRoute } from "@tanstack/react-router";
import heroChalk from "@/assets/hero-chalk.jpg";
import shopInterior from "@/assets/shop-interior.jpg";
import { BrandMark } from "@/components/brand-mark";

const ADDRESS = "8PQH+M76, Cutchery St, opp. Thaluk Office, Marapalam, Erode, Tamil Nadu 638001";
const PHONE_DISPLAY = "+91 94434 25331";
const PHONE_HREF = "tel:+919443425331";
const MAPS_URL = "https://maps.app.goo.gl/LYH9LRcNiZ6f2sC99";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vaasu Super Tailors — Men's Stitching Specialists, Erode" },
      {
        name: "description",
        content:
          "Bespoke men's tailoring in Marapalam, Erode. Shirts, trousers, wedding suits, traditional wear and master alterations. 5.0 Google rated. Call 094434 25331.",
      },
      { property: "og:title", content: "Vaasu Super Tailors — Men's Stitching Specialists" },
      {
        property: "og:description",
        content: "Precision men's tailoring in Erode, Tamil Nadu. 5.0 Google rated.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ClothingStore",
          name: "Vaasu Super Tailors",
          image: shopInterior,
          telephone: "+919443425331",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Cutchery St, opp. Thaluk Office, Marapalam",
            addressLocality: "Erode",
            addressRegion: "Tamil Nadu",
            postalCode: "638001",
            addressCountry: "IN",
          },
          aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "2" },
        }),
      },
    ],
  }),
  component: Index,
});

const services = [
  {
    n: "01",
    title: "Bespoke Shirts",
    desc: "Formal, semi-formal, and casual cuts with reinforced stitching and custom collars.",
  },
  {
    n: "02",
    title: "Trousers & Chinos",
    desc: "Precision patterns for the perfect break. Single or double pleat options available.",
  },
  {
    n: "03",
    title: "Wedding Suits",
    desc: "Full canvas construction for grooms and best men. Heritage cuts for modern celebrations.",
  },
  {
    n: "04",
    title: "Traditional Wear",
    desc: "Tailored kurtas and regional silhouettes stitched with cultural reverence.",
  },
  {
    n: "05",
    title: "Master Alterations",
    desc: "Refining existing garments to breathe new life into your wardrobe with exactness.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <BrandMark />
          <div className="flex items-center gap-4 sm:gap-8">
            <a
              href="#services"
              className="hidden sm:inline text-xs uppercase tracking-[0.2em] font-medium hover:text-primary transition-colors"
            >
              Services
            </a>
            <a
              href="#visit"
              className="hidden sm:inline text-xs uppercase tracking-[0.2em] font-medium hover:text-primary transition-colors"
            >
              Location
            </a>
            <a
              href={PHONE_HREF}
              className="px-4 py-2 bg-foreground text-background text-xs uppercase tracking-widest font-bold hover:bg-primary transition-all"
            >
              Call Shop
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header id="top" className="relative pt-16 sm:pt-24 pb-24 sm:pb-32 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <div className="inline-block px-3 py-1 border border-primary/30 text-primary text-[10px] font-mono uppercase tracking-widest mb-6 animate-reveal">
                Established in Erode
              </div>
              <h1
                className="text-6xl sm:text-7xl lg:text-9xl font-display leading-[0.85] text-balance mb-8 animate-reveal"
                style={{ animationDelay: "100ms" }}
              >
                Vaasu Super <br />
                <span className="italic">Tailors</span>
              </h1>
              <p
                className="max-w-md text-lg text-muted-foreground text-pretty animate-reveal"
                style={{ animationDelay: "200ms" }}
              >
                The precision of a chalk line. The heritage of Erode craftsmanship. Specialised
                men's stitching for the modern gentleman.
              </p>
            </div>
            <div className="lg:col-span-4 animate-reveal" style={{ animationDelay: "300ms" }}>
              <div className="aspect-[3/4] overflow-hidden ring-1 ring-foreground/10">
                <img
                  src={heroChalk}
                  alt="Tailor marking dark navy wool fabric with chalk"
                  width={800}
                  height={1056}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-primary/20 animate-line" />
      </header>

      {/* Review band */}
      <section className="bg-foreground text-background py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="flex gap-1 text-primary text-lg">★★★★★</div>
            <span className="font-mono text-sm tracking-tighter">5.0 GOOGLE RATING</span>
          </div>
          <p className="text-sm italic opacity-80 text-center">
            "The best custom fit in the Marapalam area. Only place I trust for my suits."
          </p>
          <span className="text-[10px] uppercase tracking-widest whitespace-nowrap">
            Erode's Top Rated
          </span>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 sm:py-32 border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-between items-end gap-4 mb-16">
            <h2 className="text-4xl sm:text-5xl font-display">
              Mastery in <br />
              <span className="italic">Construction</span>
            </h2>
            <span className="font-mono text-xs text-muted-foreground">SERVICE LIST (01–05)</span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
            {services.map((s) => (
              <div
                key={s.n}
                className="bg-background p-10 hover:bg-foreground/[0.02] transition-colors group"
              >
                <span className="font-mono text-[10px] text-primary mb-6 block">{s.n}.</span>
                <h3 className="text-xl font-medium mb-4 group-hover:italic transition-all">
                  {s.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
            <div className="bg-foreground/[0.04] p-10 flex flex-col justify-center">
              <p className="text-xs uppercase tracking-widest font-bold mb-2">Men's Only</p>
              <p className="text-[11px] leading-relaxed text-muted-foreground">
                Specialising exclusively in men's tailoring to ensure the highest standard of
                structural fit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visit */}
      <section id="visit" className="py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <h2 className="text-5xl font-display mb-12 italic">The Atelier.</h2>
              <div className="space-y-8">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary mb-2">
                    Address
                  </p>
                  <p className="text-xl max-w-sm">{ADDRESS}</p>
                </div>
                <div className="grid grid-cols-2 gap-8 border-t border-border pt-8">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary mb-2">
                      Hours
                    </p>
                    <p className="text-sm font-medium">Open · Closes 9 pm</p>
                    <p className="text-xs text-muted-foreground mt-1">Visit any day</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary mb-2">
                      Phone
                    </p>
                    <a
                      href={PHONE_HREF}
                      className="text-sm font-medium hover:text-primary transition-colors"
                    >
                      {PHONE_DISPLAY}
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex flex-col sm:flex-row gap-4">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 bg-foreground text-background text-center py-5 text-xs uppercase tracking-[0.2em] font-bold hover:bg-primary transition-all"
                >
                  Get Directions
                </a>
                <a
                  href={PHONE_HREF}
                  className="flex-1 border border-foreground text-center py-5 text-xs uppercase tracking-[0.2em] font-bold hover:bg-foreground/5 transition-all"
                >
                  Call Now
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square overflow-hidden ring-1 ring-foreground/10">
                <img
                  src={shopInterior}
                  alt="Vintage sewing machine inside Vaasu Super Tailors"
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 bg-primary text-primary-foreground p-6 sm:p-8 max-w-[260px] animate-reveal">
                <p className="text-xs uppercase tracking-widest font-bold mb-1">Quality Check</p>
                <p className="text-2xl sm:text-3xl font-display italic">100% Cotton Specialists</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
            © {new Date().getFullYear()} Vaasu Super Tailors. Erode.
          </p>
          <p className="font-display italic text-lg opacity-50">
            The perfect fit is a right, not a luxury.
          </p>
        </div>
      </footer>
    </div>
  );
}
