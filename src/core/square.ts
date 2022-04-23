export enum File {
  A = 1,
  B = 2,
  C = 3,
  D = 4,
  E = 5,
  F = 6,
  G = 7,
  H = 8,
}

export type Rank = number

export class Square {

  file: File
  rank: Rank

  constructor(file: File, rank: Rank) {
    this.file = file
    this.rank = rank
  }

  static fromAn(square: string): Square | undefined {
    if (square.length != 2) {
      return undefined
    }
    const [fileToken, rankToken] = square.split('')
    const file = File[fileToken.toUpperCase()]
    const rank = parseInt(rankToken)

    if (file !== undefined && !isNaN(rank)) {
      return new Square(file, rank)
    } else {
      return undefined
    }
  }

}