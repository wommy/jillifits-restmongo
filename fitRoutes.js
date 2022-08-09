const router = require('express').Router()
const { getFits, setFit, updateFit, deleteFit } = require('./fitController')

router.route('/').get(getFits).post(setFit)
router.route('/:id').put(updateFit).delete(deleteFit)

module.exports = router
