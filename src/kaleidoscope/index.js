require('../check');

var filter = PIXI.filters.KaleidoscopeFilter = require('./KaleidoscopeFilter');

// Export for requiring
if (typeof module !== 'undefined' && module.exports) {
	module.exports = filter;
}