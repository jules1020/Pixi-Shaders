require('../check');

var filter = PIXI.filters.LutFilter = require('./LutFilter');

// Export for requiring
if (typeof module !== 'undefined' && module.exports) {
	module.exports = filter;
}