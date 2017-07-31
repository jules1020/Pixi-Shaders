precision mediump float;

varying vec2 vTextureCoord;

uniform sampler2D source;
uniform float wave;
uniform float distortion;
uniform vec2 center;

void main(void) {
//todo: can at least move scalar into vertex shader
	float scalar = abs(1.0 - abs(distance(vTextureCoord, center)));
	float sinOffset = sin(wave / scalar);
	sinOffset = clamp(sinOffset, 0.0, 1.0);
	float sinSign = cos(wave / scalar);
	sinOffset = sinOffset * distortion / 32.0;
	gl_FragColor = texture2D(source, vTextureCoord + sinOffset * sinSign);
}