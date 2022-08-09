const asyncHandler = require('express-async-handler')
const Fit = require('./fitModel')

// @desc     Get fits
// @ route   GET /api/fits/
const getFits = asyncHandler(async (req, res) => {
  res.json(await Fit.find())
})

// @desc     Set fit
// @ route   Post /api/fits/
const setFit = asyncHandler(async (req, res) => {
  ;['company', 'material', 'season', 'style', 'imgurl'].map(ea => {
    if (!req.body[ea]) throw new Error(`plz add ${ea}`)
  })
  res.json(
    await Fit.create({
      company: req.body.company,
      material: req.body.material,
      season: req.body.season,
      style: req.body.style,
      imgurl: req.body.imgurl,
    }),
  )
})

// @desc     Update fits
// @ route   PUT /api/fits/:id
const updateFit = asyncHandler(async (req, res) => {
  const fit = await Fit.findById(req.params.id)
  if (!fit) throw new Error('fit not found')

  res.json(await Fit.findOneAndUpdate(req.params.id, req.body, { new: true }))
})

// @desc     Delete fit
// @ route   DELTE /api/fits/:id
const deleteFit = asyncHandler(async (req, res) => {
  const fit = await Fit.findById(req.params.id)
  if (!fit) throw new Error('fit not found')

  await fit.remove()

  res.json({ id: req.params.id })
})

module.exports = {
  getFits,
  setFit,
  updateFit,
  deleteFit,
}
