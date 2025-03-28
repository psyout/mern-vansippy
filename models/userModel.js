const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'Please add a name'],
		},
		email: {
			type: String,
			required: [true, 'Please add an email'],
			unique: true,
			trim: true,
			match: [
				/^([a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+)$/,
				'Please add a valid email address',
			],
		},
		password: {
			type: String,
			required: [true, 'Please add a password'],
			minlength: [6, 'Password must be at least 6 characters'],
		},
		phone: {
			type: String,
			required: [true, 'Please add a phone number'],
			unique: true,
			trim: true,
			match: [/^\d{10}$/, 'Please add a valid phone number'],
		},
	},
	{
		timestamps: true,
	}
);

const User = mongoose.model('User', userSchema);
module.exports = User;
