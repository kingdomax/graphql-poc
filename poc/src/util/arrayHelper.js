import casual from 'casual';

export function fillArray(value) { return fillArrayWithSize(value, casual.integer(1, 3)); }

export function fillArrayWithSize(value, size) {
    var arr = [];
    for (var i = 0; i < size; i++) { 
        arr.push(value);
    }
    return arr;
}
