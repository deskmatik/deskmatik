# DESKMATIK
Open source smart desk controller https://deskmatik.com

DESKMATIK is Open source solution for standing desks which does not support wireless control out of the box. The project goal refers to create an universal firmware for standing desks and offer a set of custom features to the desk owners like: wireless control, home assistant integration, scheduled movements and much more.

### Wiring (Flexispot)
| RJ45 PIN | Original cable color | Ethernet cable color | Description       |ESP8266 GPIO|
|----------|----------------------|----------------------|-------------------|------------|
| 1        | brown                | white-orange         | N/C               |            |
| 2        | white                | orange               | N/C               |            |
| 3        | purple               | white-green          | N/C               |            |
| 4        | red                  | blue                 | Enable/Awake      |D5          |
| 5        | green                | white-blue           | RX (of remote)    |D7/RX2      |
| 6        | black                | green                | TX (of remote)    |D8/TX2      |
| 7        | blue                 | white-brown          | GND               |GND         |
| 8        | yellow               | brown                | VDD (5V)          |VIN         |

Note: In order to keep my original cable I used a simple ethernet cable. Cable color mapping is provided in table above.

### How to build the source code?
It can be built using Arduino IDE. Currently supports ESP8266 boards.
Please reffer to ESP8266 documentation https://github.com/esp8266/Arduino

### Configuration
 - check config.h file.

### Set up a Wi-Fi connection
The firmware has simple web interface where you can set up your WiFi network.

The ESP tries to connect to the WiFi network. In case it fails or WiFi was not configured "Access Point" mode is started. In this mode you can connect to its WiFi network and set up the your local network credentials by following the steps below:
1. Search for DESKMATIK wifi network.
2. Enter the default password 123456789.
3. Connect using your phone, pc or any other device.
4. Navigate to 192.168.4.1 in web browser and set up your WiFi network credentials.

Now, when the ESP is connected to your local network you can navigate to it's IP (either static IP configured in config.h or provided by DHCP) and controll the desk using web interface. You also can navigate to http://deskmatik.local/ in case your OS support mDNS protocol. Note, Microsoft doesn't directly support mDNS.

### Supported desks
- Flexispot (tested with Flexispot E5 but should be good for any other desks from Flexipot)

### To be done
- Create step by step documentation.
- Add OTA updates.
- Add PlatformIO support.
- Add ESP32 support.
- Add MQTT communication protocol.
- Create native mobile app (ReactNative).
- Create Chrome browser plugin.
- More features like Pin code, scheduled movements to the desired position, etc...
- Home assistant integration (Google Home, Amazon Alexa, etc...).
- Add support for other desks with similar functionality and communication protocol (a bigger community is required).

### Screenshot
![Screenshot](https://user-images.githubusercontent.com/5584814/110712239-2c047580-8201-11eb-805a-a66d8a0dd03e.jpg)


