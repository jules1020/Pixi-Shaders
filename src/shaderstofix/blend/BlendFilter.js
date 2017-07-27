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
function BlendFilter()
{
    PIXI.Filter.call(this,
        // vertex shader
        glslify('../default.vert'),
        // fragment shader
        glslify('./blend.frag'),
        // uniforms
        {
            opacity: {
                type: '1f',
                value: 100.0
            }
        }
    );

    this.size = 8;
}

BlendFilter.prototype = Object.create(PIXI.Filter.prototype);
BlendFilter.prototype.constructor = BlendFilter;
module.exports = BlendFilter;

Object.defineProperties(BlendFilter.prototype, {
    /**
     * The pixel size used by the filter.
     *
     * @member {number}
     * @memberof PIXI.filters.BlendFilter#
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
