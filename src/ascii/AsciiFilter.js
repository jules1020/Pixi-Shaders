// /**
//  * @author Matt Smith http://gun.net.au @ktingvoar
//  */
// // @see https://github.com/substack/brfs/issues/25

var glslify  = require('glslify');

// TODO (cengler) - The Y is flipped in this shader for some reason.

/**
 * @author Vico @vicocotea
 * original shader : https://www.shadertoy.com/view/lssGDj by @movAX13h
 */

/**
 * An ASCII filter.
 *
 * @class
 * @extends PIXI.Filter
 * @memberof PIXI.filters
 */
function AsciiFilter()
{
    PIXI.Filter.call(this,
        // vertex shader
        glslify('../default.vert'),
        // fragment shader
        glslify('./ascii.frag')
// `
// precision mediump float;
// varying vec2 vTexCoord;
// uniform sampler2D source;
// uniform sampler2D letters;
// uniform vec4 background;
// uniform vec2 resolution;

// const vec3 lumcoeff = vec3(0.2125, 0.7154, 0.0721);
// const vec2 fontSize = vec2(8.0, 8.0);

// vec4 lookup(float ascii) {
//    vec2 pos = mod(vTexCoord * resolution, fontSize) / vec2(752.0, fontSize.x) + vec2(ascii, 0.0);
//    return texture2D(letters, pos);
// }

// void main(void) {
//    vec4 sample = texture2D(source, vTexCoord);
//    vec4 clamped = vec4(floor(sample.rgb * 8.0) / 8.0, sample.a);

//    float luma = dot(sample.rgb,lumcoeff);
//    float char = floor(luma * 94.0) / 94.0;

//    gl_FragColor = mix(background, clamped, lookup(char).r);
// }
// `
    );

    this.size = 8;
}

AsciiFilter.prototype = Object.create(PIXI.Filter.prototype);
AsciiFilter.prototype.constructor = AsciiFilter;
module.exports = AsciiFilter;

Object.defineProperties(AsciiFilter.prototype, {
    /**
     * The pixel size used by the filter.
     *
     * @member {number}
     * @memberof PIXI.filters.AsciiFilter#
     */
    size: {
        get: function ()
        {
            return this.uniforms.pixelSize;
        },
        set: function (value)
        {
            this.uniforms.pixelSize = value;
        }
    }
});
