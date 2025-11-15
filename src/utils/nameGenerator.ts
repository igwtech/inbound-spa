const adjectives = [
  'Artful',
  'Witty',
  'Vivid',
  'Zesty',
  'Jaunty',
  'Dapper',
  'Nimble',
  'Hardy',
  'Intrepid',
  'Cosmic'
]
const nouns = [
  'Aardvark',
  'Badger',
  'Chameleon',
  'Dragon',
  'Echidna',
  'Fossa',
  'Gibbon',
  'Heron',
  'Ibex',
  'Jackal'
]

export function generateRandomName(): string {
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)]
  const noun = nouns[Math.floor(Math.random() * nouns.length)]
  return `${adjective} ${noun}`
}
