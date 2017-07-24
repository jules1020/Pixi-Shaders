require('../check');

var filter = PIXI.filters.PassThroughFilter = require('./PassThroughFilter');

// Export for requiring
if (typeof module !== 'undefined' && module.exports) {
	module.exports = filter;
}