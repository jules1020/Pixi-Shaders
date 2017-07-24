require('../check');

var filter = PIXI.filters.RedRaiseFilter = require('./RedRaiseFilter');

// Export for requiring
if (typeof module !== 'undefined' && module.exports) {
	module.exports = filter;
}