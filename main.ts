function Set_Pixel (index: number, colour: number, Delay: number, Message: string, Amber2: boolean) {
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    strip.setPixelColor(index, colour)
    if (Amber2) {
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
    }
    strip.show()
    basic.showString(Message)
    basic.pause(Delay)
}
function Amber () {
    Set_Pixel(1, neopixel.colors(NeoPixelColors.Yellow), 2000, "STOP IF SAFE", false)
}
function Green () {
    Set_Pixel(0, neopixel.colors(NeoPixelColors.Green), 2000, "GO", false)
}
function Red () {
    Set_Pixel(2, neopixel.colors(NeoPixelColors.Red), 2000, "STOP", false)
}
function RedAmber () {
    Set_Pixel(2, neopixel.colors(NeoPixelColors.Red), 2000, "GET READY", true)
}
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 3, NeoPixelMode.RGB)
strip.clear()
strip.setBrightness(128)
basic.forever(function () {
    Red()
    RedAmber()
    Green()
    Amber()
})
