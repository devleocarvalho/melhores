import React from 'react';

const produtos = [
  {
    id: 'oster-touch',
    nome: 'Oster PrimaLatte Touch Red',
    tag: 'A Queridinha dos Brasileiros',
    desc: 'Café expresso, latte e cappuccino com apenas um toque. O grande diferencial é o reservatório de leite de 600ml que pode ser levado à geladeira e a compatibilidade com cápsulas Nespresso®.',
    img: '/img/oster.jpg'
  },
  {
    id: 'philips-lattego',
    nome: 'Philips Walita LatteGo 4400',
    tag: 'Tecnologia Superautomática',
    desc: 'Para quem busca o ápice da praticidade. Moedores 100% cerâmica e o sistema LatteGo, o mais fácil de limpar do mercado. Prepara 12 variedades de bebidas com grãos moídos na hora.',
    img: '/img/philips.jpg'
  },
  {
    id: 'philco-coffee',
    nome: 'Philco Coffee Express 15 Bar',
    tag: 'Melhor Custo-Benefício',
    desc: 'A escolha ideal para quem quer um expresso de qualidade sem gastar muito. Com 15 bars de pressão, bico vaporizador para leite e acabamento em aço inox, traz durabilidade e elegância.',
    img: '/img/philco.jpg'
  }
];

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 selection:bg-orange-100">
      
      {/* HEADER: Foco em Autoridade */}
      <header className="bg-white border-b border-gray-200 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-orange-600 font-bold tracking-widest text-sm uppercase">Análise Especializada 2026</span>
          <h1 className="text-4xl md:text-6xl font-black mt-4 mb-6 leading-tight">
            Qual a <span className="text-orange-600">Melhor Cafeteira</span> para sua Casa?
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Testamos os modelos mais vendidos da Amazon Brasil para ajudar você a escolher a máquina ideal para o seu paladar e bolso.
          </p>
        </div>
      </header>

      {/* GRID DE PRODUTOS: Foco em CTR (Clique) */}
      <main className="max-w-6xl mx-auto py-16 px-6 grid gap-10 md:grid-cols-3">
        {produtos.map((item) => (
          <div key={item.id} className="group bg-white rounded-[2.5rem] border border-gray-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col overflow-hidden">
            <div className="p-8 flex-1">
              <div className="bg-orange-50 text-orange-700 text-[10px] font-black uppercase px-4 py-1.5 rounded-full inline-block mb-6">
                {item.tag}
              </div>
              <div className="h-60 flex items-center justify-center mb-8 bg-gray-50 rounded-2xl">
                <img 
                  src={item.img} 
                  alt={item.nome} 
                  className="max-h-[80%] object-contain group-hover:scale-110 transition-transform duration-700" 
                />
              </div>
              <h2 className="text-2xl font-bold mb-4 group-hover:text-orange-600 transition-colors">{item.nome}</h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                {item.desc}
              </p>
            </div>
            
            <div className="p-8 pt-0 mt-auto">
              <a 
                href={`/go/${item.id}`} 
                target="_blank" 
                rel="nofollow noopener"
                className="block w-full bg-zinc-900 hover:bg-orange-600 text-white text-center font-bold py-5 rounded-2xl transition-all shadow-xl active:scale-95"
              >
                Ver Preço na Amazon Brasil
                <span className="block text-[10px] font-normal opacity-60 mt-1 uppercase tracking-tighter">Clique para conferir estoque e parcelamento</span>
              </a>
            </div>
          </div>
        ))}
      </main>

      {/* CONTEÚDO ADVERTORIAL: Crucial para aprovação de anúncios */}
      <section className="max-w-3xl mx-auto px-6 py-24 border-t border-gray-100">
        <h3 className="text-3xl font-bold mb-8 text-center">O que considerar antes de comprar?</h3>
        <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
          <p>
            Escolher uma cafeteira em 2026 vai além do design. Modelos como a <strong>Philips LatteGo</strong> focam em quem não quer ter trabalho com limpeza, enquanto a <strong>Oster PrimaLatte</strong> é voltada para quem gosta de versatilidade entre pó e cápsulas.
          </p>
          <p>
            Nossa equipe avalia a pressão da bomba (BAR), a estabilidade da temperatura e, principalmente, o custo por xícara a longo prazo. Lembre-se: máquinas de entrada são baratas hoje, mas verifique sempre o preço dos insumos.
          </p>
        </div>
      </section>

      {/* FOOTER: Regras de Afiliados e Transparência */}
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