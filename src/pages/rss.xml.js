import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET() {
  return new Response((await rss({
    title: 'Astro Learner | Blog',
    description: 'My journey learning Astro',
    site: 'https://stephenharwell.dev',
    items: await pagesGlobToRssItems(import.meta.glob('./projects/**/*.md')),
    customData: `<language>en-us</language>`,
  })).body);
}