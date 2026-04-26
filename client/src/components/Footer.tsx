import { Mail, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16 mt-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Sobre */}
          <div>
            <img 
              src="/cappu_logo.jpeg"
              alt="Cappu & Co Logo"
              className="h-16 w-auto mb-4 opacity-90"
            />
            <p className="text-sm opacity-90 leading-relaxed">
              Transformando resíduos de café em embalagens sustentáveis para um futuro mais responsável.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#problema" className="opacity-90 hover:opacity-100 transition-opacity">
                  O Problema
                </a>
              </li>
              <li>
                <a href="#solucao" className="opacity-90 hover:opacity-100 transition-opacity">
                  A Solução
                </a>
              </li>
              <li>
                <a href="#mercado" className="opacity-90 hover:opacity-100 transition-opacity">
                  Oportunidade de Mercado
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-4">Contato</h4>
            <div className="space-y-3">
              <a
                href="mailto:contato@cappuandco.com"
                className="flex items-center gap-2 text-sm opacity-90 hover:opacity-100 transition-opacity"
              >
                <Mail size={18} />
                contato@cappuandco.com
              </a>
              <div className="flex gap-4 pt-2">
                <a href="#" className="opacity-90 hover:opacity-100 transition-opacity">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="opacity-90 hover:opacity-100 transition-opacity">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-center text-sm opacity-75">
            © 2026 Cappu & Co. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
