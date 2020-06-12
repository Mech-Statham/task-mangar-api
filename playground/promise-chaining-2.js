require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('5edb73efe55a3e03043bd397').then((task) => {
	console.log(task)

	return Task.countDocuments({ completed: false })
}).then((result) => {
	console.log(result)
}).catch((e) => {
	console.log(e)
})