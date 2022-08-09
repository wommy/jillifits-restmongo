const asyncHandler = require('express-async-handler')
// const Fit = require('./fitModel')

// @desc     Get fits
// @ route   GET /api/fits/
const getFits = asyncHandler(async (req, res) => {
  res.json({ message: 'get fits' })
})

// @desc     Set fit
// @ route   Post /api/fits/
const setFit = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('plz add txt')
  }
  res.json({ message: 'set fit' })
})

// @desc     Update fits
// @ route   PUT /api/fits/:id
const updateFit = asyncHandler(async (req, res) => {
  res.json({ message: `update fit ${req.params.id}` })
})

// @desc     Delete fit
// @ route   DELTE /api/fits/:id
const deleteFit = asyncHandler(async (req, res) => {
  res.json({ message: `delete fit ${req.params.id}` })
})

module.exports = {
  getFits,
  setFit,
  updateFit,
  deleteFit,
}
