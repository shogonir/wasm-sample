#include <cmath>

#include "point.cpp"

extern "C" {

    Point * angleToPoint(float theta) {
        float radian = theta * 3.1415926 / 180;
        float x = std::cos(radian);
        float y = std::sin(radian);
        Point * point = new Point(x, y);
        return point;
    }

    void freePoint(Point * point) {
        delete point;
    }
}

