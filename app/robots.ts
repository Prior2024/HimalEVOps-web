import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/dashboard/', // Keeps your private employee dashboard hidden from Google
    },
    sitemap: 'https://himalevops.vercel.app/sitemap.xml',
  }
}