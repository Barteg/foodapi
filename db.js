var mongoose = require('mongoose')
 
//var url = 'mongodb://localhost/baza-product'
var url = 'mongodb://projektsystemu:patryksliwinski1@ds161939.mlab.com:61939/products'
//mongoose.connect('mongodb://user:user_password@ds157185.mlab.com:57185/products');
mongoose.connect('mongodb://projektsystemu:patryksliwinski1@ds161939.mlab.com:61939/products');
//mongodb://<dbuser>:<dbpassword>@ds161939.mlab.com:61939/products
mongoose.connect(url, function () {
console.log('Connected to MongoDB@%s', url);
})
module.exports = mongoose
