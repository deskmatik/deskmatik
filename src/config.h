#pragma once

#define BOARD BOARD_ESP8266
#define DESK  DESK_FLEXISPOT

#define HOSTNAME "DESKMATIK"
#define AP_PASS  "123456789"
#define AP_SSID  HOSTNAME

#define HTTP_SERVER_PORT 80
#define WIFI_CONNECTION_TIMEOUT 10000

// #define ENABLE_STATIC_IP
#if defined(ENABLE_STATIC_IP)
    #define STATIC_IP { 192, 168, 0,   254 }
    #define GATEWAY   { 192, 168, 0,   1   }
    #define SUBNET    { 255, 255, 255, 0   }
#endif

