'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.__useDefault = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _process = require('process');

var _process2 = _interopRequireDefault(_process);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

var _package = require('./../package.json');

var _package2 = _interopRequireDefault(_package);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

_nodeFetch2.default.Promise = _bluebird2.default;

var NLP = function () {
	function NLP(apiKey) {
		var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'v1beta1';

		_classCallCheck(this, NLP);

		this.prefix = prefix;
		this.baseURL = 'https://language.googleapis.com/' + this.prefix;

		if (apiKey) this.apiKey = apiKey;else if (_process2.default.env.GOOGLE_API_KEY) this.apiKey = _process2.default.env.GOOGLE_API_KEY;else throw Error('The parameter \'apiKey\' is required');
	}

	_createClass(NLP, [{
		key: 'analyzeEntities',
		value: function analyzeEntities(text) {
			var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'PLAIN_TEXT';
			var encodingType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'UTF8';

			var url = this.baseURL + '/documents:analyzeEntities?key=' + this.apiKey;
			var opts = this.makeOpts(text, type, encodingType);

			return this.fetch(url, opts);
		}
	}, {
		key: 'analyzeSentiment',
		value: function analyzeSentiment(text) {
			var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'PLAIN_TEXT';
			var encodingType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'UTF8';

			var url = this.baseURL + '/documents:analyzeSentiment?key=' + this.apiKey;
			var opts = this.makeOpts(text, type, encodingType);

			return this.fetch(url, opts);
		}
	}, {
		key: 'analyzeSyntax',
		value: function analyzeSyntax(text) {
			var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'PLAIN_TEXT';
			var encodingType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'UTF8';

			var url = this.baseURL + '/documents:analyzeSyntax?key=' + this.apiKey;
			var opts = this.makeOpts(text, type, encodingType);

			return this.fetch(url, opts);
		}
	}, {
		key: 'annotateText',
		value: function annotateText(text) {
			var _features = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { syntax: true, entities: true, sentiment: true };

			var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'PLAIN_TEXT';
			var encodingType = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'UTF8';

			var url = this.baseURL + '/documents:annotateText?key=' + this.apiKey;
			var features = {
				extractSyntax: _features.syntax,
				extractEntities: _features.entities,
				extractDocumentSentiment: _features.sentiment
			};
			var opts = this.makeOpts(text, type, encodingType, features);
			return this.fetch(url, opts);
		}
	}, {
		key: 'makeOpts',
		value: function makeOpts(text, type, encodingType, features) {
			var opts = {
				method: 'POST',
				headers: {
					'User-Agent': _package2.default.name + '/' + _package2.default.version + ' (+' + _package2.default.homepage + ')'
				},
				body: {
					encodingType: encodingType,
					document: {
						type: type,
						content: text
					}
				}
			};

			if (features) opts.body.features = features;
			opts.body = JSON.stringify(opts.body);
			return opts;
		}
	}, {
		key: 'fetch',
		value: function fetch(url, opts) {
			return new _bluebird2.default(function (resolve, reject) {
				(0, _nodeFetch2.default)(url, opts).then(function (res) {
					return res.json();
				}).then(function (json) {
					return resolve(json);
				}).catch(function (error) {
					return reject(error);
				});
			});
		}
	}]);

	return NLP;
}();

module.exports = NLP;
exports.default = NLP;
var __useDefault = exports.__useDefault = true;