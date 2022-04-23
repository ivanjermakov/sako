import { File, Square } from './square'

describe('Square', () => {

  describe('fromAn', () => {
    it('e4', () => {
      const square = Square.fromAn('e4')
      expect(square.file).toEqual(File.E)
      expect(square.rank).toEqual(4)
    })
    it('a1', () => {
      const square = Square.fromAn('a1')
      expect(square.file).toEqual(File.A)
      expect(square.rank).toEqual(1)
    })
    it('h8', () => {
      const square = Square.fromAn('h8')
      expect(square.file).toEqual(File.H)
      expect(square.rank).toEqual(8)
    })
  })

})
