require('../check');

var filter = PIXI.filters.ShakerFilter = require('./ShakerFilter');

// Export for requiring
if (typeof module !== 'undefined' && module.exports) {
	module.exports = filter;
}