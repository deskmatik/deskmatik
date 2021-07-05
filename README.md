# DESKMATIK
Open source smart desk controller https://deskmatik.com

DESKMATIK is open source solution for standing desks which does not support wireless control out of the box. The project goal refers to create an universal firmware for standing desks and offer a set of custom features to the desk owners like: wireless control, home assistant integration, scheduled movements and much more.

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

Note: In order to keep the original cable an ethernet cable can be used. Ethernet cable color mapping is provided in table above.

### How to build the source code?
It can be built using Arduino IDE. Currently supports ESP8266 boards.
Please reffer to ESP8266 documentation https://github.com/esp8266/Arduino
IMPORTANT: Don't forget to ulpload the files from "data" folder to SPIFFS

### Configuration
 - check config.h file.

### Set up a Wi-Fi connection
The firmware has simple web interface where you can set up your WiFi network.

The ESP tries to connect to the WiFi network. In case it fails or WiFi was not configured "Access Point" mode is started. In this mode you can connect to its WiFi network and set up the your local network credentials by following the steps below:
1. Search for DESKMATIK wifi network using your phone, pc or any other device.
2. Enter the default password 123456789 and connect.
3. Navigate to http://192.168.4.1/settings in web browser.
4. Set up your WiFi network credentials.

Now, when the ESP is connected to your local network you can navigate to it's IP (either static IP configured in config.h or provided by DHCP) and controll the desk using web interface. You also you can navigate to http://deskmatik.local/ in case your OS supports mDNS protocol. Note, Microsoft doesn't support mDNS.

### Supported desks
- Flexispot (tested with Flexispot E5 but should be good for other desks from Flexipot)

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
![selected](https://user-images.githubusercontent.com/5584814/112664301-18d8e300-8e5a-11eb-9479-b13f13a7c5fe.png)

### Thanks
Thanks to [nv1t](https://github.com/nv1t) for his [standing desk interceptor](https://github.com/nv1t/standing-desk-interceptor) which made possible to kickstart this project.


