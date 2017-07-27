require('../check');

var filter = PIXI.filters.FilmGrainFilter = require('./FilmGrainFilter');

// Export for requiring
if (typeof module !== 'undefined' && module.exports) {
	module.exports = filter;
}