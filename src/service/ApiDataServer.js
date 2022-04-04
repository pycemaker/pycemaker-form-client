import http from '../http-common'

class ApiDataServer{
    getAll(){
        return http.get('/usuarios');
    }
    create(data){
        return http.post('/registrar',data)
    }
}

export default new ApiDataServer();