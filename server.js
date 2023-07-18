require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./src/models/user');
const port = process.env.PORT || 5000 ;
const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(bodyParser.json(), urlencodedParser);

mongoose.connect(dbURI, { useNewUrlParser:true, useUnifiedTopology:true })
.then((res) => {
    app.listen(port, () => console.log(`Listening on port ${port}`))
})
.catch(err => console.log(err))

app.get('/home', (req, res) => {
    res.json({
        name: 'Billy',
        age: 99
    })
})

app.post('/register', async (req, res) => {
    const user = req.body;

    const takenUsername = await User.findOne({username: user.username})
    const takenEmail = await User.findOne({email: user.email})

    if (takenUsername || takenEmail) {
        res.json({message: 'Username or email has already been taken'})
    } else {
        user.password = await bcrypt.hash(req.body.password, 10)

        const dbUser = new User({
            username: user.username.toLowerCase(),
            email: user.email.toLowerCase(),
            password: user.password
        })

        dbUser.save()
        res.json({message: 'Success'})
    }
})