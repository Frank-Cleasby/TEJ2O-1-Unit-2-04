"""
Created by: Frank
Created on: Sep 2025
This module declares the temperature
"""

from microbit import *


# the variable for temperature
temperature = 0

display.clear()
display.show(Image.HAPPY)


while True:
    if button_a.is_pressed() :
        temperature = temperature()
        display.show(str('The temperature is:'))
        display.show(str(temperature))
        display.show(str('C.'))
        display.clear()
        display.show(Image.HAPPY)