function Set_Pixel (index: number, colour: number, Delay: number) {
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    strip.setPixelColor(index, colour)
    strip.show()
    basic.pause(Delay)
}
function Amber () {
    Set_Pixel(1, neopixel.colors(NeoPixelColors.Yellow), 2000)
}
function Green () {
    Set_Pixel(0, neopixel.colors(NeoPixelColors.Green), 2000)
}
function Red () {
    Set_Pixel(2, neopixel.colors(NeoPixelColors.Red), 2000)
}
function RedAmber () {
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
    strip.show()
}
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 3, NeoPixelMode.RGB)
strip.clear()
strip.setBrightness(128)
basic.forever(function () {
    Red()
    basic.showString("STOP")
    basic.pause(2000)
    RedAmber()
    basic.showString("GET READY")
    basic.pause(2000)
    Green()
    basic.showString("GO")
    basic.pause(2000)
    Amber()
    basic.showString("STOP IF SAFE")
    basic.pause(2000)
})
