import React from 'react';
import { Search, TrendingUp } from 'lucide-react'; // Sugestão: instalar lucide-react para ícones
import Image from 'next/image';
import categoriasData from '../produtos.json';

interface Produto {
  id: string;
  nome: string;
  badge: string;
  desc: string;
  img: string;
  affiliateUrl: string;
  categoria: string;
}

// Tipagem simples para o consumo dos dados
// Transforma o objeto de categorias em um array compatível com o .map()
const categorias = Object.entries(categoriasData).map(([nome, produtos]) => ({
  nome,
  produtos: produtos as Produto[]
}));

// Busca o produto específico para o destaque (Hero) dentro do JSON
const heroProduct = categorias
  .flatMap(cat => cat.produtos)
  .find(p => p.id === 'oster-touch');

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 selection:bg-orange-100">
      {/* BARRA DE BUSCA E NAVEGAÇÃO */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 py-4 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xl font-black tracking-tighter text-orange-600">MELHORES2026</div>
          <div className="relative w-full md:w-96">
            <input 
              type="text" 
              placeholder="O que você está procurando hoje?" 
              className="w-full bg-gray-100 border-none rounded-full py-3 px-6 pl-12 focus:ring-2 focus:ring-orange-500 outline-none transition-all"
            />
            <Search className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />
          </div>
        </div>
      </nav>

      <header className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-orange-600 font-bold tracking-widest text-sm uppercase">Guia de Compras Inteligente</span>
          <h1 className="text-4xl md:text-6xl font-black mt-4 mb-6 leading-tight">
            Qual o <span className="text-orange-600">Melhor do Ano</span> para você e sua casa?
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Analisamos milhares de produtos para entregar apenas o que realmente vale o seu dinheiro.
          </p>
        </div>
      </header>

      {/* DESTAQUE PERSONALIZADO (Simulado baseado em interesse) */}
      <section className="max-w-6xl mx-auto px-6 mb-16">
        <div className="bg-zinc-900 rounded-[3rem] p-8 md:p-12 text-white flex flex-col md:flex-row items-center gap-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <TrendingUp size={200} />
          </div>
          <div className="flex-1 z-10 text-center md:text-left">
            <div className="bg-orange-600 text-[10px] font-bold uppercase px-3 py-1 rounded-full inline-block mb-4">Baseado no seu interesse</div>
            <h2 className="text-3xl md:text-5xl font-black mb-4">{heroProduct?.nome || "Não perca o achado do dia!"}</h2>
            <p className="text-gray-400 text-lg mb-8">{heroProduct?.desc || "O item que você procurou está com estoque limitado e preço reduzido."}</p>
            <a 
              href={heroProduct?.affiliateUrl || "https://amzn.to/3NtrnUW"} 
              target="_blank" 
              rel="nofollow sponsored" 
              className="inline-block bg-white text-zinc-900 font-bold px-8 py-4 rounded-2xl hover:bg-orange-500 hover:text-white transition-all"
            >
              Conferir Oferta na Amazon
            </a>
          </div>
          <div className="w-64 h-64 bg-white/5 rounded-3xl backdrop-blur-sm flex items-center justify-center p-6">
             <Image 
                src={heroProduct?.img || "/img/logo2.jpg"} 
                alt="Destaque" 
                width={250} 
                height={250} 
                className="max-h-full object-contain shadow-2xl" 
              />
          </div>
        </div>
      </section>

      {/* LISTAGEM POR CATEGORIAS */}
      <main className="max-w-6xl mx-auto pb-16 px-6">
        {categorias.map((cat) => cat.produtos.length > 0 && (
          <div key={cat.nome} className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-3xl font-black tracking-tight">{cat.nome}</h2>
              <div className="h-px bg-gray-200 flex-1"></div>
              <span className="text-sm font-bold text-gray-400 uppercase">Top 3 Escolhas</span>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {cat.produtos.map((item) => (
                <div key={item.id} className="group bg-white rounded-[2rem] border border-gray-200 shadow-sm hover:shadow-xl transition-all flex flex-col overflow-hidden">
                  <div className="p-6 flex-1">
                    <div className={`text-[10px] font-black uppercase px-3 py-1 rounded-full inline-block mb-4 ${
                      item.badge === 'Melhor Preço' ? 'bg-green-100 text-green-700' : 
                      item.badge === 'Melhor Nota' ? 'bg-blue-100 text-blue-700' : 'bg-orange-100 text-orange-700'
                    }`}>
                      {item.badge}
                    </div>
                    <div className="h-48 flex items-center justify-center mb-6">
                      <Image 
                        src={item.img || '/img/placeholder.jpg'} 
                        alt={item.nome} 
                        width={200} 
                        height={200} 
                        className="max-h-full object-contain group-hover:scale-105 transition-all duration-500" 
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.nome}</h3>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                  <div className="p-6 pt-0">
                    <a href={`/go/${item.id}`} target="_blank" rel="nofollow" className="block w-full bg-zinc-100 group-hover:bg-orange-600 group-hover:text-white text-zinc-900 text-center font-bold py-4 rounded-xl transition-all">
                      Ver Preço na Amazon
                    </a>
                  </div>
                </div>
              ))}
              </div>
          </div>
        ))}
      </main>

      <footer className="bg-white border-t border-gray-200 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-2xl font-black text-gray-200 italic mb-8 uppercase tracking-tighter">Melhores Escolhas</div>
          
          <p className="text-[11px] text-gray-400 max-w-2xl mx-auto leading-relaxed uppercase font-medium">
            <strong>Transparência de Afiliado:</strong> Participamos do Programa de Associados da Amazon. Ao clicar em nossos links e realizar uma compra, podemos receber uma pequena comissão. Isso não altera o preço para você e ajuda a manter nossas análises independentes e gratuitas. Preços e disponibilidade sujeitos a alterações pela plataforma oficial.
          </p>
          
          <div className="flex justify-center space-x-8 mt-10 text-[10px] text-gray-400 uppercase font-bold tracking-widest">
            <a href="#" className="hover:text-orange-600 transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-orange-600 transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-orange-600 transition-colors">Contato</a>
          </div>
        </div>
      </footer>
    </div>
  );
}