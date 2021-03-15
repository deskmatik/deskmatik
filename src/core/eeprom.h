#pragma once

#include <EEPROM.h>

#define SLOT_SIZE 8

class Eeprom {
    public:
        void init();
        void put(int index, char value[]);
        void get(int index, char value[]);
};

extern Eeprom eeprom;
