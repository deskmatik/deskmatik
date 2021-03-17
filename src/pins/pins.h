#pragma once

#if BOARD == BOARD_ESP32
    #include "./pins_ESP32.h"
#elif BOARD == BOARD_ESP8266
    #include "./pins_ESP8266.h"
#else
    #error "Unsupported board."
#endif
