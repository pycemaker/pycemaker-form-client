import http from '../http-common'

class ApiDataServer{
    getAll(page, size){
        return http.get(`/usuario/${page}-${size}`);
    }
    create(data){
        return http.post('/registrar',data)
    }
    delete(id){
        return http.delete(`/usuario/delete/${id}`)
    }
}

export default new ApiDataServer();