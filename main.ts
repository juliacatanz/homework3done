input.onButtonPressed(Button.A, function () {
    count += 1
    basic.showNumber(count)
})
input.onButtonPressed(Button.AB, function () {
    A = count + 9
    basic.showNumber(A)
    B = count - 9
    basic.showNumber(B)
    C = count * 2
    basic.showNumber(C)
    D = count / 3
    basic.showNumber(D)
    E = count / 4
    basic.showNumber(E)
    F = Math.sqrt(count)
    basic.showNumber(F)
    G = Math.round(0.75)
    basic.showNumber(G)
    H = Math.ceil(0.33)
    basic.showNumber(H)
    I = count ** 3
    basic.showNumber(I)
    J = randint(0, 100)
    basic.showNumber(J)
})
input.onButtonPressed(Button.B, function () {
    count += -1
    basic.showNumber(count)
})
let J = 0
let I = 0
let H = 0
let G = 0
let F = 0
let E = 0
let D = 0
let C = 0
let B = 0
let A = 0
let count = 0
basic.showIcon(IconNames.Heart)
count = 0
basic.forever(function () {
	
})
