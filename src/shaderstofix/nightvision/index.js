require('../check');

var filter = PIXI.filters.NightVisionFilter = require('./NightVisionFilter');

// Export for requiring
if (typeof module !== 'undefined' && module.exports) {
	module.exports = filter;
}