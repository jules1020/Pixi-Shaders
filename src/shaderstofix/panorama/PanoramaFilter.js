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
function PanoramaFilter()
{
    PIXI.Filter.call(this,
        // vertex shader
        glslify('../default.vert'),
        // fragment shader
        glslify('./panorama.frag'),
        // uniforms
        {
            source: {
                        type: 'image',
                        uniform: 'source',
                        shaderDirty: false
                    },
            width: {
                type: 'int',
                min: 0,
                step: 1,
                update: resize,
                defaultValue: 640
            },
            height: {
                type: 'int',
                min: 0,
                step: 1,
                update: resize,
                defaultValue: 360
            },
            yaw: {
                type: 'int',
                uniform: 'yaw',
                min: 0,
                max: 360,
                defaultValue: 0
            },
            fov: {
                type: 'int',
                uniform: 'fov',
                min: 0,
                max: 180,
                defaultValue: 80
            },
            pitch: {
                type: 'int',
                uniform: 'pitch',
                min: -90,
                max: 90,
                defaultValue: 0
            }
        }
    );

    this.size = 8;
}

PanoramaFilter.prototype = Object.create(PIXI.Filter.prototype);
PanoramaFilter.prototype.constructor = PanoramaFilter;
module.exports = PanoramaFilter;

Object.defineProperties(PanoramaFilter.prototype, {
    /**
     * The pixel size used by the filter.
     *
     * @member {number}
     * @memberof PIXI.filters.PanoramaFilter#
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
