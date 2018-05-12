//	dependencies
/*
var restful = require('node-restful');
var mongoose = restful.mongoose;

//Schema

var statusSchema = new mongoose.Schema({
*/
var db = require('../db')

var product = db.model('product', {
	productName: {
		type: String
	},
	productCode: {
		type: Number
	},
	firstComponent: {
		type: String
	},
	secondComponent: {
		type: String
	},
	thirdComponent: {
		type: String
	},	
	fourthComponent: {
		type: String
	},	
	fifthComponent: {
		type: String
	},	
	sixthComponent: {
		type: String
	},	
	seventhComponent: {
		type: String
	},	
	eightComponent: {
		type: String
	},	
	ninethComponent: {
		type: String
	},	
	tenthComponent: {
		type: String
	}	
});

//return model
module.exports = product