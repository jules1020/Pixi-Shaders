require('../check');

var filter = PIXI.filters.CutSliderFilter = require('./CutSliderFilter');

// Export for requiring
if (typeof module !== 'undefined' && module.exports) {
	module.exports = filter;
}