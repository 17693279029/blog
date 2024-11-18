import service from '../server'
export const toolsList = (data) => {
    return service.post('/v1/blog/tools/list', data)
}
export const toolsCreate = (data) => {
    return service.post('/v1/blog/tools/create', data)
}
export const toolsUpdate = (data) => {
    return service.post('/v1/blog/tools/update', data)
}
export const toolsDelete = (data) => {
    return service.post('/v1/blog/tools/delete', data)
}




