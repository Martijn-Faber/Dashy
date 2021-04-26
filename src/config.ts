let server_url = ''
let base_url = ''

const NODE_ENV = "production"

if (NODE_ENV === 'production') {
    server_url = ' '
    base_url = ' '
} else {
    server_url = 'https://localhost:5000/api'
    base_url = 'http://localhost:8081'
}

export const serverUrl = server_url
export const baseUrl = base_url