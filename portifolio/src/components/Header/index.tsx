import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Menu from "../Menu";
import logo from "../../assets/monograma-branco.svg"; // troque se quiser a versão dark/light
import { cn } from "@/lib/utils";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-border transition-all",
        isScrolled
          ? "bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/80 shadow-sm"
          : "bg-transparent",
      )}
      role="banner"
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src={logo}
              alt="Logotipo"
              className="h-9 w-auto"
              loading="eager"
              width={108}
              height={36}
            />
          </Link>

          {/* Menu (desktop + mobile trigger) */}
          <Menu />
        </div>
      </div>
    </header>
  );
}
