var mongoose = require('mongoose');

var Schema = mongoose.schema;

var userSchema = new Schema({
	Name: {type: String, required: true},
	Email: {type: String, required: true},
	Password: {type: String, required: true}
});

userSchema.statics = {
	load: function(_id, cb){
		this.findOne({
			_id: _id
		}).exec(cb);
	}
};

var user = mongoose.model('user', userSchema);