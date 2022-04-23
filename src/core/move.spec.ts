import { Move } from './move'
import { Piece } from './piece'
import { File, Square } from './square'
import { Castling } from './castling'

describe('Move', () => {

  describe('fromAn', () => {
    it('e4', () => {
      const move = Move.fromAn('e4')
      expect(move.piece).toEqual(Piece.Pawn)
      expect(move.square).toEqual(Square.fromAn('e4'))
    })
    it('Nf6', () => {
      const move = Move.fromAn('Nf6')
      expect(move.piece).toEqual(Piece.Knight)
      expect(move.square).toEqual(Square.fromAn('f6'))
    })
    it('dxc4', () => {
      const move = Move.fromAn('dxc4')
      expect(move.piece).toEqual(Piece.Pawn)
      expect(move.square).toEqual(Square.fromAn('c4'))
      expect(move.departureFile).toEqual(File.D)
    })
    it('Nc3+', () => {
      const move = Move.fromAn('Nc3+')
      expect(move.piece).toEqual(Piece.Knight)
      expect(move.square).toEqual(Square.fromAn('c3'))
      expect(move.check).toEqual(true)
    })
    it('Qh4xe1', () => {
      const move = Move.fromAn('Qh4xe1#')
      expect(move.piece).toEqual(Piece.Queen)
      expect(move.departureFile).toEqual(File.H)
      expect(move.departureRank).toEqual(4)
      expect(move.square).toEqual(Square.fromAn('e1'))
      expect(move.checkmate).toEqual(true)
    })
    it('O-O', () => {
      const move = Move.fromAn('O-O')
      expect(move.piece).toEqual(Piece.King)
      expect(move.square).toEqual(undefined)
      expect(move.castle).toEqual(Castling.King)
    })
    it('O-O-O', () => {
      const move = Move.fromAn('O-O-O')
      expect(move.piece).toEqual(Piece.King)
      expect(move.square).toEqual(undefined)
      expect(move.castle).toEqual(Castling.Queen)
    })
    it('e8=Q', () => {
      const move = Move.fromAn('e8=Q')
      expect(move.piece).toEqual(Piece.Pawn)
      expect(move.square).toEqual(Square.fromAn('e8'))
      expect(move.promotion).toEqual(Piece.Queen)
    })
    it('bxc8=Q', () => {
      const move = Move.fromAn('bxc8=Q')
      expect(move.piece).toEqual(Piece.Pawn)
      expect(move.square).toEqual(Square.fromAn('c8'))
      expect(move.capture).toEqual(true)
      expect(move.departureFile).toEqual(File.B)
      expect(move.promotion).toEqual(Piece.Queen)
    })
    it('b4Bxf8', () => {
      const move = Move.fromAn('b4Bxf8')
      expect(move.piece).toEqual(Piece.Bishop)
      expect(move.square).toEqual(Square.fromAn('f8'))
      expect(move.capture).toEqual(true)
      expect(move.departureFile).toEqual(File.B)
      expect(move.departureRank).toEqual(4)
    })
    it('e8=N#', () => {
      const move = Move.fromAn('e8=N#')
      expect(move.piece).toEqual(Piece.Pawn)
      expect(move.square).toEqual(Square.fromAn('e8'))
      expect(move.promotion).toEqual(Piece.Knight)
      expect(move.checkmate).toEqual(true)
    })
  })

})
