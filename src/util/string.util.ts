export const isLowerCase = str =>
  str == str.toLowerCase() && str != str.toUpperCase()

export const isUpperCase = str =>
  str != str.toLowerCase() && str == str.toUpperCase()
