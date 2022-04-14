import { request } from '../httpservices'
export const category={
    getAllCategory:()=>request.get('/category'),
    getAllProductCategoryWise:(id)=>request.get(`/productsCategoryWise/${id}`),
    postService:(body)=>request.post('/createCategory',body),
    deleteService:(id)=>request.delete(`/deleteCategory/${id}`),
    updateService:(id,body)=>request.patch(`/bookStatus/${id}`,body)
}