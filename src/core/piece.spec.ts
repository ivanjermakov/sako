import { Piece, pieceFromAn } from './piece'

describe('Piece', () => {

  describe('pieceFromAn', () => {
    it('e', () => {
      const piece = pieceFromAn('e')
      expect(piece).toEqual(undefined)
    })
  })

})
