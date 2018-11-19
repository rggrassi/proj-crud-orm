const index = async ({ pessoa }, req, res) => {
    const pessoas = await pessoa.findAll()
    res.render('pessoas/index', { pessoas })
}

const createForm = async (req, res) => {
    res.render('pessoas/create')
}

const createProcess = async ({ pessoa }, req, res) => {
    await pessoa.create(req.body)
    res.redirect('/pessoas')
}

module.exports = {
    index,
    createForm,
    createProcess
}