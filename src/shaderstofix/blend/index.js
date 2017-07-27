require('../check');

var filter = PIXI.filters.BlendFilter = require('./BlendFilter');

// Export for requiring
if (typeof module !== 'undefined' && module.exports) {
	module.exports = filter;
}