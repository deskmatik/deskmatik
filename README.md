# DESKMATIK
Open source smart desk controller https://deskmatik.com

Open Source solution for standing desks which does not support wireless control out of the box. The project goal refers to create an universal firmware for standing desks and offer a set of custom features to the desk owners like wireless control, home assistant integration, scheduled movements and much more.

### Future plans:
- PlatformIO support.
- Add ESP32 main board support.
- Integrate MQTT communication protocol.
- Make home assistant integration (Google, Alexa, etc...).
- Create native mobile app (ReactNative).
- More features like Pin Code, scheduled movements to the desired position, etc...
- OTA updates.

### How to build the source code?
It can be built using arduine IDE. Currently supports ESP8266 boards.
Please reffer to a ESP8266 documentation https://github.com/esp8266/Arduino

### Wiring (Flexispot)
| Flexispot RJ45 PIN | Color  | Lan cable color | Description                                                     |ESP8266 GPIO|
|--------------------|--------|-----------------|-----------------------------------------------------------------|------------|
| 1                  | brown  | white-orange    | N/C                                                             |            |
| 2                  | white  | orange          | N/C                                                             |            |
| 3                  | purple | white-green     | N/C                                                             |            |
| 4                  | red    | blue            | Enable/Awake                                                    |D5          |
| 5                  | green  | white-blue      | RX (of remote)                                                  |D7/RX2      |
| 6                  | black  | green           | TX (of remote)                                                  |D8/TX2      |
| 7                  | blue   | white-brown     | GND                                                             |GND         |
| 8                  | yellow | brown           | VDD (5V)                                                        |VIN         |

### Supported desks
- Flexispot E5 desk was tested but should be good for other other desks from Flexipot.

### Documentation
- To be done.


