function A () {
    maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.AllMotor, maqueenPlusV2.MyEnumDir.Forward, 100)
    basic.pause(500)
}
function D () {
    maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.LeftMotor, maqueenPlusV2.MyEnumDir.Forward, 100)
    maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.RightMotor, maqueenPlusV2.MyEnumDir.Backward, 100)
    basic.pause(500)
}
function ARC () {
    for (let index = 0; index < 6; index++) {
        maqueenPlusV2.setIndexColor(0, maqueenPlusV2.NeoPixelColors.Red)
        maqueenPlusV2.setIndexColor(1, maqueenPlusV2.NeoPixelColors.Green)
        maqueenPlusV2.setIndexColor(2, maqueenPlusV2.NeoPixelColors.Blue)
        maqueenPlusV2.setIndexColor(3, maqueenPlusV2.NeoPixelColors.Purple)
        basic.pause(500)
        maqueenPlusV2.ledBlank()
        basic.pause(500)
    }
}
input.onButtonPressed(Button.A, function () {
    maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.AllMotor, maqueenPlusV2.MyEnumDir.Forward, 100)
    basic.pause(3500)
    maqueenPlusV2.controlMotorStop(maqueenPlusV2.MyEnumMotor.AllMotor)
    basic.pause(2000)
    maqueenPlusV2.showColor(maqueenPlusV2.NeoPixelColors.Blue)
    A()
    R()
    A()
    R()
    maqueenPlusV2.controlMotorStop(maqueenPlusV2.MyEnumMotor.AllMotor)
    basic.pause(2000)
    maqueenPlusV2.showColor(maqueenPlusV2.NeoPixelColors.Red)
    G()
    D()
    G()
    D()
    maqueenPlusV2.controlMotorStop(maqueenPlusV2.MyEnumMotor.AllMotor)
    basic.pause(2000)
    maqueenPlusV2.showColor(maqueenPlusV2.NeoPixelColors.Green)
    D()
    G()
    D()
    G()
    maqueenPlusV2.controlMotorStop(maqueenPlusV2.MyEnumMotor.AllMotor)
    ARC()
    maqueenPlusV2.ledBlank()
})
function G () {
    maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.LeftMotor, maqueenPlusV2.MyEnumDir.Backward, 100)
    maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.RightMotor, maqueenPlusV2.MyEnumDir.Forward, 100)
    basic.pause(500)
}
input.onButtonPressed(Button.B, function () {
    ARC()
})
function R () {
    maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.AllMotor, maqueenPlusV2.MyEnumDir.Backward, 100)
    basic.pause(500)
}
maqueenPlusV2.ledBlank()
maqueenPlusV2.I2CInit()
basic.forever(function () {
	
})
