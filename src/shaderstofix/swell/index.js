require('../check');

var filter = PIXI.filters.SwellFilter = require('./SwellFilter');

// Export for requiring
if (typeof module !== 'undefined' && module.exports) {
	module.exports = filter;
}