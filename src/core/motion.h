#pragma once

#include "./uart.h"

class Motion {
    public:
        static void stepUp();
        static void stepDown();

        static void moveToPos1();
        static void moveToPos2();
        static void moveToPos3();

};

extern Motion motion;
