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
function CutSliderFilter()
{
    PIXI.Filter.call(this,
        // vertex shader
        glslify('../default.vert'),
        // fragment shader
        glslify('./cutslider.frag'),
        // Uniforms
        {
            rand: {
                type: '1f', 
                value: 5.0
            },
            val1: {
                type: '1f', 
                value: 150.0
            },
            val2: {
                type: '1f', 
                value: 20.0
            },
            dimensions: {
                type: '4fv', 
                value: [10.0, 10.0, 10.0, 10.0]
            }
        }
    );

    this.size = 8;
}

CutSliderFilter.prototype = Object.create(PIXI.Filter.prototype);
CutSliderFilter.prototype.constructor = CutSliderFilter;
module.exports = CutSliderFilter;

Object.defineProperties(CutSliderFilter.prototype, {
    /**
     * The pixel size used by the filter.
     *
     * @member {number}
     * @memberof PIXI.filters.CutSliderFilter#
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
