#include "../include/common.h"
#include "./eeprom.h"

Eeprom eeprom;

void Eeprom::init() {
    EEPROM.begin(512);

    for (int i = 0; i < 512; i++) {
        EEPROM.write(i, 0);
    }

    EEPROM.commit();
}

void Eeprom::put(int index, char value[]) {
    for (int i = 0; i < SLOT_SIZE; i++) {
        EEPROM.write(index * SLOT_SIZE + i, value[i]);
    }
    EEPROM.commit();
}

void Eeprom::get(int index, char value[]) {
    for (int i = 0; i < SLOT_SIZE; i++) {
        value[i] = EEPROM.read(index * SLOT_SIZE + i);
    }
}
