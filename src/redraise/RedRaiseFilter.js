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
function RedRaiseFilter()
{
    PIXI.Filter.call(this,
        // vertex shader
        null,
        // fragment shader
        glslify('./redraise.frag')
    );

    this.size = 8;
}

RedRaiseFilter.prototype = Object.create(PIXI.Filter.prototype);
RedRaiseFilter.prototype.constructor = RedRaiseFilter;
module.exports = RedRaiseFilter;

Object.defineProperties(RedRaiseFilter.prototype, {
    /**
     * The pixel size used by the filter.
     *
     * @member {number}
     * @memberof PIXI.filters.RedRaiseFilter#
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
