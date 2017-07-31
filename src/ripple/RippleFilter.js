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
function RippleFilter()
{
    PIXI.Filter.call(this,
        // vertex shader
        glslify('../default.vert'),
        // fragment shader
        glslify('./ripple.frag'),
        // uniforms
        {
            wave: {
                type: 'f',
                uniform: 'wave',
                value: Math.PI / 0.75
            },
            distortion: {
                type: 'f',
                uniform: 'distortion',
                value: 1.0
            },
            center: {
                type: '2fv',
                uniform: 'center',
                value: [0.5, 0.5]
            }
        }
    );

    this.size = 8;
}

RippleFilter.prototype = Object.create(PIXI.Filter.prototype);
RippleFilter.prototype.constructor = RippleFilter;
module.exports = RippleFilter;

Object.defineProperties(RippleFilter.prototype, {
    /**
     * The pixel size used by the filter.
     *
     * @member {number}
     * @memberof PIXI.filters.RippleFilter#
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
