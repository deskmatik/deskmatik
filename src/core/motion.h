#pragma once

#include "../include/common.h"
#include "./uart.h"

class Motion {
    public:
        void move(int dir);
        void moveTo(int pos);
};

extern Motion motion;
