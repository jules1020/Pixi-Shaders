require('../check');

var filter = PIXI.filters.TVGlitchFilter = require('./TVGlitchFilter');

// Export for requiring
if (typeof module !== 'undefined' && module.exports) {
	module.exports = filter;
}