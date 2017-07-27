precision mediump float;

varying vec2 texCoordSource;
varying vec2 texCoordMap;

uniform sampler2D source;
uniform sampler2D map;

uniform float amount;
uniform float offset;
uniform vec2 mapScale;
uniform vec4 color;
uniform vec4 xVector;
uniform vec4 yVector;

void main(void) {
	vec4 mapPixel = texture2D(map, texCoordMap);
	vec2 mapVector = vec2(dot(mapPixel, xVector), dot(mapPixel, yVector));
	vec2 pos = texCoordSource + (mapVector.xy - offset) * mapScale * amount;

	if (pos.x < 0.0 || pos.x > 1.0 || pos.y < 0.0 || pos.y > 1.0) {
		 + fillMode,
	}

	gl_FragColor = texture2D(source, pos);
}