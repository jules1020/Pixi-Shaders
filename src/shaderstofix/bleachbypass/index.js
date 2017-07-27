require('../check');

var filter = PIXI.filters.BleachBypassFilter = require('./BleachBypassFilter');

// Export for requiring
if (typeof module !== 'undefined' && module.exports) {
	module.exports = filter;
}