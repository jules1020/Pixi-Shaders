precision mediump float;

attribute vec4 position;
attribute vec2 texCoord;

uniform vec2 resolution;
uniform vec2 resSource;
uniform vec2 resMap;

varying vec2 texCoordSource;
varying vec2 texCoordMap;

const vec2 HALF = vec2(0.5);

void main(void) {
    //we don't need to do a transform in this shader, since this effect is not "inPlace"
	gl_Position = position;

	vec2 adjusted = (texCoord - HALF) * resolution;

	texCoordSource = adjusted / resSource + HALF;
	texCoordMap = adjusted / resMap + HALF;
}