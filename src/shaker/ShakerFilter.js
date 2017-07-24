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
function ShakerFilter()
{
    PIXI.Filter.call(this,
        // vertex shader
        glslify('../default.vert'),
        // fragment shader
        glslify('./shaker.frag'),
        // uniforms
        {
            dimensions: {
                type: '4fv', 
                value: [4324.0, 10.0, 0.0, 434.0]
            },
            blur: {
                type: '2fv', 
                value: [435.0, 25.0]
            }
        }
    );

    this.size = 8;
}

ShakerFilter.prototype = Object.create(PIXI.Filter.prototype);
ShakerFilter.prototype.constructor = ShakerFilter;
module.exports = ShakerFilter;

Object.defineProperties(ShakerFilter.prototype, {
    /**
     * The pixel size used by the filter.
     *
     * @member {number}
     * @memberof PIXI.filters.ShakerFilter#
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
