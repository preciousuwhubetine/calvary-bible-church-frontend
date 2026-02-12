import baseAPI from '..'

const api = baseAPI.create({
  baseURL: `${baseAPI.defaults.baseURL}/api`,
  withCredentials: true,
})

export default api;
