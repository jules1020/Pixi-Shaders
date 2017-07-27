precision mediump float;
varying vec2 vTextureCoord;
uniform sampler2D source;
uniform sampler2D letters;
uniform vec4 background;
uniform vec2 resolution;

const vec3 lumcoeff = vec3(0.2125, 0.7154, 0.0721);
const vec2 fontSize = vec2(8.0, 8.0);

vec4 lookup(float ascii) {
   vec2 pos = mod(vTextureCoord * resolution, fontSize) / vec2(752.0, fontSize.x) + vec2(ascii, 0.0);
   return texture2D(letters, pos);
}

void main(void) {
   vec4 sample = texture2D(source, vTextureCoord);
   vec4 clamped = vec4(floor(sample.rgb * 8.0) / 8.0, sample.a);

   float luma = dot(sample.rgb,lumcoeff);
   float char = floor(luma * 94.0) / 94.0;

   gl_FragColor = mix(background, clamped, lookup(char).r);
}
