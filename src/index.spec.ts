import {encode, decode } from './index';

const deckCode = 'CMAQQAICAQDASDIRCYNCUAYBAQBA4AYBAICREKIDAQDRUHDZAIAQCAQLAECAO3Q';

describe('Print decode and encode', () => {
      it('should decode and encode and have the same result', () => {
          const decodedDeck = decode(deckCode)
          const encodedDeck = encode(decodedDeck);
        expect(deckCode).toEqual(encodedDeck);
      });
  });