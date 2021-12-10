const getUsers = (req, res) => {
    const db = req.app.get('db')
    // console.log(db)

    db.get_users().then((user) => { 
      res.status(200).send(user)}
    ).catch(err => {
      console.log(err)
      res.status(500).send(err)
    })
  }


module.exports = {
  getUsers,
}