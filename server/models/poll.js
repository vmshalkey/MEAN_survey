var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

var PollSchema = new mongoose.Schema({
	id: {},
	name: { type: String, required: true },
	question: { type: String, required: true, minlength: 8 },
	option_1: {
				text: { type: String, required: true, minlength: 3 },
				votes: { type: Number, min: 0 }
			 },
	option_2: {
				text: { type: String, required: true, minlength: 3 },
				votes: { type: Number, min: 0 }
			 },
	option_3: {
				text: { type: String, required: true, minlength: 3 },
				votes: { type: Number, min: 0 }
			 },
	option_4: {
				text: { type: String, required: true, minlength: 3 },
				votes: { type: Number, min: 0 }
			 },
	created_at: { type: Date, default: Date.now }
})
var Poll = mongoose.model('Poll', PollSchema);

PollSchema.plugin(uniqueValidator);