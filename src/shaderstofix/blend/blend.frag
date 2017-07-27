precision mediump float;
varying vec2 vTextureCoord;
uniform sampler2D source;
uniform float opacity;
void main(void) {
	gl_FragColor = texture2D(source, vTextureCoord);
	gl_FragColor.a *= opacity;
}