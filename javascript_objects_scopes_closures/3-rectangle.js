#!/usr/bin/node
class Rectangle {
    constructor(w, h) {
        if (w > 0 && Number.isInteger(w) && h > 0 && Number.isInteger(h)) {
            this.width = w;
            this.height = h;
        };
    }

    print () {
        for (let counter_h = 0; counter_h < this.height; counter_h++ ) {
            let row = '';
            for (let counter_w = 0; counter_w < this.width; counter_w++) {
                row += 'X';
            }
            console.log(row);
        }     
    }
};


module.exports = Rectangle;
