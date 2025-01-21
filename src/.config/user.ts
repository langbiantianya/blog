import type { UserConfig } from '~/types'

export const userConfig: Partial<UserConfig> = {
  // Override the default config here
  site: {
    title: 'langbiantianya',
    subtitle: '愿此行 终抵群星',
    author: 'lanbiantianya',
    description: '',
    website: 'https://blog.kxxnzstdsw.com/',
    socialLinks: [{
      name: 'github',
      href: 'https://github.com/langbiantianya',
    }, {
      name: 'rss',
      href: '/atom.xml',
    }],
    categoryMap: [],
    footer: [
      '© %year <a target="_blank" href="%website">%author</a>',
      'Theme <a target="_blank" href="https://github.com/Moeyua/astro-theme-typography">Typography</a> by <a target="_blank" href="https://moeyua.com">Moeyua</a>',
      'Proudly published with <a target="_blank" href="https://astro.build/">Astro</a>',
    ],
  },
  comment: {
    giscus: {
      repo: 'langbiantianya/blog',
      repoId: 'R_kgDONrdozQ',
      category: 'General',
      categoryId: 'DIC_kwDONrdozc4CmLF0',
      mapping: 'pathname',
      strict: '0',
      reactionsEnabled: '1',
      emitMetadata: '0',
      inputPosition: 'bottom',
      theme: 'preferred_color_scheme',
      lang: 'zh-CN',
      loading: 'lazy',
    },
  },
}
