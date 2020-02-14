const host = process.env.REDIS_HOST || `localhost`
const port = Number(process.env.REDIS_PORT) || 6379

const options = {
  host,
  port,
}

export default options
