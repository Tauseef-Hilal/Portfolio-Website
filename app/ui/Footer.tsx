import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        
        {/* Brand */}
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="text-2xl font-bold tracking-tight text-foreground mb-4 inline-block">
            Tauseef
          </Link>
          <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
            High-leverage backend specialist engineering scalable, reliable web platforms.
            Based in Kashmir, serving startups globally.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
            Network
          </h3>
          <ul className="space-y-3">
            <li>
              <Link href="https://linkedin.com/in/tauseef-tantary/" target="_blank" className="text-sm text-foreground hover:text-primary transition-colors">
                LinkedIn
              </Link>
            </li>
            <li>
              <Link href="https://github.com/Tauseef-Hilal" target="_blank" className="text-sm text-foreground hover:text-primary transition-colors">
                GitHub
              </Link>
            </li>
            <li>
              <Link href="https://x.com/tauseef_tantary" target="_blank" className="text-sm text-foreground hover:text-primary transition-colors">
                X (Twitter)
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
            Resources
          </h3>
          <ul className="space-y-3">
            <li>
              <Link href="/biography" className="text-sm text-foreground hover:text-primary transition-colors">
                Biography
              </Link>
            </li>
            <li>
              <a href="/resume/Tauseef-Tantary-Resume.pdf" download className="text-sm text-foreground hover:text-primary transition-colors">
                Resume (PDF)
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Tauseef Tantary. All rights reserved.
        </p>
        <div className="flex items-center gap-2">
           <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
           <span className="text-xs text-muted-foreground">All systems operational</span>
        </div>
      </div>
    </footer>
  );
}
