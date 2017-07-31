precision mediump float;

varying vec2 vTextureCoord;

uniform sampler2D source;
uniform sampler2D previous;
uniform vec2 resolution;

uniform vec2 scale;
uniform float offsetX;
uniform float lambda;
// const vec4 lumcoeff = vec4(0.299, 0.587, 0.114, 0.0);

void main() {
	vec4 a = texture2D(previous, vTextureCoord);
	vec4 b = texture2D(source, vTextureCoord);
	vec2 offset = offsetX / resolution;
	vec2 x1 = vec2(offset.x, 0.0);
	vec2 y1 = vec2(0.0, offset.y);

//get the difference
	vec4 curdif = b - a;

//calculate the gradient
	vec4 gradx = texture2D(source, vTextureCoord + x1) - texture2D(source, vTextureCoord - x1);
	gradx += texture2D(previous, vTextureCoord + x1) - texture2D(previous, vTextureCoord - x1);

	vec4 grady = texture2D(source, vTextureCoord + y1) - texture2D(source, vTextureCoord - y1);
	grady += texture2D(previous, vTextureCoord + y1) - texture2D(previous, vTextureCoord - y1);

	vec4 gradmag = sqrt((gradx * gradx) + (grady * grady) + vec4(lambda));

	vec4 vx = curdif * (gradx / gradmag);
	float vxd = vx.r; //assumes greyscale

//format output for flowrepos, out(-x,+x,-y,+y)
	vec2 xout = vec2(max(vxd, 0.0), abs(min(vxd, 0.0))) * scale.x;

	vec4 vy = curdif * (grady / gradmag);
	float vyd = vy.r; //assumes greyscale

//format output for flowrepos, out(-x,+x,-y,+y)
	vec2 yout = vec2(max(vyd, 0.0), abs(min(vyd, 0.0))) * scale.y;

	gl_FragColor = clamp(vec4(xout.xy, yout.xy), 0.0, 1.0);
	gl_FragColor.a = 1.0;
}