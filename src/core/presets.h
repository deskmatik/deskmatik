#pragma once

#include "../include/common.h"
#include "./uart.h"

class Presets {
    public:
        void savePosition(int pos);
};

extern Presets presets;
