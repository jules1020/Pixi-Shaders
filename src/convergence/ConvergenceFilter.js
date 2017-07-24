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
function ConvergenceFilter()
{
    PIXI.Filter.call(this,
        // vertex shader
        glslify('../default.vert'),
        // fragment shader
        glslify('./convergence.frag'),
        // uniforms
        {
            red: {
                type: '2fv',
                value: [-10.0, 0.0]
            },
            blue: {
                type: '2fv',
                value: [0.0, 0.0]
            },
            green: {
                type: '2fv',
                value: [0.0, 10.0]
            }
        }
    );
   

    this.size = 8;
}

ConvergenceFilter.prototype = Object.create(PIXI.Filter.prototype);
ConvergenceFilter.prototype.constructor = ConvergenceFilter;
module.exports = ConvergenceFilter;

Object.defineProperties(ConvergenceFilter.prototype, {
    /**
     * The pixel size used by the filter.
     *
     * @member {number}
     * @memberof PIXI.filters.ConvergenceFilter#
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
