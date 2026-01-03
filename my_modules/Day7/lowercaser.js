module.exports = function keLowercase(kata = '') {
    let kataBaru = ""
    if(kata.length > 0){
        for (i = 0; i < kata.length; i++) {
            if (kata[i] === "A") {
                kataBaru += "a"
            }
            else if (kata[i] === "B") {
                kataBaru += "b"
            }
            else if (kata[i] === "C") {
                kataBaru += "c"
            }
            else if (kata[i] === "D") {
                kataBaru += "d"
            }
            else if (kata[i] === "E") {
                kataBaru += "e"
            }
            else if (kata[i] === "F") {
                kataBaru += "f"
            }
            else if (kata[i] === "G") {
                kataBaru += "g"
            }
            else if (kata[i] === "H") {
                kataBaru += "h"
            }
            else if (kata[i] === "I") {
                kataBaru += "i"
            }
            else if (kata[i] === "J") {
                kataBaru += "j"
            }
            else if (kata[i] === "K") {
                kataBaru += "k"
            }
            else if (kata[i] === "L") {
                kataBaru += "l"
            }
            else if (kata[i] === "M") {
                kataBaru += "m"
            }
            else if (kata[i] === "N") {
                kataBaru += "n"
            }
            else if (kata[i] === "O") {
                kataBaru += "o"
            }
            else if (kata[i] === "P") {
                kataBaru += "p"
            }
            else if (kata[i] === "Q") {
                kataBaru += "q"
            }
            else if (kata[i] === "R") {
                kataBaru += "r"
            }
            else if (kata[i] === "S") {
                kataBaru += "s"
            }
            else if (kata[i] === "T") {
                kataBaru += "t"
            }
            else if (kata[i] === "U") {
                kataBaru += "u"
            }
            else if (kata[i] === "V") {
                kataBaru += "v"
            }
            else if (kata[i] === "W") {
                kataBaru += "w"
            }
            else if (kata[i] === "X") {
                kataBaru += "x"
            }
            else if (kata[i] === "Y") {
                kataBaru += "y"
            }
            else if (kata[i] === "Z") {
                kataBaru += "z"
            } else {
                kataBaru += kata[i]
            }
        }
    }
    return kataBaru
}