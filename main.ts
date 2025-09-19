/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Frank
 * Created on: Sep 2025
 * This program states the temperature
*/

// variable for temperature
let temperature: number

basic.clearScreen()
basic.showIcon(IconNames.Happy)

// shows temperature
input.onButtonPressed(Button.A, function() {
    temperature = input.temperature()
    basic.clearScreen()
    basic.showString('The temperature is:')
    basic.showNumber(temperature)
    basic.showString('C.')
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})
