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
function JNoiseFilter()
{
    PIXI.Filter.call(this,
        // vertex shader
        glslify('../default.vert'),
        // fragment shader
        glslify('./noise.frag'),
        // uniforms
        {
          rand: {
            type: '1f', 
            value: 1.5
          },
          strength: {
            type: '1f', 
            value: 0.25
          },
          dimensions: {
            type: '4fv', 
            value: [2.0, 2.0, 2.0, 2.0]
          }
        }
    );

    this.size = 8;
}

JNoiseFilter.prototype = Object.create(PIXI.Filter.prototype);
JNoiseFilter.prototype.constructor = JNoiseFilter;
module.exports = JNoiseFilter;

Object.defineProperties(JNoiseFilter.prototype, {
    /**
     * The pixel size used by the filter.
     *
     * @member {number}
     * @memberof PIXI.filters.JNoiseFilter#
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
