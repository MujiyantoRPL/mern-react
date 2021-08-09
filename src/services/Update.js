import axios from "axios";
import { reject } from "rsvp";
import { rootOffline, rootOnline } from "./Config";

const Update = (path, root, data) => {
  const promise = new Promise((resolve, result) => {
    axios.put(`${root ? rootOnline : rootOffline}/${path}`).then(
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

export default Update;
