const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require('../models/user.model.js')

// @route    POST api/users/register
// @desc     Register user
// @access   Public
router.post('/register', async (req, res) => {
  // destructure values from request body
  const {
    email,
    firstName,
    lastName,
    password,
    displayName,
    cellNumber,
  } = req.body

  try {
    let user = await User.findOne({ email })

    if (user) {
      return res.status(400).json({ errors: [{ msg: 'User already exists' }] })
    }

    user = new User({
      firstName,
      lastName,
      password,
      displayName,
      cellNumber,
    })

    const salt = await bcrypt.genSalt(10)

    user.password = await bcrypt.hash(password, salt)

    await user.save()

    const payload = {
      user: {
        id: user.id,
      },
    }

    jwt.sign(
      payload,
      config.get('jwtSecret'),
      { expiresIn: '5 days' },
      (err, token) => {
        if (err) throw err
        res.json({ token })
      }
    )
  } catch (err) {
    onsole.error(err.message)
    res.status(500).send('Server error')
  }
})

module.exports = router
