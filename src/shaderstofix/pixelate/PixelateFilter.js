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
function PixelateFilter()
{
    PIXI.Filter.call(this,
        // vertex shader
        glslify('../default.vert'),
        // fragment shader
        glslify('./pixelate.frag'),
        // uniforms
        {
            pixelSize: {
                type: '2fv',
                dimensions: 2,
                defaultValue: [8.0, 8.0],
                min: 0.0,
                uniform: 'pixelSize'
            }
        }
    );

    this.size = 8;
}

PixelateFilter.prototype = Object.create(PIXI.Filter.prototype);
PixelateFilter.prototype.constructor = PixelateFilter;
module.exports = PixelateFilter;

Object.defineProperties(PixelateFilter.prototype, {
    /**
     * The pixel size used by the filter.
     *
     * @member {number}
     * @memberof PIXI.filters.PixelateFilter#
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
