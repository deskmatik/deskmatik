#pragma once

#include "../include/common.h"
#include "../core/eeprom.h"

#include <ESP8266WiFi.h>

class Wifi {
    public:
        static void init();
        static void stopAP();
        static void connect(String ssid = "", String pass = "");
        static void disconnect();

        static int getMode();
        static int getRSSI();
        static int getRSSI(int n);
        static int getStatus();
        static int scanNetworks();

        static String getSSID();
        static String getSSID(int n);
        static IPAddress getLocalIp();

    private:
        static void startSTA(String ssid = "", String pass = "");
        static void startAP();

};

extern Wifi wifi;
