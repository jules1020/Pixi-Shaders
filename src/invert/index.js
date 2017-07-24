require('../check');

var filter = PIXI.filters.InvertFilter = require('./InvertFilter');

// Export for requiring
if (typeof module !== 'undefined' && module.exports) {
    module.exports = filter;
}