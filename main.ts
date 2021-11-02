/**
 * Oppgave 6 Spill talletsom en «lyd-kode», for eks. tallet 2413 angis med:-2 lydstøt med 100 Hz-4 lydstøt med 200 Hz-1 lydstøt med 400 Hz-3 lydstøt med 800 Hz
 * 
 * Valgt lydkode er DTMF om det er mulig med to sinus samtidig.
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
 */
input.onButtonPressed(Button.A, function () {
    basic.showNumber(tlfnr)
    basic.showString(str_tlfnr)
})
input.onButtonPressed(Button.B, function () {
	
})
let str_tlfnr = ""
let tlfnr = 0
tlfnr = 0
tlfnr = 98450825
str_tlfnr = "." + convertToText(tlfnr) + "."
basic.forever(function () {
	
})
