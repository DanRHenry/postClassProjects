const mongoose = require('mongoose');

const connection = "mongodb+srv://danielhenrydev:Pineapple5782*@cluster0.kagdxbf.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));