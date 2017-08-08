precision mediump float;

varying vec2 vTextureCoord;

uniform sampler2D source;
uniform vec4 light;
uniform vec4 dark;
uniform float desat;
uniform float toned;

const vec3 lumcoeff = vec3(0.2125,0.7154,0.0721);

void main(void) {
	vec4 sourcePixel = texture2D(source, vTextureCoord);
	vec3 sceneColor = light.rgb * sourcePixel.rgb;
	vec3 gray = vec3(dot(lumcoeff, sceneColor));
	vec3 muted = mix(sceneColor, gray, desat);
	vec3 tonedColor = mix(dark.rgb, light.rgb, gray);
	gl_FragColor = vec4(mix(muted, tonedColor, toned), sourcePixel.a);
}