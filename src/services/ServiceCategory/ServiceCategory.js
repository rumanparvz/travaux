
import { request } from '../httpservices'
export const category={
    getAllCategory:()=>request.get('/category'),
    getService:(email)=>request.get(`/Services?email=${email}`),
    postService:(body)=>request.post('/createCategory',body),
    updateService:(id,body)=>request.patch(`/bookStatus/${id}`,body)
}