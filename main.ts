function green () {
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
}
input.onButtonPressed(Button.A, function () {
    strip.clear()
    red()
    strip.show()
    basic.pause(500)
    strip.clear()
    green()
    strip.show()
})
input.onButtonPressed(Button.B, function () {
    strip.clear()
    yellow()
    strip.show()
    basic.pause(500)
    strip.clear()
    red()
    strip.show()
})
function yellow () {
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
}
function red () {
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
}
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P1, 3, NeoPixelMode.RGB)
strip.setBrightness(10)
strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
