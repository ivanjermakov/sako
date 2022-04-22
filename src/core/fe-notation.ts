import { Piece } from './piece'
import { Side } from './side'


export class FeNotation {

  static readonly NAMES = {
    'P': [Side.White, Piece.Pawn],
    'N': [Side.White, Piece.Knight],
    'B': [Side.White, Piece.Bishop],
    'R': [Side.White, Piece.Rook],
    'Q': [Side.White, Piece.Queen],
    'K': [Side.White, Piece.King],
    'p': [Side.Black, Piece.Pawn],
    'n': [Side.Black, Piece.Knight],
    'b': [Side.Black, Piece.Bishop],
    'r': [Side.Black, Piece.Rook],
    'q': [Side.Black, Piece.Queen],
    'k': [Side.Black, Piece.King]
  }
  static readonly STARTING_POSITION = new FeNotation('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1')

  repr: string

  constructor(repr: string) {
    this.repr = repr
  }

  pretty(): string {
    let tokens = this.repr.split(' ')
    const board = tokens[0]
    const meta = tokens.slice(1).join(' ')

    return [meta, '', this.prettyBoard(board)].join('\n')
  }

  prettyBoard(board: string): string {
    return board.split('/')
      .map(line =>
        line
          .split('')
          .map(c => {
            let emptySquareCount = parseInt(c)
            if (Object.keys(FeNotation.NAMES).includes(c)) {
              return c + ' '
            } else if (!Number.isNaN(c)) {
              return '. '.repeat(emptySquareCount)
            } else {
              // TODO: validate in constructor
              throw Error('format error')
            }
          })
          .join('')
      )
      .join('\n')
  }

}