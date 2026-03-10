import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Mapeamento dos links com os IDs que usamos no componente de página
const LINKS: Record<string, string> = {
  'oster-touch': 'https://www.amazon.com.br/Cafeteira-Espresso-Oster-PrimaLatte-BVSTEM6801R/dp/B0C7FBYDFP?tag=amazonaux0f-20&linkCode=ll2&linkId=1eb50e3c0c36cf096c8f5dcbd8c5e02a&ref_=as_li_ss_tl',
  'philips-lattego': 'https://www.amazon.com.br/Cafeteira-Espresso-Superautom%C3%A1tica-Walita-garantia/dp/B0DVBCTYJC?tag=amazonaux0f-20&linkCode=ll2&linkId=a6bfa27f96ddbe61fddb980ada70de76&ref_=as_li_ss_tl',
  'philco-coffee': 'https://www.amazon.com.br/Cafeteira-Coffee-Express-Philco-220V/dp/B076HQ1K5H?tag=amazonaux0f-20&linkCode=ll2&linkId=8d785859dd26998ab97ccf511194376c&ref_=as_li_ss_tl',
}

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  
  if (url.pathname.startsWith('/go/')) {
    const slug = url.pathname.replace('/go/', '')
    const target = LINKS[slug]

    if (target) {
      // Redirecionamento 307 (Temporário) é melhor para testes e links de afiliados
      return NextResponse.redirect(new URL(target, request.url))
    }
  }
}

// Configuração para o Next.js rodar o middleware apenas nessas rotas (performance)
export const config = {
  matcher: '/go/:path*',
}