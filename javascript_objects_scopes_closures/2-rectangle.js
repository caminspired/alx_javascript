#!/usr/bin/node
class Rectangle {
    constructor(w, h) {
        if (w <= 0 || isNaN(w) || h <= 0 || isNaN(h)) { 
            return {};
        }    
        width = w;
        height = h;  
    }
}



module.exports = Rectangle;
