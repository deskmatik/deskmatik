#include "./motion.h"

Motion motion;

void Motion::stepUp() {
    uint8_t cmd[] = CMD_BUTTON_UP;
    uart.write(cmd, sizeof(cmd));
}

void Motion::stepDown() {
    uint8_t cmd[] = CMD_BUTTON_DOWN;
    uart.write(cmd, sizeof(cmd));
}

void Motion::moveToPos1() {
    uint8_t cmd[] = CMD_BUTTON_1;
    uart.write(cmd, sizeof(cmd));
}

void Motion::moveToPos2() {
    uint8_t cmd[] = CMD_BUTTON_2;
    uart.write(cmd, sizeof(cmd));
}

void Motion::moveToPos3() {
    uint8_t cmd[] = CMD_BUTTON_3;
    uart.write(cmd, sizeof(cmd));
}

