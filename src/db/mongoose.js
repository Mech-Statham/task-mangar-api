const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useFindAndModify: false
})

// const User = mongoose.model('User', {
// 	name: {
// 		type: String,
// 		required: true,
// 		trim: true
// 	},
// 	email: {
// 		type: String,
// 		required: true,
// 		trim: true,
// 		lowercase: true,
// 		validate(value) {
// 			if (!validator.isEmail(value)) {
// 				throw new Error('Email is invalid')
// 			}
// 		}
// 	},
// 	password: {
// 		type: String,
// 		required: true,
// 		minlength: 7,
// 		trim: true,
// 		validate(value) {
// 			if (value.toLowerCase().includes('password')) {
// 				throw new Error('Password cannot contian "password"')
// 			}
// 		}
// 	},
// 	age: {
// 		type: Number,
// 		default: 0,
// 		validate(value) {
// 			if (value < 0) {
// 				throw new Error('Age must be a positive number')
// 			}
// 		}
// 	}
// })

// const me = new User({
// 	name: '    Mike  ',
// 	email: 'mike@myemail.com  ',
// 	password: 'phone091'
// })

// me.save().then(() => {
// 	console.log(me)
// }).catch((error) => {
// 	console.log('Error', error)
// })

// const me = new User({
// 	name: 'Mike',
// 	age: 30
// })

// me.save().then(() => {
// 	console.log(me)
// }).catch((error) => {
// 	console.log('Error', error)
// })

// const Task = mongoose.model('Task', {
// 	description: {
// 		type: String,
// 		required: true,
// 		trim: true
// 	},
// 	completed: {
// 		type: Boolean,
// 		default: false
// 	}
// })

// const task = new Task({
// 	description: 'Learn the Monggose library',
// 	completed: false
// })

// task.save().then(() => {
// 	console.log(task)
// }).catch((error) => {
// 	console.log(error)
// })

// const task = new Task({
// 	description: '  Eat lunch'
// })

// task.save().then(() => {
// 	console.log(task)
// }).catch((error) => {
// 	console.log(error)
// })