  const getAllProducts = (req, res) => {
    const db = req.app.get('db')
    // console.log(db)

    db.get_products().then((products) => { 
      res.status(200).send(products)}
    ).catch(err => {
      console.log(err)
      res.status(500).send(err)
    })
  }

  const getProduct = (req, res) => {
    const {id} = req.params
    const db = req.app.get('db')
    // console.log(db)
    
    db.get_product(id).then((product) => {
      res.status(200).json(product)
    }).catch(err => {
      res.status(500).send(err)
    })
  }

module.exports = {
  getAllProducts,
  getProduct
}
