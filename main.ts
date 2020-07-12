function green (traffic: string) {
    if (traffic == "A") {
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
    } else if (traffic == "B") {
        strip.setPixelColor(6, neopixel.colors(NeoPixelColors.Green))
    } else if (traffic == "C") {
        strip.setPixelColor(10, neopixel.colors(NeoPixelColors.Green))
    }
}
input.onButtonPressed(Button.A, function () {
    strip.clear()
    red("A")
    yellow("B")
    yellow("C")
    strip.show()
    basic.pause(500)
    strip.clear()
    green("A")
    red("B")
    red("C")
    strip.show()
})
input.onButtonPressed(Button.AB, function () {
    strip.clear()
    red("C")
    yellow("A")
    yellow("B")
    strip.show()
    basic.pause(500)
    strip.clear()
    green("C")
    red("B")
    red("A")
    strip.show()
})
input.onButtonPressed(Button.B, function () {
    strip.clear()
    red("B")
    yellow("A")
    yellow("C")
    strip.show()
    basic.pause(500)
    strip.clear()
    green("B")
    red("A")
    red("C")
    strip.show()
})
function yellow (traffic: string) {
    if (traffic == "A") {
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
    } else if (traffic == "B") {
        strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Yellow))
    } else if (traffic == "C") {
        strip.setPixelColor(9, neopixel.colors(NeoPixelColors.Yellow))
    }
}
function red (traffic: string) {
    if (traffic == "A") {
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    } else if (traffic == "B") {
        strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Red))
    } else if (traffic == "C") {
        strip.setPixelColor(8, neopixel.colors(NeoPixelColors.Red))
    }
}
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P2, 15, NeoPixelMode.RGB)
strip.setBrightness(10)
strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Red))
strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Yellow))
strip.setPixelColor(6, neopixel.colors(NeoPixelColors.Green))
strip.setPixelColor(8, neopixel.colors(NeoPixelColors.Red))
strip.setPixelColor(9, neopixel.colors(NeoPixelColors.Yellow))
strip.setPixelColor(10, neopixel.colors(NeoPixelColors.Green))
strip.show()
