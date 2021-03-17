#pragma once
#include "../include/common.h"

#if BOARD == BOARD_ESP32
    #include <WiFi.h>
#else
    #include <ESP8266WiFi.h>
#endif

class Wifi {
    public:
        void init();
        void stopAP();
        void connect(String ssid = "", String pass = "");
        void disconnect();

        int getMode();
        int getRSSI();
        int getRSSI(int n);
        int getStatus();
        int scanNetworks();

        String getSSID();
        String getSSID(int n);
        IPAddress getLocalIp();

    private:
        void startSTA(String ssid = "", String pass = "");
        void startAP();

};

extern Wifi wifi;
