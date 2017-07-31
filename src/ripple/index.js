require('../check');

var filter = PIXI.filters.RippleFilter = require('./RippleFilter');

// Export for requiring
if (typeof module !== 'undefined' && module.exports) {
	module.exports = filter;
}