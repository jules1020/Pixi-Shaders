require('../check');

var filter = PIXI.filters.RedInvertFilter = require('./RedInvertFilter');

// Export for requiring
if (typeof module !== 'undefined' && module.exports) {
	module.exports = filter;
}