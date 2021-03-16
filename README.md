# DESKMATIK
Open source smart desk controller https://deskmatik.com

Open Source solution for standing desks which does not support wireless control out of the box. The project goal refers to create an universal firmware for standing desks and offer a set of custom features to the desk owners like wireless control, home assistant integration, scheduled movements and much more.

The firmware has simple WiFi connection interface where you can submit your WiFi network credentials. ESP tries to connect to the WiFi network, in case it fails the ESP starts the Access Point mode. In this mode you can connect to its WiFi network (search for DESKMATIK wifi network and connect to it using your phone or pc), navigate to default IP which is 192.168.4.1 in web browser and setup your WiFi network credentials on settings page. The desk control is now done over simple http requests.

### To be done:
- Create step by step documentation.
- Add PlatformIO support.
- Add ESP32 main board support.
- Integrate MQTT communication protocol.
- Make home assistant integration (Google, Alexa, etc...).
- Create native mobile app (ReactNative).
- More features like Pin Code, scheduled movements to the desired position, etc...
- OTA updates.
- Add support for other desks with similar functionality and communication protocol.

### How to build the source code?
It can be built using Arduino IDE. Currently supports ESP8266 boards.
Please reffer to ESP8266 documentation https://github.com/esp8266/Arduino

### Wiring (Flexispot)
| Flexispot RJ45 PIN | Color  | LAN cable color | Description                                                     |ESP8266 GPIO|
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
- Flexispot (tested with Flexispot E5 but should be good for any other desks from Flexipot)

### Configuration
 - check config.h file.


