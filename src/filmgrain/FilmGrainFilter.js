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
function FilmGrainFilter()
{
    PIXI.Filter.call(this,
        // vertex shader
        glslify('../default.vert'),
        // fragment shader
        glslify('./filmgrain.frag'),
        // uniforms
        {
            resolution: {
                type: '2fv',
                value: [2.0, 2.0]
            },
            time: {
                type: '1f',
                value: 1.0
            },
            amount: {
                type: '1f',
                value: 1.3
            },
            colored: {
                type: 'bool',
                value: true
            }
        }
    );

    this.size = 8;
}

FilmGrainFilter.prototype = Object.create(PIXI.Filter.prototype);
FilmGrainFilter.prototype.constructor = FilmGrainFilter;
module.exports = FilmGrainFilter;

Object.defineProperties(FilmGrainFilter.prototype, {
    /**
     * The pixel size used by the filter.
     *
     * @member {number}
     * @memberof PIXI.filters.FilmGrainFilter#
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
