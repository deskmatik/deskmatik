#pragma once

#include "../include/common.h"
#include "../core/eeprom.h"

#include <ESP8266WiFi.h>

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
