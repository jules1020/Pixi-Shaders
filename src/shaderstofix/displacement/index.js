require('../check');

var filter = PIXI.filters.DisplacementFilter = require('./DisplacementFilter');

// Export for requiring
if (typeof module !== 'undefined' && module.exports) {
	module.exports = filter;
}