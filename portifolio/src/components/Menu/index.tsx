import { useEffect, useState } from "react";
import { Menu as MenuIcon, X } from "lucide-react";
import { Button } from "../Botao";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";

type NavItem = { label: string; href: string };

const navLinks: NavItem[] = [
  { label: "Início",         href: "/" },
  { label: "Sobre Mim",      href: "/sobre-mim" },
  { label: "Projetos",       href: "/projetos" },
  { label: "Experiências",   href: "/experiencias" },
  { label: "Contato",        href: "/contato" },
];

export default function Menu() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // fecha o menu 
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  //blur e sombra ao rolar
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const baseLink =
    "px-4 py-2 rounded-md text-sm md:text-[15px] font-light transition-colors ";
  const idleDesktop = "text-foreground/80 hover:text-primary";
  const activeDesktop = "text-primary font-normal";
  const pending = "opacity-70";

  const baseMobile =
    "w-full text-left px-4 py-3 rounded-md text-base font-medium transition-colors";
  const idleMobile = "text-foreground/90 hover:text-primary";
  const activeMobile = "text-primary";

  return (
    <>
      {/* Barra (desktop) */}
      <nav
        className={cn(
          "hidden md:flex items-center gap-2",
        )}
        role="navigation"
        aria-label="Navegação principal"
      >
        {navLinks.map((item) => (
          <NavLink
            key={item.href}
            to={item.href}
            className={({ isActive, isPending }) =>
              cn(
                baseLink,
                isPending ? pending : isActive ? activeDesktop : idleDesktop
              )
            }
            end
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      {/* Botão mobile */}
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden"
        onClick={() => setMobileOpen(true)}
        aria-label="Abrir menu"
      >
        <MenuIcon className="h-6 w-6" />
      </Button>

      {/* Overlay mobile */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/40 transition-opacity md:hidden",
          mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* D mobile */}
      <aside
        className={cn(
          "fixed top-0 right-0 z-50 h-full w-80 bg-background shadow-xl md:hidden",
          "transform transition-transform",
          mobileOpen ? "translate-x-0" : "translate-x-full",
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação móvel"
      >
        <div className="flex items-center justify-between px-4 py-4 border-b border-border">
          <h2 className="text-lg font-semibold">Menu</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileOpen(false)}
            aria-label="Fechar menu"
          >
            <X className="h-6 w-6" />
          </Button>
        </div>

        <div className="px-4 py-4 space-y-2">
          {navLinks.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive, isPending }) =>
                cn(
                  baseMobile,
                  isPending ? pending : isActive ? activeMobile : idleMobile
                )
              }
              end
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </aside>

      {/* Fita transparente que o Header usa para blur*/}
      <span className={cn(isScrolled && "pointer-events-none")} />
    </>
  );
}
