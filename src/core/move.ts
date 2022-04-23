import { Piece, pieceFromAn } from './piece'
import { Castling } from './castling'
import { File, Rank, Square } from './square'
import { keys } from '../util/enum.util'
import { isLowerCase } from '../util/string.util'

export class Move {

  piece: Piece
  capture: boolean
  check: boolean
  checkmate: boolean
  castle?: Castling
  square?: Square
  departureFile?: File
  departureRank?: Rank
  promotion?: Piece

  constructor(piece: Piece, capture: boolean, check: boolean, checkmate: boolean, opts?: { castle?: Castling, square?: Square, departureFile?: File, departureRank?: Rank, promotion?: Piece }) {
    this.piece = piece
    this.capture = capture
    this.check = check
    this.checkmate = checkmate
    this.castle = opts?.castle
    this.square = opts?.square
    this.departureFile = opts?.departureFile
    this.departureRank = opts?.departureRank
    this.promotion = opts?.promotion
  }

  // TODO: validation
  static fromAn(an: string): Move {
    let pieceTokens: Piece[] = []
    let capture: boolean = false
    let check: boolean = false
    let checkmate: boolean = false
    let castle: Castling
    let rankTokens: File[] = []
    let fileTokens: File[] = []
    let hasPromotion: boolean = false

    if (an === Castling.Queen) {
      pieceTokens = [Piece.King]
      castle = Castling.Queen
    } else if (an === Castling.King) {
      pieceTokens = [Piece.King]
      castle = Castling.King
    }

    if (an.includes('+')) {
      check = true
    }
    if (an.includes('#')) {
      check = true
      checkmate = true
    }
    if (an.includes('=')) {
      hasPromotion = true
    }
    if (an.includes('x')) {
      capture = true
    }

    for (const c of an) {
      if (isLowerCase(c) && keys(File).includes(c.toUpperCase())) {
        const fileToken = File[c.toUpperCase()]
        fileTokens = [...fileTokens, fileToken]
      }
      let digit = parseInt(c)
      if (!isNaN(digit)) {
        rankTokens = [...rankTokens, digit]
      }
      const fePiece = pieceFromAn(c)
      if (fePiece) {
        pieceTokens = [...pieceTokens, fePiece]
      }

    }

    const piece = !pieceTokens.length || hasPromotion ? Piece.Pawn : pieceTokens[0]
    const square = fileTokens.length && fileTokens.length
      ? new Square(fileTokens.at(-1), rankTokens.at(-1))
      : undefined
    const departureFile = fileTokens.length > 1 ? fileTokens[0] : undefined
    const departureRank = rankTokens.length > 1 ? rankTokens[0] : undefined
    const promotion = hasPromotion ? pieceTokens[0] : undefined

    return new Move(piece, capture, check, checkmate, {
      castle,
      square,
      departureFile,
      departureRank,
      promotion
    })
  }

}