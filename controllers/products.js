var router = require('express').Router()
var Product = require('./../models/product')
var Code = require('./../models/product')


router.post('/products', function (req, res, next) {
    var product = new Product(req.body)
    product.save(function (err, product) {
        if (err) {
            return next(err)
        }
        res.status(201).json(product)
    })
})

router.get('/products', function (req, res, next) {
    Product.find()
        .exec(function (err, products) {
        if (err) {
            return next(err)
        }
        res.json(products);
    });
})

router.get('/product/:prodname', function (req, res, next) {
    Product.findOne({productName:req.params.prodname}).exec(function (err, product) {
        if (err) {
			response.statusCode.should.be.equal(404);
            return next(err)
        }
        res.json(product);
		
    });
})
router.get('/producted/:prodcode', function (req, res, next) {
    Product.findOne({productCode:req.params.prodcode}).exec(function (err, product) {
        if (err) {
            return next(err)
        }
        res.json(product);
    });
})

router.delete('/product/:prodname', function (req, res, next) {
    Product.findOne({productName:req.params.prodname}).exec(function (err, product) {
        if (err) {
            return next(err)
        }
        product.remove(function(err, product){
	
	if (err) {
            return next(err)
        }
        res.sendStatus(200)
	})
   });
})

module.exports = router