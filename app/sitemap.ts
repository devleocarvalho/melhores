import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  // Substitua pela sua URL da Vercel ou seu domínio próprio
  const baseUrl = 'https://melhores-cafeterias2026.vercel.app'

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    // Se você criar páginas individuais para cada cafeteira no futuro, elas entram aqui
  ]
}