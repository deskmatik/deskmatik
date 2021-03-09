#include "./include/common.h"
#include "./main.h"

void setup() {
    Serial.begin(115200);
    Serial.println();

    uart.init();
    eeprom.init();
    wifi.init();
    http.init();

    pinMode(EN_PIN, OUTPUT);
    digitalWrite(EN_PIN, HIGH);
}

void loop() {
    http.listen();
}
