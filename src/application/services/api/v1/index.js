import baseAPI from '..'

const api = baseAPI.create({
  baseURL: `${baseAPI.defaults.baseURL}/v1`,
  withCredentials: true,
})

export default api;
