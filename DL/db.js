const mongoose = require('mongoose')

const
    userName = 'workin',
    password = 'Workin1121',
    connectionString = `mongodb+srv://${userName}:${password}@cluster0.ho2ly.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

exports.connect = async function connect() {
    try {
        console.log('connecting ..')
        await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            // useUnifiedTopology: true,
            // useCreateIndex: true
        }//,err => { if (err){ throw err} }
        )

        //success
        console.log('Mongo connected!')
    } catch (error) {
        console.error('Not Connected', error.message)
    }
}