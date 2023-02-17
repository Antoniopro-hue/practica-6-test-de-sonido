input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        pins.digitalWritePin(DigitalPin.P7, 1)
        basic.pause(200)
        music.playMelody("C5 B A G F E D C ", 500)
        pins.digitalWritePin(DigitalPin.P7, 0)
        music.playMelody("C5 B A G F E D C ", 0)
        basic.pause(200)
    }
})
led.enable(false)
basic.forever(function () {
	
})
