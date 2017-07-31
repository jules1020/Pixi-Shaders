require('../check');

var filter = PIXI.filters.LumakeyFilter = require('./LumakeyFilter');

// Export for requiring
if (typeof module !== 'undefined' && module.exports) {
	module.exports = filter;
}