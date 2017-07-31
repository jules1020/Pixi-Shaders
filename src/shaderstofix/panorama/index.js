require('../check');

var filter = PIXI.filters.PanoramaFilter = require('./PanoramaFilter');

// Export for requiring
if (typeof module !== 'undefined' && module.exports) {
	module.exports = filter;
}