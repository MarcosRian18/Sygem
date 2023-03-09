const express = require('express')
const app = express()
const cors = require('cors')
const router_list_funcionario = require('./routers/lista_funcionarios')
const router_create_funcionario = require('./routers/create_funcionario')
const router_busca_funcionario = require('./routers/busca_funcionario')
// const swagger_ui = require('swagger-ui-express')
// const swaggerDocument = require('./swagger.json')

app.use(express.json())
app.use(cors())
app.use(router_list_funcionario)
app.use(router_create_funcionario)
app.use(router_busca_funcionario)
// app.use('/api-docs', swagger_ui.serve, swagger_ui.setup(swaggerDocument))

app.listen(5000, () => {
    console.log('Servidor rodando...')
})