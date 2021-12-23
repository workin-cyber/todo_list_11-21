const Task = require('./controllers/TaskController')

module.exports = app => {
    app.get('/todo', async (req, res) => { })

    app.post('/todo', async (req, res) => {
        try {
            console.log(req.body);
            let result = await Task.create(req.body)
            res.send(result)
        }
        catch (err) {
            res.send({ code: 400, message: err.message || err })
        }
    })

    app.put('/todo/:id', async (req, res) => { })
    app.delete('/todo/:id', async (req, res) => { })
}