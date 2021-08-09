import Get from "./Get";
import Update from "./Update";
import Post from "./Post";

const getDataBarang = () => Get(`get_list`, true);

const postDataBarang = (data) => Post(`create`, true, data);

const updateDataBarang = () => Update(`create`, true);

const API = {
  getDataBarang,
  postDataBarang,
};

export default API;
