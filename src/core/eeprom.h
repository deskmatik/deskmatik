#pragma once

#include <EEPROM.h>

#define SLOT_SIZE 16

class Eeprom {
    public:
        static void init();
        static void put(int index, char value[]);
        static void get(int index, char value[]);
};

extern Eeprom eeprom;
