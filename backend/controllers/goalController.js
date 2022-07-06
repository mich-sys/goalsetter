const asyncHandler = require('express-async-handler');
// @desc Get goals
// @routes GET /api/goals
// @access Private

const getGoals = asyncHandler(async (req, res) => {
   res.status(200).json({ message: 'Get goals' })
})

// @desc Set goal
// @routes POST /api/goals
// @access Private

const setGoal =  asyncHandler(async (req, res) => {
 if (!req.body.text) {
   res.status(400)
   throw new Error('please add a text field')
 }

     res.status(200).json({ message: 'Set goals' })
})

// @desc update goal
// @routes PUT /api/goals/:id
// @access Private

const updateGoal = asyncHandler(async  (req, res) => {
   res.status(200).json({ message: `update goal ${req.params.id}` })
})

// @desc delete goals
// @routes DELETE /api/goals/:id
// @access Private

const deleteGoal = asyncHandler(async (req, res) => {
   res.status(200).json({ message: `delete goal ${req.params.id}` })
})

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
}
