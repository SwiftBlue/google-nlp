<a href="https://swiftblue.com/">
    <img src="http://static.swiftblue.net/brand/logo.png" alt="SwiftBlue logo" title="SwiftBlue" align="right" height="40" />
</a>

## Google NLP API Wrapper

<div style="display: inline-block; margin: 20px 0;">
	<p><img src="https://api.shippable.com/projects/58ae7873b4650b0f00a92534/badge?branch=master"></p>
<div style="clear: both;"></div></div>

Simple Google Cloud Natural Language Processing API wrapper that uses promises thanks to [Bluebird](https://github.com/petkaantonov/bluebird).

## Install

`npm install --save google-nlp`

## Usage

> See `example.js` file in the root directory


```
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

```

### License

> MIT License

> **Copyright © 2017 SwiftBlue, LLC, David Berube & Daniel Budick**

> Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

> The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
