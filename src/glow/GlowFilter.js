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
function GlowFilter()
{
    PIXI.Filter.call(this,
        // vertex shader
        glslify('../default.vert'),
        // fragment shader
        glslify('./glow.frag'),
        // Uniforms
        {
            blur_w: {
                type: '1i', 
                value: 10.0
            },
            dimensions: {
                type: '4fv', 
                value: [150.0, 150.0, 150.0, 150.0]
            }
        }
    );

    this.size = 8;
}

GlowFilter.prototype = Object.create(PIXI.Filter.prototype);
GlowFilter.prototype.constructor = GlowFilter;
module.exports = GlowFilter;

Object.defineProperties(GlowFilter.prototype, {
    /**
     * The pixel size used by the filter.
     *
     * @member {number}GlowFilter
     * @memberof PIXI.filters.GlowFilter#
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
