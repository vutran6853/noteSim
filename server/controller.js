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
  }
}