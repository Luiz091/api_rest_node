const mongoose = require('mongoose');

//conexão com DB MongoDB Atlas
mongoose.connect('mongodb+srv://root:root@apirest.srvp6.mongodb.net/ApiRest?retryWrites=true&w=majority',  {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex:true
});

mongoose.Promise = global.Promise;

module.exports = mongoose;