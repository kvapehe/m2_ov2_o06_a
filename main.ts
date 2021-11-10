/**
 * Oppgave 6 Spill talletsom en «lyd-kode», for eks. tallet 2413 angis med:
 * 
 * 2 lydstøt med 100 Hz, 4 lydstøt med 200 Hz, 1 lydstøt med 400 Hz og 3 lydstøt med 800 Hz
 * 
 * Valgt lydkode er DTMF om det er mulig med to sinus samtidig.
 * 
 * Litt om sinus for Microbit.
 * 
 * https://makecode.microbit.org/blocks/math
 * 
 * Her er en artig side med innhold
 * 
 * https://onlinetonegenerator.com/dtmf.html
 * 
 * https://onlinetonegenerator.com/432Hz.html
 * 
 * En annen
 * 
 * https://www.venea.net/web/downloads
 * 
 * Fra Ti
 * 
 * https://www.ti.com/lit/an/spra096a/spra096a.pdf
 * 
 * Arduino:
 * 
 * https://www.youtube.com/watch?v=LjgwesKOH58
 * 
 * Gerere sinussignal, men hvordan genere t. Skal se på det.
 * 
 * A * sin (2 pi f t + phi)
 * 
 * https://en.wikipedia.org/wiki/Sine_wave
 * 
 * https://en.wikipedia.org/wiki/Wave
 */
input.onButtonPressed(Button.A, function () {
    basic.showNumber(tlfnr)
    basic.showString(str_tlfnr)
})
input.onButtonPressed(Button.AB, function () {
    tone_a = 697
    tone_b = 1209
    soundExpression.yawn.playUntilDone()
})
input.onButtonPressed(Button.B, function () {
    music.ringTone(200)
    basic.pause(1000)
    music.stopAllSounds()
    basic.showNumber(a_tone_sine)
    led.plot(0, 0)
    led.plot(1, 1)
    led.plot(4, 0)
    led.plot(3, 1)
    soundExpression.giggle.playUntilDone()
})
music.onEvent(MusicEvent.MelodyNotePlayed, function () {
	
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MICROBIT_EVT_ANY, function () {
	
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showNumber(list.length)
    ct = 1
    list = [ct]
    for (let index = 0; index < 10; index++) {
        ct += 1
        list.push(ct)
    }
    basic.showNumber(list.length)
})
let ct = 0
let list: number[] = []
let a_tone_sine = 0
let tone_b = 0
let tone_a = 0
let str_tlfnr = ""
let tlfnr = 0
let tone_c = 0
tlfnr = 0
tlfnr = 98450825
str_tlfnr = "." + convertToText(tlfnr) + "."
tone_a = 0
tone_b = 0
a_tone_sine = Math.sin(2 * Math.PI * 200)
let b_tone_sine = Math.sin(60 * Math.PI / 180)
let c_tone_sine = Math.sin(60 * Math.PI / 180)
// let a_tone_sine = Math.sin(60 * Math.PI / 180)
basic.forever(function () {
	
})
