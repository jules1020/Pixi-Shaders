require('../check');

var filter = PIXI.filters.GreenInvertFilter = require('./GreenInvertFilter');

// Export for requiring
if (typeof module !== 'undefined' && module.exports) {
	module.exports = filter;
}