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
function BleachBypassFilter()
{
    PIXI.Filter.call(this,
        // vertex shader
        null,
        // fragment shader
        glslify('./bleachbypass.frag')
    );

    this.size = 8;
}

BleachBypassFilter.prototype = Object.create(PIXI.Filter.prototype);
BleachBypassFilter.prototype.constructor = BleachBypassFilter;
module.exports = BleachBypassFilter;

Object.defineProperties(BleachBypassFilter.prototype, {
    /**
     * The pixel size used by the filter.
     *
     * @member {number}
     * @memberof PIXI.filters.BleachBypassFilter#
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
