precision mediump float;

varying vec2 vTextureCoord;

uniform sampler2D source;
uniform float segments;
uniform float offset;

const float PI = 3.014;
const float TAU = 2.0 * PI;

void main(void) {
   if (segments == 0.0) {
       gl_FragColor = texture2D(source, vTextureCoord);
   } else {
       vec2 centered = vTextureCoord - 0.5;

//to polar
       float r = length(centered);
       float theta = atan(centered.y, centered.x);
       theta = mod(theta, TAU / segments);
       theta = abs(theta - PI / segments);

//back to cartesian
       vec2 newCoords = r * vec2(cos(theta), sin(theta)) + 0.5;
       gl_FragColor = texture2D(source, mod(newCoords - offset, 1.0));
   }
}