// you need to write a function, which accepts infinite number parameters
// and returns an array, which has the same parameter only once

function filter() {
    return Array.from(new Set(arguments))
}
filter(1, 3, 9, 9, 9, 4, 4, 4, 2, 5, 6, 7, 7)

