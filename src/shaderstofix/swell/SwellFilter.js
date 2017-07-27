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
function SwellFilter()
{
    PIXI.Filter.call(this,
        // vertex shader
        glslify('../default.vert'),
        // fragment shader
        glslify('./swell.frag'),
        {
            rand: {
                type: '1f', 
                value: 0.5},
            timer: {
                type: '1f', 
                value: 2.0
            },
            dimensions: {
                type: '4fv', 
                value: [1.0, 1.0, 2.0, 0.3]
            }
        }
    );

    this.size = 8;
}

SwellFilter.prototype = Object.create(PIXI.Filter.prototype);
SwellFilter.prototype.constructor = SwellFilter;
module.exports = SwellFilter;

Object.defineProperties(SwellFilter.prototype, {
    /**
     * The pixel size used by the filter.
     *
     * @member {number}
     * @memberof PIXI.filters.SwellFilter#
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
