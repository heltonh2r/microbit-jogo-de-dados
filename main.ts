input.onButtonPressed(Button.A, function () {
    dado_a += randint(1, 6)
    mostra_dado(dado_a)
})
input.onButtonPressed(Button.B, function () {
    dado_b += randint(1, 6)
    mostra_dado(dado_b)
    basic.pause(2000)
    if (dado_a == dado_b) {
        basic.showLeds(`
            . . . . .
            # # # # #
            . . . . .
            # # # # #
            . . . . .
            `)
    }
    if (dado_a > dado_b) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    }
    if (dado_a < dado_b) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    }
})
function mostra_dado (num: number) {
    if (num == 0) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    if (num == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
    if (num == 2) {
        basic.showLeds(`
            . . . . .
            . # . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
    if (num == 3) {
        basic.showLeds(`
            . . . . .
            . # . . .
            . . # . .
            . . . # .
            . . . . .
            `)
    }
    if (num == 4) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # . # .
            . . . . .
            `)
    }
    if (num == 5) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . # . .
            . # . # .
            . . . . .
            `)
    }
    if (num == 6) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . . . . .
            . # # # .
            . . . . .
            `)
    }
}
let dado_b = 0
let dado_a = 0
mostra_dado(0)
dado_a = 0
