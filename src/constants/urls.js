const baseURL = 'https://jsonplaceholder.typicode.com'
const spaceXURL = 'https://api.spacexdata.com/v3'

const users = '/users'
const posts = '/posts'
const launches = '/launches'

const urls = {
    users: {
        base: users,
        byId: (id) => `${users}/${id}`
    },
    posts: {
        base: posts,
        byId: (id) => `${posts}/${id}`
    },
    launches
}

export {baseURL, spaceXURL, urls}