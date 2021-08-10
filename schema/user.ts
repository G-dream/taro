const mongoose = require('mongoose')
export const userSchema = new mongoose.Schema({
	username: String,
	age: 'number'
})