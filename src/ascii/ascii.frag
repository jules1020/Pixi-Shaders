precision mediump float;

uniform sampler2D uTexture;
varying vec2 vUv;

float luma(vec3 color) {
  return dot(color, vec3(0.299, 0.587, 0.114));
}

float luma(vec4 color) {
  return dot(color.rgb, vec3(0.299, 0.587, 0.114));
}

void main() {
  vec4 color = texture2D(uTexture, vUv);
  float brightness = luma(color);

  gl_FragColor = vec4(vec3(brightness), 1.0);
}