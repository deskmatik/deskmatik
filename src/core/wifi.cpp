#include "./wifi.h"

Wifi wifi;

void Wifi::init() {
    #if defined(STATIC_IP)
        // TODO: move to config.
        IPAddress ip(192, 168, 0, 254);
        IPAddress gateway(192, 168, 0, 1);
        IPAddress subnet(255, 255, 255, 0);

        WiFi.config(ip, gateway, subnet);
    #endif

    Wifi::connect();
}

void Wifi::startSTA(String ssid, String pass) {
    WiFi.begin(ssid, pass);

    Serial.println("Connecting to wifi...");
    Serial.print("SSID: ");
    Serial.println(ssid);
    Serial.print("Password: ");
    Serial.println(pass);

    unsigned long startMillis = millis();
    while (WiFi.status() != WL_CONNECTED && (millis() - startMillis < WIFI_CONNECTION_TIMEOUT)) {
        delay(1000);
    }
}

void Wifi::startAP() {
    if(WiFi.status() == WL_CONNECTED) {
        return;
    }

    WiFi.setAutoReconnect(false);
    WiFi.softAP(AP_SSID, AP_PASS);

    Serial.println("Started access point.");
    Serial.print("Ip: ");
    Serial.println(WiFi.softAPIP());
}

void Wifi::stopAP() {
    if(WiFi.status() != WL_CONNECTED) {
        return;
    }

    WiFi.setAutoReconnect(true);
    WiFi.softAPdisconnect(true);

    Serial.println("Stopped access point.");
}

void Wifi::connect(String ssid, String pass) {
    Wifi::startSTA(ssid, pass);
    Wifi::startAP();


    if(WiFi.status() != WL_CONNECTED) {
        Serial.println("Can't connect to wifi.");
    }
    else {
        Serial.print("Connected to: ");
        Serial.println(WiFi.SSID());
        Serial.print("Ip: ");
        Serial.println(WiFi.localIP());
        Serial.print("Hostname: ");
        Serial.println(WiFi.hostname());
    }
}

void Wifi::disconnect() {
     WiFi.disconnect();
}

int Wifi::getMode() {
    return WiFi.getMode();
}

int Wifi::getStatus() {
    return WiFi.status();
}

int Wifi::getRSSI() {
    return WiFi.RSSI();
}

int Wifi::getRSSI(int n) {
    return WiFi.RSSI(n);
}

int Wifi::scanNetworks() {
    return WiFi.scanNetworks();
}

String Wifi::getSSID() {
    return WiFi.SSID();
}

String Wifi::getSSID(int n) {
    return WiFi.SSID(n);
}

IPAddress Wifi::getLocalIp() {
    return WiFi.localIP();
}
