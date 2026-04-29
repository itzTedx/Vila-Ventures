type PluralizeOptions = {
  count: number
  singular: string
  plural?: string
}

const DEFAULT_ES_ENDINGS = ["s", "x", "z", "ch", "sh"] as const

function toDefaultPlural(word: string): string {
  if (DEFAULT_ES_ENDINGS.some((ending) => word.endsWith(ending))) {
    return `${word}es`
  }

  if (word.endsWith("y") && word.length > 1) {
    const beforeY = word[word.length - 2]
    const isVowel = /[aeiou]/i.test(beforeY)

    if (!isVowel) {
      return `${word.slice(0, -1)}ies`
    }
  }

  return `${word}s`
}

export function pluralize({ count, singular, plural }: PluralizeOptions): string {
  if (count === 1) {
    return singular
  }

  if (plural) {
    return plural
  }

  return toDefaultPlural(singular)
}
