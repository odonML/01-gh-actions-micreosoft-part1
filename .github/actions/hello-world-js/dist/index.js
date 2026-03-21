import require$$0 from '@actions/core';

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var src = {};

var hasRequiredSrc;

function requireSrc () {
	if (hasRequiredSrc) return src;
	hasRequiredSrc = 1;
	//.github/actions/hello-world-js/index.js
	const core = require$$0;
	const nameToGreet = core.getInput('who-to-greet');
	console.log(`Hola ${nameToGreet}! Estás un paso más cerca de ser DevOps.`);
	return src;
}

var srcExports = requireSrc();
var index = /*@__PURE__*/getDefaultExportFromCjs(srcExports);

export { index as default };
//# sourceMappingURL=index.js.map
