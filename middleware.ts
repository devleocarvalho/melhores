import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import produtosData from './produtos.json';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

 
  if (pathname.startsWith('/go/')) {
  
    const id = pathname.split('/').filter(Boolean).pop();
    
   
    const produto = Object.values(produtosData)
      .flat()
      .find((p: any) => p.id === id);

    if (produto && produto.affiliateUrl) {
    
      return NextResponse.redirect(produto.affiliateUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/go/:id*',
};