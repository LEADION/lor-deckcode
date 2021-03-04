import { decode } from './decode';
import { TEST_DATA } from './testset';

describe('Decode', () => {
  for (const { code, deck } of TEST_DATA) {
    it('should return an array of cards', () => {
      expect(decode(code)).toStrictEqual(deck.sort( (a, b) => a.code.localeCompare(b.code)));
    });
  }
});
