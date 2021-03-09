#include "./http.h"

Http http;
ESP8266WebServer server(HTTP_SERVER_PORT);

void Http::handleNotFound() {
    File file = SPIFFS.open("/404.html", "r");
    size_t html = server.streamFile(file, "text/html");
    file.close();
    server.send(200, "text/html", String(html));
}

void Http::handleMove() {
    const int pos = server.arg("pos").toInt();
    const int dir = server.arg("dir").toInt();

    switch(dir) {
        case  1: motion.stepUp();
            break;
        case -1: motion.stepDown();
            break;
    }

    switch(pos) {
        case 1: motion.moveToPos1();
            break;
        case 2: motion.moveToPos2();
            break;
        case 3: motion.moveToPos3();
            break;
    }

    server.send(200, "application/json", "{}");
}

void Http::handleScanNetworks() {
    int total = Wifi::scanNetworks();

    String response = "[";
    for (int i = 0; i < total; ++i) {
        if(i != 0) response += ",";
        response += "{\"ssid\":\"" + Wifi::getSSID(i) + "\",";
        response += "\"rssi\":" + String(Wifi::getRSSI(i)) + ",";
        response += "\"connected\":" + String(Wifi::getSSID(i) == Wifi::getSSID()) + "}";
    }
    response += "]";
    server.send(200, "application/json", response);
}

void Http::handleConnect() {
    String pass = server.arg("pass");
    String ssid = server.arg("ssid");

    pass.trim();
    ssid.trim();

    bool valid = pass.length() > 0 && ssid.length() > 0;

    if(!valid) {
        return server.send(400, "application/json", "{}");
    }

    Wifi::disconnect();
    Wifi::connect(ssid, pass);

    if (Wifi::getStatus() == WL_CONNECTED) {
        String response  = "{\"status\":";
               response += String(Wifi::getStatus());
               response += ",\"ip\":\"";
               response += Wifi::getLocalIp().toString();
               response += "\",\"ssid\":\"";
               response += Wifi::getSSID();
               response += "\"}";

        server.send(200, "application/json", response);
    } else {
        server.send(403, "application/json", "{}");
    }

    delay(5000);
    Wifi::stopAP();
}

void Http::init() {
    SPIFFS.begin();
    server.begin();

    server.serveStatic("/lib/htm@3.0.4.js", SPIFFS, "/lib/htm@3.0.4.js");
    server.serveStatic("/lib/preact@10.5.12.js", SPIFFS, "/lib/preact@10.5.12.js");
    server.serveStatic("/lib/scoped-style@1.9.0.js", SPIFFS, "/lib/scoped-style@1.9.0.js");
    server.serveStatic("/lib/preact-router@3.2.1.js", SPIFFS, "/lib/preact-router@3.2.1.js");
    server.serveStatic("/lib/preact-hooks@10.5.12.js", SPIFFS, "/lib/preact-hooks@10.5.12.js");

    server.serveStatic("/src/app.js", SPIFFS, "/src/app.js");
    server.serveStatic("/src/pages.js", SPIFFS, "/src/pages.js");
    server.serveStatic("/src/hooks.js", SPIFFS, "/src/hooks.js");
    server.serveStatic("/src/components.js", SPIFFS, "/src/components.js");

    server.serveStatic("/reset.css", SPIFFS, "/reset.css");
    server.serveStatic("/favicon.ico", SPIFFS, "/favicon.ico");

    server.sendHeader("Access-Control-Max-Age", "10000");
    server.sendHeader("Access-Control-Allow-Methods", "POST, GET");
    server.sendHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    server.on("/move", HTTP_POST, Http::handleMove);
    server.on("/connect", HTTP_POST, Http::handleConnect);
    server.on("/networks", HTTP_GET, Http::handleScanNetworks);

    server.onNotFound(Http::handleNotFound);
}

void Http::listen() {
    server.handleClient();
}
