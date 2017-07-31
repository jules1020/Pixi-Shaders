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
function LutFilter()
{
    PIXI.Filter.call(this,
        // vertex shader
        glslify('../default.vert'),
        // fragment shader
        glslify('./lut.frag'),
        // uniforms
        {
            source: {
                type: 'image',
                uniform: 'source'
            },
            lut: {
                    type: 'image',
                    uniform: 'lut'
                },
            amount: {
                type: 'f',
                uniform: 'amount',
                value: 0.0
            }
        }
    );

    this.size = 8;
}

LutFilter.prototype = Object.create(PIXI.Filter.prototype);
LutFilter.prototype.constructor = LutFilter;
module.exports = LutFilter;

Object.defineProperties(LutFilter.prototype, {
    /**
     * The pixel size used by the filter.
     *
     * @member {number}
     * @memberof PIXI.filters.LutFilter#
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
