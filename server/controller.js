module.exports = {

  getAll: (req, res, next) => {
    // console.log(req)
    const dbInstance = req.app.get('db');

    dbInstance.read_houses()
    .then((response) => {
      console.log(response)
      res.status(200).send(response)
    })
    .catch(error => {
      res.status(500).send('Oop, Something have HAPPEN unable to complete this request')
      console.log(error);
    })
  },

  register: (req, res, next) => {
    //console.log(req)
    const dbInstance = req.app.get('db');

    dbInstance.register_houses(req.body.name, req.body.address, req.body.city, req.body.state, req.body.zip, req.body.img, req.body.mortgage, req.body.rent)
    .then((response) => {
      console.log(response)
      res.status(200).send('Item Have been add')
    })
    .catch(error => {
      res.status(500).send('Oop, Something have HAPPEN unable to complete this request')
      console.log(error);
    })
  },

  remove: (req, res, next) => {
    // console.log(req)
    const dbInstance = req.app.get('db');

    dbInstance.remove_house(req.body.id.id)
    .then((response) => {
      console.log(`response 1 ${req.body.id.id}`)
      res.status(200).send(`Item have been remove from list ${req.param.id}`)
    })
    .catch(error => res.status(500).send('Error unable to Delete item from list', error)); 
  }



}