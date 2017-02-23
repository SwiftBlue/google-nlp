import process from 'process';
import Promise from 'bluebird'
import fetch from 'node-fetch'
import pkg from './../package.json'

fetch.Promise = Promise

class NLP {

    constructor(apiKey, prefix = 'v1beta1') {
        this.prefix  = prefix;
		this.baseURL = `https://language.googleapis.com/${this.prefix}`

		if (apiKey) this.apiKey = apiKey
        else if (process.env.GOOGLE_API_KEY) this.apiKey = process.env.GOOGLE_API_KEY
        else throw Error( `The parameter 'apiKey' is required` )
    }

    analyzeEntities(text, type='PLAIN_TEXT', encodingType='UTF8') {
		let url  = `${this.baseURL}/documents:analyzeEntities?key=${this.apiKey}`
		let opts = this.makeOpts(text, type, encodingType)

		return this.fetch( url, opts )
    }

    analyzeSentiment(text, type='PLAIN_TEXT', encodingType='UTF8') {
		let url  = `${this.baseURL}/documents:analyzeSentiment?key=${this.apiKey}`
		let opts = this.makeOpts(text, type, encodingType)

        return this.fetch( url, opts )
    }

    analyzeSyntax(text, type='PLAIN_TEXT', encodingType='UTF8') {
		let url  = `${this.baseURL}/documents:analyzeSyntax?key=${this.apiKey}`
		let opts = this.makeOpts(text, type, encodingType)

        return this.fetch( url, opts )
    }

    annotateText(text, _features={syntax: true, entities: true, sentiment: true}, type='PLAIN_TEXT', encodingType='UTF8') {
		let url      = `${this.baseURL}/documents:annotateText?key=${this.apiKey}`
		let features = {
			extractSyntax:            _features.syntax,
			extractEntities:          _features.entities,
			extractDocumentSentiment: _features.sentiment
		}
		let opts 	 = this.makeOpts(text, type, encodingType, features)
        return this.fetch( url, opts )
    }

	makeOpts(text, type, encodingType, features) {
		const opts = {
			method: 'POST',
			headers: {
				'User-Agent': `${pkg.name}/${pkg.version} (+${pkg.homepage})`
			},
			body: {
				encodingType,
				document: {
					type,
					content: text
				}
			}
		}

		if (features) opts.body.features = features
		opts.body = JSON.stringify( opts.body )
		return opts
	}

	fetch(url, opts) {
		return new Promise((resolve, reject) => {
			fetch( url, opts )
				.then(res => res.json())
    			.then(json => resolve(json))
				.catch(error => reject(error))
		})
    }

}

module.exports = NLP
export default NLP
export var __useDefault = true
