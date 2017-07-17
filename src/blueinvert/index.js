require('../check');

var filter = PIXI.filters.BlueInvertFilter = require('./BlueInvertFilter');

// Export for requiring
if (typeof module !== 'undefined' && module.exports) {
	module.exports = filter;
}