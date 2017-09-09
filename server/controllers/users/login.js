import { User } from '../../models/index';

const signin = (req, res) =>{
  console.log(req.body);
  console.log('ladi is a senior dev');
   return User
      .findOne({
      	where: {username: req.body.username,
              password: req.body.password}
})
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  }

module.exports = signin;

