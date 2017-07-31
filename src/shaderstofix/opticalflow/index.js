require('../check');

var filter = PIXI.filters.OpticalFlowFilter = require('./OpticalFlowFilter');

// Export for requiring
if (typeof module !== 'undefined' && module.exports) {
	module.exports = filter;
}