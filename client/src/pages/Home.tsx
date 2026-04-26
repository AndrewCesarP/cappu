import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, Leaf, Zap, Globe, TrendingUp } from 'lucide-react';
import { useState, useEffect } from 'react';

/**
 * Design Philosophy: Minimalismo Corporativo Sustentável
 * - Tipografia: Playfair Display (títulos) + Inter (corpo)
 * - Cores: Marrom Café (#6B4423), Verde Terra (#4A6741), Branco Natural (#FAFAF8)
 * - Layout: Assimétrico, whitespace generoso, hierarquia clara
 * - Animações: Suaves, controladas, fade-in ao scroll
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 coffee-texture" />
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Conteúdo */}
            <div className="fade-in-up">
              <h1 className="font-serif font-bold text-5xl md:text-6xl leading-tight mb-6 text-primary">
                Embalagens Sustentáveis do Café ao Consumidor
              </h1>
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed max-w-lg">
                Transformamos resíduos de café em soluções inovadoras de embalagem. Porque o futuro do planeta não pode esperar, e o mercado também não.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 font-medium flex items-center justify-center gap-2 group">
                  Saiba Mais
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/5 transition-all duration-300 font-medium">
                  Contato
                </button>
              </div>
            </div>

            {/* Imagem Hero */}
            <div className="relative h-96 md:h-full min-h-96 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663261380883/E53SJ7xRztnrVwGqMqGj4y/cappu-hero-coffee-beans-SUDxfp8cjjrTeJ5bFb6Er2.webp"
                alt="Grãos de café premium"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problema Section */}
      <section id="problema" className="py-20 md:py-32 bg-accent/30">
        <div className="container">
          <div className="max-w-3xl mb-16">
            <h2 className="font-serif font-bold text-4xl md:text-5xl mb-6 text-primary">
              O Problema
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              O Brasil produz mais de 900 mil toneladas de borra de café por ano — e a esmagadora maioria vai direto para o lixo. Simultaneamente, o setor de embalagens consome bilhões de toneladas de plástico virgem anualmente, com ciclos de vida curtíssimos e impacto ambiental devastador.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="bg-background p-8 rounded-lg border border-border card-hover">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Globe className="text-primary" size={24} />
              </div>
              <h3 className="font-serif font-bold text-xl mb-3 text-primary">
                Desperdício de Resíduo
              </h3>
              <p className="text-foreground/80">
                900 mil toneladas de borra de café descartadas anualmente no Brasil, carregando consigo fibras de celulose e lignina com enorme potencial estrutural.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-background p-8 rounded-lg border border-border card-hover">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="text-primary" size={24} />
              </div>
              <h3 className="font-serif font-bold text-xl mb-3 text-primary">
                Embalagens Convencionais
              </h3>
              <p className="text-foreground/80">
                Bilhões de toneladas de plástico virgem produzidas anualmente com ciclos de vida curtos e destinação inadequada, gerando danos ambientais irreversíveis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Oportunidade Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Conteúdo */}
            <div>
              <h2 className="font-serif font-bold text-4xl md:text-5xl mb-6 text-primary">
                A Oportunidade
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed mb-8">
                Unir o problema do resíduo com a necessidade de embalagens sustentáveis em uma única solução inovadora, alinhada aos ODS 12 e 13 da Agenda 2030 da ONU.
              </p>
              <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663261380883/E53SJ7xRztnrVwGqMqGj4y/cappu-sustainability-cycle-fgX9oxpn26aPsGsyg2j7sU.webp"
                  alt="Ciclo de sustentabilidade"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Mascote */}
            <div className="flex items-center justify-center">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663261380883/E53SJ7xRztnrVwGqMqGj4y/cappu-mascot-full-character-m7CqiJnGqguJuqDwJgHDAk.webp"
                alt="Cappu - Mascote da Cappu & Co"
                className="w-full max-w-sm h-auto drop-shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solução Section */}
      <section id="solucao" className="py-20 md:py-32 bg-accent/30">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Imagem */}
            <div className="relative h-96 md:h-full min-h-96 rounded-lg overflow-hidden shadow-lg order-2 lg:order-1">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663261380883/E53SJ7xRztnrVwGqMqGj4y/cappu-solution-composite-CyBQMUq4ooSJkhCXnvMnEx.webp"
                alt="Compósito de embalagem sustentável"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Conteúdo */}
            <div className="order-1 lg:order-2">
              <h2 className="font-serif font-bold text-4xl md:text-5xl mb-6 text-primary">
                A Solução
              </h2>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                Embalagens de compósitos poliméricos reforçados com borra de café processada. Utilizamos matrizes poliméricas de base reciclada (PLA ou PP reciclado) e incorporamos a borra como agente de reforço estrutural.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex gap-4">
                  <div className="w-1 bg-primary rounded-full flex-shrink-0" />
                  <div>
                    <h4 className="font-serif font-bold text-primary mb-1">Benefícios Técnicos</h4>
                    <p className="text-foreground/80">Características mecânicas superiores e substituição parcial de polímero virgem</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-1 bg-primary rounded-full flex-shrink-0" />
                  <div>
                    <h4 className="font-serif font-bold text-primary mb-1">Diferencial Estético</h4>
                    <p className="text-foreground/80">Textura e tonalidade naturais do café, sem pigmentos artificiais</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-1 bg-primary rounded-full flex-shrink-0" />
                  <div>
                    <h4 className="font-serif font-bold text-primary mb-1">Ativo de Marca</h4>
                    <p className="text-foreground/80">Narrativa de responsabilidade que o consumidor moderno valoriza</p>
                  </div>
                </div>
              </div>

              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 font-medium flex items-center gap-2 group">
                Explorar Tecnologia
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciação Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Mascote Pensativo */}
            <div className="flex items-center justify-center">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663261380883/E53SJ7xRztnrVwGqMqGj4y/cappu-pose-thinking-M9sbaXzNoWdV3zDRw74Z4v.webp"
                alt="Cappu Pensando em Inovação"
                className="w-full max-w-sm h-auto drop-shadow-lg"
              />
            </div>

            {/* Conteúdo */}
            <div>
              <h2 className="font-serif font-bold text-4xl md:text-5xl mb-6 text-primary">
                Diferenciação e Inovação
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed mb-8">
                Nós não apenas resolvemos um problema — criamos uma oportunidade de negócio que transforma resíduos em valor.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-accent/50 p-8 rounded-lg border border-border card-hover">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <Leaf className="text-primary-foreground" size={24} />
              </div>
              <h3 className="font-serif font-bold text-xl mb-3 text-primary">
                Inovação Incremental
              </h3>
              <p className="text-foreground/80">
                Aplicamos tecnologias estabelecidas da ciência dos materiais a um contexto inexplorado em escala comercial no Brasil.
              </p>
            </div>

            <div className="bg-accent/50 p-8 rounded-lg border border-border card-hover">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="text-primary-foreground" size={24} />
              </div>
              <h3 className="font-serif font-bold text-xl mb-3 text-primary">
                Vantagem Competitiva
              </h3>
              <p className="text-foreground/80">
                Nenhum concorrente direto oferece essa composição específica em escala acessível para PMEs alimentícias.
              </p>
            </div>

            <div className="bg-accent/50 p-8 rounded-lg border border-border card-hover">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <Globe className="text-primary-foreground" size={24} />
              </div>
              <h3 className="font-serif font-bold text-xl mb-3 text-primary">
                Impacto Real
              </h3>
              <p className="text-foreground/80">
                Transformamos resíduo em recurso, redefinindo o que chamamos de \"descarte\" na economia circular.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mercado Section */}
      <section id="mercado" className="py-20 md:py-32 bg-accent/30">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Conteúdo */}
            <div>
              <h2 className="font-serif font-bold text-4xl md:text-5xl mb-6 text-primary">
                Análise de Mercado
              </h2>
              <div className="space-y-6">
                <div>
                  <h4 className="font-serif font-bold text-xl text-primary mb-2">
                    Tamanho do Mercado
                  </h4>
                  <p className="text-foreground/80">
                    Mercado brasileiro de embalagens movimenta mais de R$ 130 bilhões por ano
                  </p>
                </div>
                <div>
                  <h4 className="font-serif font-bold text-xl text-primary mb-2">
                    Crescimento Sustentável
                  </h4>
                  <p className="text-foreground/80">
                    Segmento de embalagens sustentáveis cresce a taxa superior a 8% ao ano
                  </p>
                </div>
                <div>
                  <h4 className="font-serif font-bold text-xl text-primary mb-2">
                    Persona Primária
                  </h4>
                  <p className="text-foreground/80">
                    Gestores de compras e proprietários de PMEs do setor alimentício que buscam diferenciação ambiental
                  </p>
                </div>
              </div>
            </div>

            {/* Gráfico */}
            <div className="relative h-96 md:h-full min-h-96 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663261380883/E53SJ7xRztnrVwGqMqGj4y/cappu-market-opportunity-dUW33oBq42w8NUk4zXZNrR.webp"
                alt="Oportunidade de mercado"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Estratégia Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <h2 className="font-serif font-bold text-4xl md:text-5xl mb-12 text-primary text-center">
            Estratégia de Longo Prazo
          </h2>

          <div className="max-w-3xl mx-auto space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-primary-foreground font-serif font-bold">
                  1
                </div>
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl text-primary mb-2">
                  Prova de Conceito
                </h3>
                <p className="text-foreground/80">
                  Início em Minas Gerais, maior polo cafeeiro, com clientes reais e impacto mensurável desde o primeiro lote.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-primary-foreground font-serif font-bold">
                  2
                </div>
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl text-primary mb-2">
                  Consolidação e Certificação
                </h3>
                <p className="text-foreground/80">
                  Construir parcerias locais que funcionam como certificação viva do produto, conquistando certificações técnicas que respaldam qualidade.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-primary-foreground font-serif font-bold">
                  3
                </div>
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl text-primary mb-2">
                  Expansão Escalável
                </h3>
                <p className="text-foreground/80">
                  Crescimento em território, linha de produtos e escala, ancorado em três certezas: produção contínua de café, regulação ambiental crescente e necessidade de diferenciação.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 relative h-96 md:h-full min-h-96 rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663261380883/E53SJ7xRztnrVwGqMqGj4y/cappu-team-innovation-ZubrNrkakKsU8bAobRU7HP.webp"
              alt="Inovação e colaboração"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contato" className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Conteudo */}
            <div className="text-left">
              <h2 className="font-serif font-bold text-4xl md:text-5xl mb-6">
                Investir na Cappu & Co
              </h2>
              <p className="text-lg opacity-90 mb-8 leading-relaxed">
                É apostar em um mercado em expansão, em tecnologia com base científica, em impacto ambiental real e em um produto que o consumidor moderno já está pedindo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="px-8 py-3 bg-primary-foreground text-primary rounded-lg hover:bg-primary-foreground/90 transition-all duration-300 font-medium">
                  Solicitar Apresentação
                </button>
                <button className="px-8 py-3 border-2 border-primary-foreground text-primary-foreground rounded-lg hover:bg-primary-foreground/10 transition-all duration-300 font-medium">
                  Enviar Mensagem
                </button>
              </div>
              <p className="text-sm opacity-75">
                A pergunta não é se o mercado está pronto. A pergunta é: você está pronto para fazer parte disso?
              </p>
            </div>

            {/* Mascote Celebrando */}
            <div className="flex items-center justify-center">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663261380883/E53SJ7xRztnrVwGqMqGj4y/cappu-pose-celebrating-KhrBvFCQJ7giZPR9WkYndw.webp"
                alt="Cappu Celebrando Sucesso"
                className="w-full max-w-sm h-auto drop-shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
