input.onButtonPressed(Button.A, function () {
	
})
let distancia = 0
makerbit.connectUltrasonicDistanceSensor(DigitalPin.P1, DigitalPin.P0)
control.inBackground(function () {
    if (distancia <= 10) {
    	
    } else if (distancia >= 11 && distancia <= 50) {
    	
    } else if (distancia >= 51 && distancia >= 100) {
    	
    } else {
    	
    }
})
