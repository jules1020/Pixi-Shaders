precision mediump float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform float time;
uniform float luminanceThreshold;
uniform float amplification;
uniform vec3 nightVisionColor;

utilities.shader.makeNoise

void main(void) {
	vec3 noise = vec3( +
		makeNoise(vTextureCoord.x, vTextureCoord.y, time),  +
		makeNoise(vTextureCoord.x, vTextureCoord.y, time * 200.0 + 1.0),  +
		makeNoise(vTextureCoord.x, vTextureCoord.y, time * 100.0 + 3.0) +
	);
	vec4 pixel = texture2D(source, vTextureCoord + noise.xy * 0.0025);
	float luminance = dot(vec3(0.299, 0.587, 0.114), pixel.rgb);
	pixel.rgb *= step(luminanceThreshold, luminance) * amplification;
	gl_FragColor = vec4( (pixel.rgb + noise * 0.1) * nightVisionColor, pixel.a);
}