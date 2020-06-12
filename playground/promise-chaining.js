require('../src/db/mongoose')
const User = require('../src/models/user')
const Task = require('../src/models/task')

//5edb374cb42f520864dc6f61

// User.findByIdAndUpdate('5edb39c40e910308249122d1', { age: 1}).then((user) => {
// 	console.log(user)

// 	return User.countDocuments({ age: 1})
// }).then((result) => {
// 	console.log(result)
// }).catch((e) => {
// 	console.log(e)
// })

// const updateAgeAndCount= async (id, age) => {
// 	const user = await User.findByIdAndUpdate(id, { age })
// 	const count = await User.countDocuments({ age })
// 	return count
// }

// updateAgeAndCount('5edb39c40e910308249122d1', 1).then((count) => {
// 	console.log(count)
// }).catch((e) => {
// 	console.log(e)
// })

const deleteTaskAndCount = async (id) => {
	const task = await Task.findByIdAndDelete(id)
	const count = await Task.countDocuments({ completed: false })
	return count
}

deleteTaskAndCount('5edb738f5fe83b17402a41ab').then((count) => {
	console.log(count)
}).catch((e) => {
	console.log(e)
})