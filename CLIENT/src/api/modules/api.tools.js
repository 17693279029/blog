import service from '../server'

export const toolsList = (data) => {
    return service.post('/v1/blog/tools/client/list', data)
}
// export const blog_articlesDetail = (data) => {
//     return service.post('/v1/blog/tools/client/detail', data)
// }





