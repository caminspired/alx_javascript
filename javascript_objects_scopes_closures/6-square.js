#!/usr/bin/node
const Square = require('./5-square');

class SquareB extends Square {
    charPrint(c) {
        if (c === undefined) {
            c = 'X';
        }
        for (let counter_h = 0; counter_h < this.height; counter_h++ ) {
            let row = '';
            for (let counter_w = 0; counter_w < this.width; counter_w++) {
                row += c;
            }
            console.log(row);
        }
    }
};



module.exports = SquareB;
