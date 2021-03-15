#include "./presets.h"

Presets presets;

void Presets::savePosition(int pos) {
    uint8_t cmdBtnM[] = CMD_BUTTON_M;
    uint8_t cmdBtn1[] = CMD_BUTTON_1;
    uint8_t cmdBtn2[] = CMD_BUTTON_2;
    uint8_t cmdBtn3[] = CMD_BUTTON_3;

    uart.write(cmdBtnM, sizeof(cmdBtnM));

    switch(pos) {
        case 1:
            uart.write(cmdBtn1, sizeof(cmdBtn1));
            break;
        case 2:
            uart.write(cmdBtn2, sizeof(cmdBtn2));
            break;
        case 3:
            uart.write(cmdBtn3, sizeof(cmdBtn3));
            break;
    }
}
