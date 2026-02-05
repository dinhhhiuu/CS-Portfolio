#include <windows.h>
#include <GL/glut.h>
#include <math.h>

#define PI 3.14159f

void mydisplay() {
    glClear(GL_COLOR_BUFFER_BIT);

    glColor3f(1.0f, 1.0f, 0.0f);
    glPointSize(5.0f);

    float cx  = 0.0f;
    float cy = 0.0f;
    float r = 0.5f;

    glBegin(GL_POINTS);
    for (int angle = 0; angle < 360; angle += 10) {
        float rad = angle * PI / 180.0f;
        float x = cx + r * cos(rad);
        float y = cy + r * sin(rad);
        glVertex2f(x, y);
    }
    glEnd();

    glFlush();
}

int main(int argc, char** argv) {
    glutInit(&argc, argv);
    glutInitDisplayMode(GLUT_SINGLE | GLUT_RGB);
    glutInitWindowSize(500, 500);
    glutCreateWindow("Ve hinh tron bang tap diem");

    glClearColor(0.0f, 0.0f, 0.0f, 1.0f);
    glutDisplayFunc(mydisplay);

    glutMainLoop();
}