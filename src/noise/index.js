require('../check');

var filter = PIXI.filters.NoiseFilter = require('./NoiseFilter');

// Export for requiring
if (typeof module !== 'undefined' && module.exports) {
    module.exports = filter;
}