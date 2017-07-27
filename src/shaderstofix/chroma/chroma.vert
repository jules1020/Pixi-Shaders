precision mediump float;

attribute vec4 position;
attribute vec2 texCoord;

uniform vec2 resolution;
uniform mat4 transform;

varying vec2 vTexCoord;

uniform vec4 screen;
uniform float balance;
varying float screenSat;
varying vec3 screenPrimary;

void main(void) {
	float fmin = min(min(screen.r, screen.g), screen.b); //Min. value of RGB
	float fmax = max(max(screen.r, screen.g), screen.b); //Max. value of RGB
	float secondaryComponents;

	screenPrimary = step(fmax, screen.rgb);
	secondaryComponents = dot(1.0 - screenPrimary, screen.rgb);
	screenSat = fmax - mix(secondaryComponents - fmin, secondaryComponents / 2.0, balance);

    // first convert to screen space
	vec4 screenPosition = vec4(position.xy * resolution / 2.0, position.z, position.w);
	screenPosition = transform * screenPosition;

    // convert back to OpenGL coords
	gl_Position = screenPosition;
	gl_Position.xy = screenPosition.xy * 2.0 / resolution;
	gl_Position.z = screenPosition.z * 2.0 / (resolution.x / resolution.y);
	vTexCoord = texCoord;
}