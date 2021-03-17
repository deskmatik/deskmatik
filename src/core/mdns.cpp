#include "./mdns.h"

Mdns mdns;

void Mdns::init() {
    if (MDNS.begin(HOSTNAME)) {
        Serial.println("mDNS responder started");
        MDNS.addService("deskmatik", "tcp", 80);
    } else {
        Serial.println("Error setting up MDNS responder!");
    }
}

void Mdns::update() {
    MDNS.update();
}
