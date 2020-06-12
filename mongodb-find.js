// CRUD create read update  delete

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'


MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
	if (error) {
		return console.log('Unable to connect to databas')
	}

	const db = client.db(databaseName)

	// db.collection('users').findOne({ _id: new ObjectID("5ed890ad3fbc62146875a52d") }, (error, user) => {
	// 	if (error) {
	// 		return console.log('Unable to fetch')
	// 	}

	// 	console.log(user)
	// })

	// db.collection('users').find({ age: 30 }).toArray((error, users) => {
	// 	console.log(users)
	// })

	// db.collection('users').find({ age: 30 }).count((error, count) => {
	// 	console.log(count)
	// })

// 	db.collection('tasks').findOne({ _id: new ObjectID("5ed89b751b40db141cab374d") }, (error, task) => {
// 		console.log(task)
// 	})

// 	db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
// 		console.log(tasks)
// 	})
 })