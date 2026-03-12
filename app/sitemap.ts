import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  
  const baseUrl = 'https://melhoresdoano-wine.vercel.app/' // URL temporária, ajustar para o domínio final

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    
  ]
}