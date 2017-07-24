require('../check');

var filter = PIXI.filters.GreenRaiseFilter = require('./GreenRaiseFilter');

// Export for requiring
if (typeof module !== 'undefined' && module.exports) {
	module.exports = filter;
}