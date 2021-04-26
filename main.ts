let Persoon = ""
let longcapaciteit_L = 0
let diameter_bronchioli_mm = 0
let datapunt = 0
function Controle () {
    Persoon = "persoon.Controle"
    longcapaciteit_L = 6
    diameter_bronchioli_mm = 1
    Blazen()
    basic.pause(500)
}
input.onButtonPressed(Button.A, function () {
    Controle()
    Astma()
})
function Blazen () {
    datapunt = 0
    Blazen2()
    for (let index = 0; index <= 7; index++) {
        datapunt = datapunt + longcapaciteit_L * diameter_bronchioli_mm / (index + 1)
        Blazen2()
    }
    for (let index = 0; index < longcapaciteit_L / 2; index++) {
        datapunt += longcapaciteit_L * diameter_bronchioli_mm / 40
        Blazen2()
    }
    for (let index = 0; index < longcapaciteit_L / 2; index++) {
        datapunt += longcapaciteit_L * diameter_bronchioli_mm / -40
        Blazen2()
    }
    while (datapunt > 1.5) {
        datapunt = datapunt - datapunt / 10
        Versturen()
        basic.pause(100)
    }
}
function Versturen () {
    serial.writeValue(Persoon, datapunt)
}
function Astma () {
    Persoon = "persoon.Asthma"
    longcapaciteit_L = 6
    diameter_bronchioli_mm = 0.8
    Blazen()
    basic.pause(500)
}
function Blazen2 () {
    basic.pause(100 / diameter_bronchioli_mm)
    Versturen()
}
