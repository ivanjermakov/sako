import { FeNotation } from './fe-notation.model'

describe('FeNotation', () => {

  describe('pretty', () => {
    const verify = (notation: FeNotation, expected: string) => expect(notation.pretty()).toBe(expected)

    it('starting position', () => {
      verify(
        FeNotation.STARTING_POSITION,
        'w KQkq - 0 1\n' +
        '\n' +
        'r n b q k b n r \n' +
        'p p p p p p p p \n' +
        '. . . . . . . . \n' +
        '. . . . . . . . \n' +
        '. . . . . . . . \n' +
        '. . . . . . . . \n' +
        'P P P P P P P P \n' +
        'R N B Q K B N R '
      )
    })
    it('1.e4', () => {
      verify(
        new FeNotation('rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1'),
        'b KQkq e3 0 1\n' +
        '\n' +
        'r n b q k b n r \n' +
        'p p p p p p p p \n' +
        '. . . . . . . . \n' +
        '. . . . . . . . \n' +
        '. . . . P . . . \n' +
        '. . . . . . . . \n' +
        'P P P P . P P P \n' +
        'R N B Q K B N R '
      )
    })
    it('1..c5', () => {
      verify(
        new FeNotation('rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq c6 0 2'),
        'w KQkq c6 0 2\n' +
        '\n' +
        'r n b q k b n r \n' +
        'p p . p p p p p \n' +
        '. . . . . . . . \n' +
        '. . p . . . . . \n' +
        '. . . . P . . . \n' +
        '. . . . . . . . \n' +
        'P P P P . P P P \n' +
        'R N B Q K B N R '
      )
    })
    it('2.Nf3', () => {
      verify(
        new FeNotation('rnbqkbnr/pp1ppppp/8/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2'),
        'b KQkq - 1 2\n' +
        '\n' +
        'r n b q k b n r \n' +
        'p p . p p p p p \n' +
        '. . . . . . . . \n' +
        '. . p . . . . . \n' +
        '. . . . P . . . \n' +
        '. . . . . N . . \n' +
        'P P P P . P P P \n' +
        'R N B Q K B . R '
      )
    })
  })

})
