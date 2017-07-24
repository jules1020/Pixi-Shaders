require('../check');

var filter = PIXI.filters.HighContrastFilter = require('./HighContrastFilter');

// Export for requiring
if (typeof module !== 'undefined' && module.exports) {
    module.exports = filter;
}