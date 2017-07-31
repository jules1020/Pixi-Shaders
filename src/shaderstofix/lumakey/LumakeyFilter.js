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
function LumakeyFilter()
{
    PIXI.Filter.call(this,
        // vertex shader
        glslify('../default.vert'),
        // fragment shader
        glslify('./lumakey.frag'),
        // uniforms
        {
            uSampler: {
                type: 'image',
                uniform: 'uSampler',
                shaderDirty: false
            },
            clipBlack: {
                type: '1f',
                uniform: 'clipBlack',
                defaultValue: 1.0,
                min: 0.0,
                max: 1.0
            },
            clipWhite: {
                type: '1f',
                uniform: 'clipWhite',
                defaultValue: 1.0,
                min: 0.0,
                max: 1.0
            },
            invert: {
                type: 'bool',
                uniform: 'invert',
                defaultValue: false
            }
        }
    );

    this.size = 8;
}

LumakeyFilter.prototype = Object.create(PIXI.Filter.prototype);
LumakeyFilter.prototype.constructor = LumakeyFilter;
module.exports = LumakeyFilter;

Object.defineProperties(LumakeyFilter.prototype, {
    /**
     * The pixel size used by the filter.
     *
     * @member {number}
     * @memberof PIXI.filters.LumakeyFilter#
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
