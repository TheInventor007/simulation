let Persoon = ""
let longcapaciteit_L = 0
let diameter_bronchioli_mm = 0
function Controle () {
    Persoon = "persoon.Controle"
    longcapaciteit_L = 6
    diameter_bronchioli_mm = 1
    IoTeach.Blazen()
}
input.onButtonPressed(Button.A, function () {
    Controle()
    Astma()
})
function Astma () {
    Persoon = "persoon.Asthma"
    longcapaciteit_L = 8
    diameter_bronchioli_mm = 1.3
    IoTeach.Blazen()
}
