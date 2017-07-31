precision mediump float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;

uniform float threshold;
uniform float clipBlack;
uniform float clipWhite;
uniform bool invert;

const vec3 lumcoeff = vec3(0.2125,0.7154,0.0721);

void main (void)  {
	vec4 pixel = texture2D(uSampler, vTextureCoord);
	float luma = dot(pixel.rgb,lumcoeff);
	float alpha = 1.0 - smoothstep(clipBlack, clipWhite, luma);
	if (invert) alpha = 1.0 - alpha;
	gl_FragColor = vec4(pixel.rgb, min(pixel.a, alpha) );
}