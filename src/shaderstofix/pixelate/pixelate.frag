precision mediump float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform vec2 resolution;
uniform vec2 pixelSize;

void main(void) {
	vec2 delta = pixelSize / resolution;
	gl_FragColor = texture2D(uSampler, delta * floor(vTextureCoord / delta));
}