#include "./uart.h"

Uart uart;
SoftwareSerial serial(RX_PIN, TX_PIN);

void Uart::init() {
    serial.begin(9600);
}

void Uart::write(uint8_t cmd[], int size) {
    serial.write(cmd, size);
}
