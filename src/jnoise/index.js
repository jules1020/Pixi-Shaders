require('../check');

var filter = PIXI.filters.JNoiseFilter = require('./JNoiseFilter');

// Export for requiring
if (typeof module !== 'undefined' && module.exports) {
    module.exports = filter;
}