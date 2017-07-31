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
function TVGlitchFilter()
{
    PIXI.Filter.call(this,
        // vertex shader
        glslify('../default.vert'),
        // fragment shader
        glslify('./tvglitch.frag'),
        // uniforms
        {
            source: {
                    type: 'image',
                    uniform: 'source',
                    shaderDirty: false
                },
            time: {
                type: 'f',
                value: 0.0
            },
            distortion: {
                type: 'f',
                value: 0.1,
            },
            // verticalSync: {
            //     type: 'f',
            //     value: 0.1,
            //     min: 0,
            //     max: 1
            // },
            lineSync: {
                type: 'f',
                uniform: 'lineSync',
                value: 0.2,
            },
            scanlines: {
                type: 'f',
                uniform: 'scanlines',
            },
            bars: {
                type: 'f',
                uniform: 'bars',
            },
            // barsRate: {
            //     type: 'f',
            //     value: 1
            // },
            frameShape: {
                type: 'f',
                uniform: 'frameShape',
                value: 0.27
            },
            frameLimit: {
                type: 'f',
                uniform: 'frameLimit',
                value: 0.34
            },
            frameSharpness: {
                type: 'f',
                uniform: 'frameSharpness',
                value: 8.4
            },
            frameColor: {
                type: '4fv',
                uniform: 'frameColor',
                value: [0.0, 0.0, 0.0, 1.0]
            }
        }
    );

    this.size = 8;
}

TVGlitchFilter.prototype = Object.create(PIXI.Filter.prototype);
TVGlitchFilter.prototype.constructor = TVGlitchFilter;
module.exports = TVGlitchFilter;

Object.defineProperties(TVGlitchFilter.prototype, {
    /**
     * The pixel size used by the filter.
     *
     * @member {f}
     * @memberof PIXI.filters.TVGlitchFilter#
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
