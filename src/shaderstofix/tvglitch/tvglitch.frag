precision mediump float;

#define HardLight(top, bottom)  (1.0 - 2.0 * (1.0 - top) * (1.0 - bottom))

varying vec2 vTexCoord;

uniform sampler2D source;
uniform sampler2D particles;
uniform float time;
uniform float scanlines;
uniform float lineSync;
uniform float lineHeight; //for scanlines and distortion
uniform float distortion;
uniform float vsync;
uniform float bars;
uniform float frameSharpness;
uniform float frameShape;
uniform float frameLimit;
uniform vec4 frameColor;

//todo: need much better pseudo-random number generator
Seriously.util.shader.noiseHelpers +
Seriously.util.shader.snoise2d +

void main(void) {
	vec2 texCoord = vTexCoord;

	//distortion
	float drandom = snoise(vec2(time * 10.0, texCoord.y /lineHeight));
	float distortAmount = distortion * (drandom - 0.25) * 0.5;
	//line sync
	vec4 particleOffset = texture2D(particles, vec2(0.0, texCoord.y));
	distortAmount -= lineSync * (2.0 * particleOffset.a - 0.5);

	texCoord.x -= distortAmount;
	texCoord.x = mod(texCoord.x, 1.0);

	//vertical sync
	float roll;
	if (vsync != 0.0) {
		roll = fract(time / vsync);
		texCoord.y = mod(texCoord.y - roll, 1.0);
	}

	vec4 pixel = texture2D(source, texCoord);

	//horizontal bars
	float barsAmount = particleOffset.r;
	if (barsAmount > 0.0) {
		pixel = vec4(pixel.r + bars * barsAmount, +
			pixel.g + bars * barsAmount, +
			pixel.b + bars * barsAmount, +
			pixel.a);
	}

	if (mod(texCoord.y / lineHeight, 2.0) < 1.0 ) {
		pixel.rgb *= (1.0 - scanlines);
	}

	float f = (1.0 - gl_FragCoord.x * gl_FragCoord.x) * (1.0 - gl_FragCoord.y * gl_FragCoord.y);
	float frame = clamp( frameSharpness * (pow(f, frameShape) - frameLimit), 0.0, 1.0);

	gl_FragColor = mix(frameColor, pixel, frame);
}
