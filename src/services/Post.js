import axios from "axios";
import { rootOnline, rootOffline } from "./Config";

const Post = (path, root, data) => {
  const promise = new Promise((resolve, reject) => {
    axios.post(`${root ? rootOnline : rootOffline}/${path}`).then(
      (result) => {
        resolve(result);
      },
      (err) => {
        reject(err);
      }
    );
  });

  return promise;
};

export default Post;
