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
function BlurFilter()
{
    PIXI.Filter.call(this,
        // vertex shader
        glslify('./blur.vert'),
        // fragment shader
        glslify('./blur.frag')
    );

    this.size = 8;
}

BlurFilter.prototype = Object.create(PIXI.Filter.prototype);
BlurFilter.prototype.constructor = BlurFilter;
module.exports = BlurFilter;

Object.defineProperties(BlurFilter.prototype, {
    /**
     * The pixel size used by the filter.
     *
     * @member {number}
     * @memberof PIXI.filters.BlurFilter#
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
