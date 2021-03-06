# LoR Deckcode

Legends of Runeterra deck encoder/decoder in TypeScript. Based on [LorDeckCodes](https://github.com/RiotGames/LoRDeckCodes) & [icepeng-rep](https://github.com/icepeng/lor-deckcode). This is an up-to-date code including the new set, Builded for [LoR Guardian](https://lorguardian.com) and for the commuinty.

## Install

```
npm i lorguardian-deckcode
```

## Example

TypeScript

```ts
import { decode, encode } from 'lorguardian-deckcode';

const deck = decode('CEBAIAIFB4WDANQIAEAQGDAUDAQSIJZUAIAQCBIFAEAQCBAA');
/*
[
    { code: '01SI015', count: 3 },
    { code: '01SI044', count: 3 },
    { code: '01SI048', count: 3 },
    { code: '01SI054', count: 3 },
    { code: '01FR003', count: 3 },
    { code: '01FR012', count: 3 },
    { code: '01FR020', count: 3 },
    { code: '01FR024', count: 3 },
    { code: '01FR033', count: 3 },
    { code: '01FR036', count: 3 },
    { code: '01FR039', count: 3 },
    { code: '01FR052', count: 3 },
    { code: '01SI005', count: 2 },
    { code: '01FR004', count: 2 },
]
*/

const code = encode(deck);
// CEBAIAIFB4WDANQIAEAQGDAUDAQSIJZUAIAQCBIFAEAQCBAA
```

JavaScript (>=ES6)

```js
const { decode, encode } = require('lor-deckcode');

const deck = decode('CEBAIAIFB4WDANQIAEAQGDAUDAQSIJZUAIAQCBIFAEAQCBAA');
/*
[
    { code: '01SI015', count: 3 },
    { code: '01SI044', count: 3 },
    { code: '01SI048', count: 3 },
    { code: '01SI054', count: 3 },
    { code: '01FR003', count: 3 },
    { code: '01FR012', count: 3 },
    { code: '01FR020', count: 3 },
    { code: '01FR024', count: 3 },
    { code: '01FR033', count: 3 },
    { code: '01FR036', count: 3 },
    { code: '01FR039', count: 3 },
    { code: '01FR052', count: 3 },
    { code: '01SI005', count: 2 },
    { code: '01FR004', count: 2 },
]
*/

const code = encode(deck);
// CEBAIAIFB4WDANQIAEAQGDAUDAQSIJZUAIAQCBIFAEAQCBAA
```
