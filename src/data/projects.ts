export type Link = { label: string; href: string }

export type Port = {
  name: string
  kind: 'Port' | 'Framework'
  /** What it is a port of, or what it is. Names are for identification only. */
  subject: string
  blurb: string
  repo: string
  /**
   * Whether the repository is public. While false the card renders no link
   * and says "Coming soon" instead of pointing at GitHub.
   */
  published: boolean
  /** Where it is right now, in a few words. */
  status: string
}

export const YAKUMO = {
  name: 'Yakumo',
  subject: 'Monster Hunter Portable 3rd HD Ver.',
  status: 'Playable',
  blurb:
    'The furthest along. Start a new game or bring your PSP save, hunt, and play online with other hunters. It renders through Vulkan at whatever resolution you like, can interpolate frames up to your display’s refresh rate, and takes HD texture packs and community mods.',
  platforms: [
    { label: 'Linux & Steam Deck', note: 'Flatpak and tarball' },
    { label: 'Windows', note: 'portable build' },
    { label: 'macOS', note: 'build from source' },
    { label: 'Android', note: 'in progress' },
  ],
  stack: ['C++20', 'Vulkan', 'SDL3'],
  links: [
    { label: 'Source', href: 'https://github.com/TeamGDB/Yakumo' },
    { label: 'Releases', href: 'https://github.com/TeamGDB/Yakumo/releases' },
  ] satisfies Link[],
}

export const PORTS: Port[] = [
  {
    name: 'PortableKit',
    kind: 'Framework',
    subject: 'Recompiler and runtime',
    blurb:
      'Pulled out of Yakumo so other games can use it: the recompiler, plus what the console used to provide. Kernel, system modules, a Vulkan renderer, audio, saves, ad hoc networking. A new game is a small profile on top.',
    repo: 'https://github.com/TeamGDB/PortableKit',
    published: true,
    status: 'Early',
  },
  {
    name: 'Purun',
    kind: 'Port',
    subject: 'LocoRoco 2',
    blurb:
      'The first level plays through, recompiled and at full speed, and the game saves and continues. Only tried on macOS so far.',
    repo: 'https://github.com/TeamGDB/Purun',
    published: true,
    status: 'First level plays',
  },
  {
    name: 'Tenkawa',
    kind: 'Port',
    subject: 'Dragon Ball Z: Tenkaichi Tag Team',
    blurb:
      'The newest. It boots and draws its title screen under the interpreter; the recompiled build runs but does not draw yet.',
    repo: 'https://github.com/TeamGDB/Tenkawa',
    published: true,
    status: 'Title screen',
  },
]

export type Side = { name: string; blurb: string; lang: string; href: string }

export const ELSEWHERE: Side[] = [
  {
    name: 'Caelo',
    blurb: 'A VPN client for subscription links. Paste a link and it works: no account, no telemetry.',
    lang: 'Dart',
    href: 'https://github.com/TeamGDB/Caelo',
  },
  {
    name: 'opsearch',
    blurb: 'Is exp(x) − ln(y) special? An exhaustive screen of candidate operators from the same family.',
    lang: 'Python',
    href: 'https://github.com/MHunterG/opsearch',
  },
  {
    name: 'nems',
    blurb: 'Symbolic regression over that same operator, with a small transformer guiding the search.',
    lang: 'Python',
    href: 'https://github.com/MHunterG/nems',
  },
  {
    name: 'odogoron',
    blurb: 'A small framework for event-driven services.',
    lang: 'Go',
    href: 'https://github.com/TeamGDB/odogoron',
  },
]
