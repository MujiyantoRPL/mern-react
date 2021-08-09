import axios from "axios";
import { rootOffline, rootOnline } from "./Config";

const Get = (path, root) => {
  const promise = new Promise((resolve, reject) => {
    axios.get(`${root ? rootOnline : rootOffline}/${path}`).then(
      (result) => {
        resolve(result.data);
      },
      (err) => {
        reject(err);
      }
    );
  });

  return promise;
};

export default Get;
