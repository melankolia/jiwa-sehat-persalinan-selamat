import axios from "axios";

const instance = axios.create();

const MainInstance = {
  async query(resource, params) {
    return instance.get(resource, params);
  },

  async download(resource, params, type) {
    return instance.get(resource, { params, responseType: type });
  },

  async fetch(resource, slug = "", params) {
    return instance.get(`${resource}/${slug}`, params);
  },

  async post(resource, params, config) {
    return instance.post(`${resource}`, params, config);
  },

  async create(resource, slug = "", params, config) {
    return instance.post(`${resource}/${slug}`, params, config);
  },

  async update(resource, slug, params) {
    return instance.put(`${resource}/${slug}`, params);
  },

  async put(resource, params) {
    return instance.put(`${resource}`, params);
  },

  async delete(resource, config) {
    return instance.delete(resource, config);
  },

  async deleteSlug(resource, slug, config) {
    return instance.delete(`${resource}/${slug}`, config);
  },
};

export default MainInstance;
