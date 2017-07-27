require('../check');

var filter = PIXI.filters.BlurFilter = require('./BlurFilter');

// Export for requiring
if (typeof module !== 'undefined' && module.exports) {
	module.exports = filter;
}