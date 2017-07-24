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
function SlitScanFilter()
{
    PIXI.Filter.call(this,
        // vertex shader
        null,
        // fragment shader
        glslify('./slitscan.frag'),
        // uniforms
        {
          rand: {type: '1f', value: 15},
          dimensions: {type: '4fv', value: [0, 0, 0, 0]}
        })

    this.size = 8;
}

SlitScanFilter.prototype = Object.create(PIXI.Filter.prototype);
SlitScanFilter.prototype.constructor = SlitScanFilter;
module.exports = SlitScanFilter;

Object.defineProperties(SlitScanFilter.prototype, {
    /**
     * The pixel size used by the filter.
     *
     * @member {number}
     * @memberof PIXI.filters.SlitScanFilter#
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
