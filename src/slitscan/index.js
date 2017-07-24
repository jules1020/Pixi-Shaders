require('../check');

var filter = PIXI.filters.SlitScanFilter = require('./SlitScanFilter');

// Export for requiring
if (typeof module !== 'undefined' && module.exports) {
	module.exports = filter;
}