require('../check');

var filter = PIXI.filters.ToneFilter = require('./ToneFilter');

// Export for requiring
if (typeof module !== 'undefined' && module.exports) {
	module.exports = filter;
}