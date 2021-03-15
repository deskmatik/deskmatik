#pragma once

#include "../include/common.h"
#include "../core/presets.h"
#include "../core/motion.h"
#include "./wifi.h"

#include <FS.h>
#include <ESP8266WebServer.h>

class Http {
    public:
        void init();
        void listen();

    private:
        static void handleMove();
        static void handleConnect();
        static void handleNotFound();
        static void handleSavePosition();
        static void handleScanNetworks();
};

extern Http http;
