precision mediump float;

varying vec2 vTextureCoord;
varying vec3 tempFactor;

uniform sampler2D source;

void main(void) {
	vec4 pixel = texture2D(source, vTextureCoord);
	gl_FragColor = vec4(pixel.rgb * tempFactor, pixel.a);
}