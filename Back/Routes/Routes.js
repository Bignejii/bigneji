const express = require('express')
const router = express.Router()
const Proudects = require('../Controllers/Proudects')










router.get('/',Proudects.getAll)
router.post('/', Proudects.create)
router.delete('/:id', Proudects.dell)
router.put('/:id', Proudects.update)




module.exports = router