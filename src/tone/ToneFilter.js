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
function ToneFilter()
{
    PIXI.Filter.call(this,
        // vertex shader
        glslify('../default.vert'),
        // fragment shader
        glslify('./tone.frag'),
        // uniforms
        {
            source: {
                    type: 'image',
                    uniform: 'source'
                },
            light: {
                type: '4fv',
                uniform: 'light',
                value: [1.0, 0.9, 0.5, 1.0]
            },
            dark: {
                type: '4fv',
                uniform: 'dark',
                value: [0.2, 0.05, 0.0, 1.0]
            },
            toned: {
                type: 'f',
                uniform: 'toned',
                value: 1.0,
            },
            desat: {
                type: 'f',
                uniform: 'desat',
                value: 0.5
            }
        }
    );

    this.size = 8;
}

ToneFilter.prototype = Object.create(PIXI.Filter.prototype);
ToneFilter.prototype.constructor = ToneFilter;
module.exports = ToneFilter;

Object.defineProperties(ToneFilter.prototype, {
    /**
     * The pixel size used by the filter.
     *
     * @member {number}
     * @memberof PIXI.filters.ToneFilter#
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
