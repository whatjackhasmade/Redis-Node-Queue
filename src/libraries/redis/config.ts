const host = process.env.REDIS_HOST || `localhost`;
const port = process.env.REDIS_PORT || 6379;

const options = {
	host,
	port
};

export default options;
