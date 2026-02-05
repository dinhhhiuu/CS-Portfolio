#include <windows.h>
#include <GL/glut.h>
#include <math.h>

#define PI 3.14159f

int count = 0;
int step = 3;

void display() {
    glClear(GL_COLOR_BUFFER_BIT);
    glColor3f(1, 1, 0);

    float cx = 0.0f, cy = 0.0f;
    float r = 0.5f;

    int corner = 40;

    int localCount = count;

    for (int theta = 0; theta < 360; theta += corner) {
        float rad = theta * PI / 180.0f;
        float radd = (theta + corner) * PI / 180.0f;

        float x1 = cx + r * cos(rad);
        float y1 = cy + r * sin(rad);
        float x2 = cx + r * cos(radd);
        float y2 = cy + r * sin(radd);

        localCount++;
        if (localCount % step == 0) {
            glBegin(GL_TRIANGLES);
                glVertex2f(cx, cy);
                glVertex2f(x1, y1);
                glVertex2f(x2, y2);
            glEnd();
        }
    }

    glFlush();
}

void timer(int value) {
    count++;
    glutPostRedisplay();
    glutTimerFunc(100, timer, 0);
}

int main(int argc, char** argv) {
    glutInit(&argc, argv);
    glutInitDisplayMode(GLUT_SINGLE | GLUT_RGB);
    glutInitWindowSize(500, 500);
    glutCreateWindow("Quat 3 canh");

    glClearColor(0, 0, 0, 1);

    glutDisplayFunc(display);
    glutTimerFunc(100, timer, 0);

    glutMainLoop();
    return 0;
}
