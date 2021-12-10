const getCart = (req, res) => {
    const db = req.app.get('db')
    // console.log(db)

    db.get_cart().then((cart) => { 
      res.status(200).send(cart)}
    ).catch(err => {
      console.log(err)
      res.status(500).send(err)
    })
  }

const getOrders = (req, res) => {
    const db = req.app.get('db')
    // console.log(db)

    db.get_orders().then((order) => { 
      res.status(200).send(order)}
    ).catch(err => {
      console.log(err)
      res.status(500).send(err)
    })
  }


module.exports = {
  getCart,
  getOrders
}