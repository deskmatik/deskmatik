#pragma once
#include "../include/common.h"

#if BOARD == BOARD_ESP32
    #include <ESPmDNS.h>
#else
    #include <ESP8266mDNS.h>
#endif

class Mdns {
    public:
        void init();
        void update();
};

extern Mdns mdns;
