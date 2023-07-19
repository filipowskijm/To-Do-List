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

mongoose.connect(process.env.dbURI, { useNewUrlParser:true, useUnifiedTopology:true })
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

app.post("/register", (request, response) => {
    // hash the password
    bcrypt
      .hash(request.body.password, 10)
      .then((hashedPassword) => {
        // create a new user instance and collect the data
        const user = new User({
          email: request.body.email,
          password: hashedPassword,
        });
  
        // save the new user
        user
          .save()
          // return success if the new user is added to the database successfully
          .then((result) => {
            response.status(201).send({
              message: "User Created Successfully",
              result,
            });
          })
          // catch error if the new user wasn't added successfully to the database
          .catch((error) => {
            response.status(500).send({
              message: "Error creating user",
              error,
            });
          });
      })
      // catch error if the password hash isn't successful
      .catch((e) => {
        response.status(500).send({
          message: "Password was not hashed successfully",
          e,
        });
      });
  });

// app.post('/register', async (req, res) => {
//     const user = req.body;

//     const takenUsername = await User.findOne({username: user.username})
//     const takenEmail = await User.findOne({email: user.email})

//     if (takenUsername || takenEmail) {
//         res.json({message: 'Username or email has already been taken'})
//     } else {
//         user.password = await bcrypt.hash(req.body.password, 10)

//         const dbUser = new User({
//             username: user.username.toLowerCase(),
//             email: user.email.toLowerCase(),
//             password: user.password
//         })

//         dbUser.save()
//         res.json({message: 'Success'})
//     }
// })