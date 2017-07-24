require('../check');

var filter = PIXI.filters.BlueRaiseFilter = require('./BlueRaiseFilter');

// Export for requiring
if (typeof module !== 'undefined' && module.exports) {
	module.exports = filter;
}