input.onButtonPressed(Button.A, function () {
    basic.showNumber(distancia)
})
let distancia = 0
distancia = 0
music.setVolume(127)
makerbit.connectUltrasonicDistanceSensor(DigitalPin.P1, DigitalPin.P0)
basic.forever(function () {
    if (distancia <= 10) {
        music.playTone(262, music.beat(BeatFraction.Whole))
    } else if (distancia >= 11 && distancia <= 50) {
        music.playTone(262, music.beat(BeatFraction.Half))
    } else if (distancia >= 51 && distancia >= 100) {
        music.playTone(262, music.beat(BeatFraction.Quarter))
    } else {
    	
    }
    led.plotBarGraph(
    distancia,
    300
    )
})
