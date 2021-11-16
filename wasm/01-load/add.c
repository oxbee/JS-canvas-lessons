#include <emscripten/emscripten.h>
//#include <stdio.h>

static int add_call_counter = 0;

EMSCRIPTEN_KEEPALIVE
int add(int a, int b) {
  //printf("a @%p, b @%p, cntr @%p\n", &a, &b, &add_call_counter);
  add_call_counter++;
  return a + b;
}

EMSCRIPTEN_KEEPALIVE
int counter() {
  //printf("cntr @%x\n", add_call_counter);
  return add_call_counter;
}

EMSCRIPTEN_KEEPALIVE
int getFirstSpaceIdx(const char* start) {

  const char* end = start;
  while (*end != ' ')
    end++;

  return end - start;
}
