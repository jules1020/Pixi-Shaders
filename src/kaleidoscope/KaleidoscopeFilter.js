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
function KaleidoscopeFilter()
{
    PIXI.Filter.call(this,
        // vertex shader
        glslify('../default.vert'),
        // fragment shader
        glslify('./kaleidoscope.frag'),
        // uniforms
        {
            segments: {
                type: '1f',
                value: 0.5
            },
            offset: {
                type: '1f',
                value: 33.0
            }
        }
    );

    this.size = 8;
}

KaleidoscopeFilter.prototype = Object.create(PIXI.Filter.prototype);
KaleidoscopeFilter.prototype.constructor = KaleidoscopeFilter;
module.exports = KaleidoscopeFilter;

Object.defineProperties(KaleidoscopeFilter.prototype, {
    /**
     * The pixel size used by the filter.
     *
     * @member {number}
     * @memberof PIXI.filters.KaleidoscopeFilter#
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
