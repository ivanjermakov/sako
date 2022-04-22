import { Piece } from './piece.model'
import { values } from '../util/enum.util'

export class FeNotation {

  static readonly STARTING_POSITION = new FeNotation('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1')
  static pieceNames = values(Piece)

  repr: string

  constructor(repr: string) {
    this.repr = repr
  }

  /**
   * TODO: validation in constructor
   */
  pretty(): string {
    const [board, sideToMove, castling, enPassant, halfMove, fullMove] = this.repr.split(' ')
    const prettyBoard = board.split('/')
      .map(line =>
        line
          .split('')
          .map(c => {
            let emptySquareCount = parseInt(c)
            if (FeNotation.pieceNames.includes(c)) {
              return c + ' '
            } else if (!Number.isNaN(c)) {
              return '. '.repeat(emptySquareCount)
            } else {
              throw Error('format error')
            }
          })
          .join('')
      )
      .join('\n')

    const meta = [sideToMove, castling, enPassant, halfMove, fullMove].join(' ')

    return [meta, '', prettyBoard].join('\n')
  }

}