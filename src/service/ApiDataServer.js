import http from '../http-common'

class ApiDataServer{
    getAll(page, size){
        return http.get(`/usuario/${page}-${size}`);
    }
    create(data){
        return http.post('/registrar',data)
    }
}

export default new ApiDataServer();