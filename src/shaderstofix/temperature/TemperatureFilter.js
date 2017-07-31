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
function TemperatureFilter()
{
    PIXI.Filter.call(this,
        // vertex shader
        glslify('../default.vert'),
        // fragment shader
        glslify('./temperature.frag'),
        // uniforms
        {
            temperature: {
                type: 'f',
                uniform: 'temperature',
                value: 6500.0,
                min: 3000.0,
                max: 25000.0
            }
        }
    );

    this.size = 8;
}

TemperatureFilter.prototype = Object.create(PIXI.Filter.prototype);
TemperatureFilter.prototype.constructor = TemperatureFilter;
module.exports = TemperatureFilter;

Object.defineProperties(TemperatureFilter.prototype, {
    /**
     * The pixel size used by the filter.
     *
     * @member {number}
     * @memberof PIXI.filters.TemperatureFilter#
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
