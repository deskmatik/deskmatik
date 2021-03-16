# DESKMATIK
Open source smart desk controller https://deskmatik.com

Open Source solution for standing desks which does not support wireless control out of the box. The project goal refers to create an universal firmware for standing desks and offer a set of custom features to the desk owners like: wireless control, home assistant integration, scheduled movements and much more.

### Set up a Wi-Fi connection
The firmware has simple web interface where you can set up your WiFi network.

The ESP tries to connect to the WiFi network. In case it fails or WiFi was not configured "Access Point" mode is started. In this mode you can connect to its WiFi network and set up the your local network credentials by following the steps below:
1. Search for DESKMATIK wifi network.
2. Enter the default password 123456789.
3. Connect using your phone, pc or any other device.
4. Navigate to 192.168.4.1 in web browser and set up your WiFi network credentials.

Now, when the ESP is connected to your local network you can navigate to IP (either static IP configured in config.h or provided by DHCP) and controll the desk using web interface. The desk control is done over simple http requests at the moment.

### How to build the source code?
It can be built using Arduino IDE. Currently supports ESP8266 boards.
Please reffer to ESP8266 documentation https://github.com/esp8266/Arduino

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

### Supported desks
- Flexispot (tested with Flexispot E5 but should be good for any other desks from Flexipot)

### Configuration
 - check config.h file.

### To be done
- Create step by step documentation.
- Add PlatformIO support.
- Add ESP32 main board support.
- Integrate MQTT communication protocol.
- Make home assistant integration (Google, Alexa, etc...).
- Create native mobile app (ReactNative).
- More features like Pin Code, scheduled movements to the desired position, etc...
- OTA updates.
- Add support for other desks with similar functionality and communication protocol.

### Screenshot
![Screenshot](https://user-images.githubusercontent.com/5584814/110712239-2c047580-8201-11eb-805a-a66d8a0dd03e.jpg)


