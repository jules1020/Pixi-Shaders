require('../check');

var filter = PIXI.filters.SepiaFilter = require('./SepiaFilter');

// Export for requiring
if (typeof module !== 'undefined' && module.exports) {
	module.exports = filter;
}