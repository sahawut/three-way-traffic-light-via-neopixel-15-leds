radio.onReceivedNumber(function (receivedNumber) {
    if (is_green) {
        strip.clear()
        yellow()
        strip.show()
        basic.pause(500)
        strip.clear()
        red()
        strip.show()
    }
})
function green () {
    is_green = 1
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
}
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
    strip.clear()
    red()
    strip.show()
    basic.pause(500)
    strip.clear()
    green()
    strip.show()
})
function yellow () {
    is_green = 0
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
}
function red () {
    is_green = 0
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
}
let strip: neopixel.Strip = null
let is_green = 0
is_green = 1
radio.setGroup(1)
strip = neopixel.create(DigitalPin.P1, 15, NeoPixelMode.RGB)
strip.setBrightness(10)
strip.clear()
strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
strip.show()
