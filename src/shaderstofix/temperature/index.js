require('../check');

var filter = PIXI.filters.TemperatureFilter = require('./TemperatureFilter');

// Export for requiring
if (typeof module !== 'undefined' && module.exports) {
	module.exports = filter;
}