import { Side } from './side'

export enum Castling {

  King = 'O-O',
  Queen = 'O-O-O'

}

export interface SideCastling {
  side: Side
  castling: Castling
}