import { User } from '../../models/index';

const signup = (req, res) => {
 const { username, email, firstname, lastname, password } = req.body
  console.log(username, email, firstname, lastname, password); 
  console.log(req);

   return User.create({
        username: req.body.username,
        email: req.body.email,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        password: req.body.password,
      })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  }


module.exports = signup;

