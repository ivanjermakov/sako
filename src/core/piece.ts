import { Side } from './side'
import { values } from '../util/enum.util'
import { isLowerCase } from '../util/string.util'

export enum Piece {

  Pawn = 'p',
  Knight = 'n',
  Bishop = 'b',
  Rook = 'r',
  Queen = 'q',
  King = 'k',

}

export const pieceFromAn = (an: string): Piece => {
  if (isLowerCase(an)) {
    return undefined
  }
  const piece = an.toLowerCase() as Piece
  if (values(Piece).some(p => p === piece)) {
    return piece
  } else {
    return undefined
  }
}

export interface SidePiece {
  side: Side
  piece: Piece
}