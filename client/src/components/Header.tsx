import { useState } from 'react';
import React from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-sm border-b border-border shadow-md' 
        : 'bg-background/80 backdrop-blur-sm border-b border-border/50'
    }`}>
      <div className="container flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <img 
            src="/cappu_logo.jpeg"
            alt="Cappu & Co Logo"
            className="h-12 w-auto group-hover:opacity-90 transition-opacity duration-300"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('problema')}
            className="text-foreground hover:text-primary transition-colors text-sm font-medium"
          >
            O Problema
          </button>
          <button
            onClick={() => scrollToSection('solucao')}
            className="text-foreground hover:text-primary transition-colors text-sm font-medium"
          >
            A Solução
          </button>
          <button
            onClick={() => scrollToSection('mercado')}
            className="text-foreground hover:text-primary transition-colors text-sm font-medium"
          >
            Mercado
          </button>
          <button
            onClick={() => scrollToSection('contato')}
            className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
          >
            Contato
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 hover:bg-accent rounded-lg transition-colors"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden border-t border-border bg-background">
          <div className="container py-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection('problema')}
              className="text-left text-foreground hover:text-primary transition-colors py-2"
            >
              O Problema
            </button>
            <button
              onClick={() => scrollToSection('solucao')}
              className="text-left text-foreground hover:text-primary transition-colors py-2"
            >
              A Solução
            </button>
            <button
              onClick={() => scrollToSection('mercado')}
              className="text-left text-foreground hover:text-primary transition-colors py-2"
            >
              Mercado
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="w-full px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              Contato
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
