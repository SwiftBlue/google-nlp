//	Import this module
const NLP = require('google-nlp')

//	Google Cloud API key
const apiKey = 'ABCDEFGHHIJKLMNOPQRSTUVWXYZ'

// 	Text to send to Google NLP
let text = 'The quick brown fox jumps over the lazy dog'

// 	Instantiate he NLP class with your Google Cloud API key
let nlp = new NLP( apiKey )


/**
 *  Analyze entities from the text string
 */

nlp.analyzeEntities( text )
	.then(function( entities ) {
		// 	Output returned entities
		console.log( 'Entities:', entities );
	})
	.catch(function( error ) {
		// 	Error received, output the error
		console.log( 'Error:', error.message );
	})


/**
 *  Analyze sentiment from the text string
 */

nlp.analyzeSentiment( text )
	.then(function( sentiment ) {
		console.log( 'Sentiment:', sentiment );
	})
	.catch(function( error ) {
		console.log( 'Error:', error.message );
	})


/**
 *  Analyze syntax from the text string
 */

nlp.analyzeSyntax( text )
	.then(function( syntax ) {
		console.log( 'Syntax:', syntax );
	})
	.catch(function( error ) {
		console.log( 'Error:', error.message );
	})


/**
 *  Analyze syntax from the text string
 */

//	Default features if `features` param is omitted
const features = {
	syntax:    true,
	entities:  true,
	sentiment: true
}

nlp.annotateText( text, features )
	.then(function( annotations ) {
		console.log( 'Annotations:', annotations );
	})
	.catch(function( error ) {
		console.log( 'Error:', error.message );
	})
