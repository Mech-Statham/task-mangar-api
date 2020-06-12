// CRUD create read update  delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectID()
// console.log(id)
// console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
	if (error) {
		return console.log('Unable to connect to databas')
	}

	const db = client.db(databaseName)

	// db.collection('users').insertOne({
	// 	name: "Mike",
	// 	age: 30
	// }, (error, result) => {
	// 	if (error) {
	// 		return console.log('Unable to insert user')
	// 	}

	// 	console.log(result.ops)
	// })

	// db.collection('users').insertMany([
	// 	{
	// 		name: 'Jen',
	// 		age: 20
	// 	}, {
	// 		name: 'Gunther',
	// 		age: 23
	// 	}
	// ], (error, result) => {
	// 	if (error) {
	// 		return console.log('Unable to insert documents')
	// 	}

	// 	console.log(result.ops)
	// })

	// db.collection('tasks').insertMany([
	// 	{
	// 		description: 'Cleant the house',
	// 		completed: true	
	// 	}, {
	// 		description: 'Renew policy',
	// 		completed: false
	// 	}, {
	// 		description: 'Pot plants',
	// 		completed: false
	// 	}
	// ], (error, result) => {
	// 	if (error) {
	// 		return console.log('Unable to insert tasks!')
	// 	}

	// 	console.log(result.ops)
	// })

	// db.collection('users').insertOne({
	// 	_id: id,
	// 	name: "Jen",
	// 	age: 22
	// }, (error, result) => {
	// 	if (error) {
	// 		return console.log('Unable to insert user')
	// 	}

	// 	console.log(result.ops)
	// })

})