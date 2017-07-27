require('../check');

var filter = PIXI.filters.ChromaFilter = require('./ChromaFilter');

// Export for requiring
if (typeof module !== 'undefined' && module.exports) {
	module.exports = filter;
}