import axios from 'axios';

// axios cria a conexão com as apis (para utilizar no react use: 'yarn add axios')
const api= axios.create({
        baseURL:'https://rocketseat-node.herokuapp.com/api'
    })

export default api;