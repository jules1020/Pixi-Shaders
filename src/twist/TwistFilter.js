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
function TwistFilter()
{
    PIXI.Filter.call(this,
        // vertex shader
        glslify('../default.vert'),
        // fragment shader
        glslify('./twist.frag'),
        // uniforms
        {
            rand: {
                type: '1f', 
                value: 4.5
            },
            timer: {
                type: '1f', 
                value: 10.0
            },
            val2: {
                type: '1f', 
                value: 5.0
            },
            val3: {
                type: '1f', 
                value: 55.0
            },
            dimensions: {type: '4fv', 
            value: [2.0, 2.0, 2.0, 2.0]
        }
        }
    );

    this.size = 8;
}

TwistFilter.prototype = Object.create(PIXI.Filter.prototype);
TwistFilter.prototype.constructor = TwistFilter;
module.exports = TwistFilter;

Object.defineProperties(TwistFilter.prototype, {
    /**
     * The pixel size used by the filter.
     *
     * @member {number}
     * @memberof PIXI.filters.TwistFilter#
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


