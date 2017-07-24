require('../check');

var filter = PIXI.filters.ConvergenceFilter = require('./ConvergenceFilter');

// Export for requiring
if (typeof module !== 'undefined' && module.exports) {
	module.exports = filter;
}