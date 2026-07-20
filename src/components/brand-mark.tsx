export function BrandMark() {
  return (
    <a
      href="#top"
      aria-label="Vaasu Super Tailors — home"
      className="group flex items-baseline gap-2 text-foreground hover:text-primary transition-colors"
    >
      <span className="font-display italic text-2xl tracking-tight leading-none">VST</span>
      <span className="hidden sm:inline text-[10px] uppercase tracking-[0.22em] font-medium text-muted-foreground group-hover:text-primary transition-colors">
        Vaasu Super Tailors
      </span>
    </a>
  );
}
