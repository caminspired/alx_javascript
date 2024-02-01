#!/usr/bin/node
class Rectangle {
    constructor(w, h) {
        this.width = w;
        this.height = h;
        if (w <= 0 || isNaN(w) || h <= 0 || isNaN(h))
            return class{};
    }
    
}

module.exports = Rectangle;
