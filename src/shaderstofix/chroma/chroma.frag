precision mediump float;

varying vec2 vTextureCoord;

uniform sampler2D source;
uniform vec4 screen;
uniform float screenWeight;
uniform float balance;
uniform float clipBlack;
uniform float clipWhite;
uniform bool mask;

varying float screenSat;
varying vec3 screenPrimary;

void main(void) {
	float pixelSat, secondaryComponents;
	vec4 sourcePixel = texture2D(source, vTextureCoord);

	float fmin = min(min(sourcePixel.r, sourcePixel.g), sourcePixel.b); //Min. value of RGB
	float fmax = max(max(sourcePixel.r, sourcePixel.g), sourcePixel.b); //Max. value of RGB
	//	luminance = fmax

	vec3 pixelPrimary = step(fmax, sourcePixel.rgb);

	secondaryComponents = dot(1.0 - pixelPrimary, sourcePixel.rgb);
	pixelSat = fmax - mix(secondaryComponents - fmin, secondaryComponents / 2.0, balance); // Saturation

	// solid pixel if primary color component is not the same as the screen color
	float diffPrimary = dot(abs(pixelPrimary - screenPrimary), vec3(1.0));
	float solid = step(1.0, step(pixelSat, 0.1) + step(fmax, 0.1) + diffPrimary);

	/*
	Semi-transparent pixel if the primary component matches but if saturation is less
	than that of screen color. Otherwise totally transparent
	*/
	float alpha = max(0.0, 1.0 - pixelSat / screenSat);
	alpha = smoothstep(clipBlack, clipWhite, alpha);
	vec4 semiTransparentPixel = vec4((sourcePixel.rgb - (1.0 - alpha) * screen.rgb * screenWeight) / max(0.00001, alpha), alpha);

	vec4 pixel = mix(semiTransparentPixel, sourcePixel, solid);

	/*
	Old branching code
	if (pixelSat < 0.1 || fmax < 0.1 || any(notEqual(pixelPrimary, screenPrimary))) {
		pixel = sourcePixel;
	} else if (pixelSat < screenSat) {
		float alpha = max(0.0, 1.0 - pixelSat / screenSat);
		alpha = smoothstep(clipBlack, clipWhite, alpha);
		pixel = vec4((sourcePixel.rgb - (1.0 - alpha) * screen.rgb * screenWeight) / alpha, alpha);
	}
	//*/


#ifdef MASK
	gl_FragColor = vec4(vec3(pixel.a), 1.0);
#else
	gl_FragColor = pixel;
#endif
}