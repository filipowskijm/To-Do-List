require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./src/models/user');
const port = process.env.PORT || 5000 ;

const urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(bodyParser.json());
app.use(urlencodedParser);

mongoose.connect(process.env.dbURI, { useNewUrlParser:true, useUnifiedTopology:true })
.then((res) => {
    app.listen(port, () => console.log(`Listening on port ${port}`))
})
.catch(err => console.log(err))

app.post('/register', async (request, response) => {
    try {
        console.log(request.body);
        const hashedPassword = await bcrypt.hash(request.body.password, 10);

        const user = new User({
            username: request.body.username,
            email: request.body.email,
            password: hashedPassword,
        });

        const result = await user.save();

        response.status(201).send({
            message: 'User Created Successfully',
            result,
        });
    } catch (error) {
        response.status(500).send({
            message: 'Error creating user',
            error: error.message,
        });
    }
});