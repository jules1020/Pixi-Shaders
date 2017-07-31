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
function OpticalFlowFilter()
{
    PIXI.Filter.call(this,
        // vertex shader
        glslify('../default.vert'),
        // fragment shader
        glslify('./opticalflow.frag'),
        // uniforms
        {
            source: {
                type: 'image',
                uniform: 'source',
                shaderDirty: false
            },
            lambda: {
                type: 'f',
                uniform: 'lambda',
                min: 0.0,
                defaultValue: 0.0,
                description: 'noise limiting'
            },
            scaleResult: {
                type: '2fv',
                dimensions: 2.0,
                uniform: 'scale',
                defaultValue: [1.0, 1.0]
            },
            offset: {
                type: 'f',
                uniform: 'offsetX',
                defaultValue: 1.0,
                min: 1.0,
                max: 100.0,
                description: 'distance between texel samples for gradient calculation'
            }
        }
    );

    this.size = 8;
}

OpticalFlowFilter.prototype = Object.create(PIXI.Filter.prototype);
OpticalFlowFilter.prototype.constructor = OpticalFlowFilter;
module.exports = OpticalFlowFilter;

Object.defineProperties(OpticalFlowFilter.prototype, {
    /**
     * The pixel size used by the filter.
     *
     * @member {number}
     * @memberof PIXI.filters.OpticalFlowFilter#
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
