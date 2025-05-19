const express = require('express')
const router = express.Router()
const Proudects = require('../Controllers/Proudects')
const AuthController = require('../Controllers/AuthController')

router.get('/', Proudects.getAll)
router.post('/', Proudects.create)
router.delete('/:id', Proudects.dell)
router.put('/:id', Proudects.update)
router.get('/:id', Proudects.getOne)

// Authentication routes
router.post('/login', AuthController.login)
router.post('/register', AuthController.register)


module.exports = router