input.onButtonPressed(Button.A, function () {
    music.setVolume(0)
})
input.onButtonPressed(Button.B, function () {
    music.setVolume(255)
})
music.setVolume(127)
makerbit.connectUltrasonicDistanceSensor(DigitalPin.P1, DigitalPin.P0)
basic.forever(function () {
    led.plotBarGraph(
    makerbit.getUltrasonicDistance(DistanceUnit.CM),
    100
    )
    if (makerbit.getUltrasonicDistance(DistanceUnit.CM) <= 10) {
        music.playTone(784, music.beat(BeatFraction.Sixteenth))
    } else if (makerbit.getUltrasonicDistance(DistanceUnit.CM) >= 11 && makerbit.getUltrasonicDistance(DistanceUnit.CM) <= 50) {
        music.playTone(659, music.beat(BeatFraction.Eighth))
    } else if (makerbit.getUltrasonicDistance(DistanceUnit.CM) >= 51 && makerbit.getUltrasonicDistance(DistanceUnit.CM) <= 100) {
        music.playTone(523, music.beat(BeatFraction.Quarter))
    } else if (makerbit.getUltrasonicDistance(DistanceUnit.CM) <= 101) {
        music.playTone(262, music.beat(BeatFraction.Whole))
    } else {
    	
    }
})
