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
function ChromaFilter()
{
    PIXI.Filter.call(this,
        // vertex shader
        glslify('../default.vert'),
        // fragment shader
        glslify('./chroma.frag'),
        // uniforms
        {
            screenWeight: {
                type: '1f',
                value: 12.0
            },
            balance: {
                type: '1f',
                value: 43.0
            },
            clibBlack: {
                type: '1f',
                value: 44.0
            },
            clipWhite: {
                type: '1f',
                value: 4.423
            }
        }
    );

    this.size = 8;
}

ChromaFilter.prototype = Object.create(PIXI.Filter.prototype);
ChromaFilter.prototype.constructor = ChromaFilter;
module.exports = ChromaFilter;

Object.defineProperties(ChromaFilter.prototype, {
    /**
     * The pixel size used by the filter.
     *
     * @member {number}
     * @memberof PIXI.filters.ChromaFilter#
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
