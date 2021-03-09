#pragma once

#include "../include/common.h"
#include "../core/motion.h"
#include "./wifi.h"

#include <FS.h>
#include <ESP8266mDNS.h>
#include <ESP8266WebServer.h>

class Http {
    public:
        static void init();
        static void listen();

    private:
        static void handleMove();
        static void handleConnect();
        static void handleConnected();
        static void handleNotFound();
        static void handleScanNetworks();
        static void handleNetworkStatus();
};

extern Http http;
