const NLP = require('./../dist/nlp');
const assert = require('chai').assert;

describe('NLP Class', function() {
	const nlp = new NLP();
	const text = 'The quick brown fox jumps over the lazy dog';

	console.log();
	console.log( '  Text Used:', text );

	describe('↳ analyzeEntities()', function() {
		it('should return the entitites in the text sent', function(done) {
			this.timeout(5000);
			nlp.analyzeEntities( text ).then(res => {
				console.log( '\tReceived:', typeof res );
				done();
			}).catch(err => {
				console.error(util.inspect(err, {depth: null}));
				done();
			});
		});
	});

	describe('↳ analyzeSentiment()', function() {
		it('should return the sentiement of the text sent', function(done) {
			this.timeout(5000);
			nlp.analyzeSentiment( text ).then(res => {
				console.log( '\tReceived:', typeof res );
				done();
			}).catch(err => {
				console.error(util.inspect(err, {depth: null}));
				done();
			});
		});
	});

	describe('↳ analyzeSyntax()', function() {
		it('should return the syntax of the text sent', function(done) {
			this.timeout(5000);
			nlp.analyzeSyntax( text ).then(res => {
				console.log( '\tReceived:', typeof res );
				done();
			}).catch(err => {
				console.error(util.inspect(err, {depth: null}));
				done();
			});
		});
	});

	describe('↳ annotateText()', function() {
		it('should return the annotations of the text sent', function(done) {
			this.timeout(5000);
			nlp.annotateText( text ).then(res => {
				console.log( '\tReceived:', typeof res );
				done();
			}).catch(err => {
				console.error(util.inspect(err, {depth: null}));
				done();
			});
		});
	});
});
