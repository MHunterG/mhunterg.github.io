export const SITE = {
  name: 'Vladimir Ivanov',
  handle: 'MHunterG',
  role: 'Go engineer · ML infrastructure',
  source: 'https://github.com/MHunterG/mhunterg.github.io',
}

export type ContactLink = {
  label: string
  value: string
  href: string
}

// All of these were already public on the previous version of the site.
// Remove a line to take it off the page.
export const CONTACTS: ContactLink[] = [
  { label: 'GitHub', value: 'MHunterG', href: 'https://github.com/MHunterG' },
  { label: 'LinkedIn', value: 'in/ncqat', href: 'https://www.linkedin.com/in/ncqat/' },
  { label: 'Telegram', value: '@AdamNorman', href: 'https://t.me/adamnorman' },
  { label: 'Email', value: 'no0evil0mail@gmail.com', href: 'mailto:no0evil0mail@gmail.com' },
]
