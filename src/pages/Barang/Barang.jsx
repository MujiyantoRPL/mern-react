import React, { useState, useEffect } from "react";
import DataBarang from "../../component/DataBarang/DataBarang";
import { Table } from "react-bootstrap";
import API from "../../services";
import "./Barang.css";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

const Barang = () => {
  let history = useHistory();
  const [post, setPost] = useState([]);
  const { totalData, totalHarga, totalKategori } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();

  // console.log("global state", globalState);

  const getDataToApi = () => {
    API.getDataBarang().then((result) => {
      const dataApi = result._data;
      console.log(dataApi);
      setPost(dataApi);
      //total data
      dispatch({ type: "TOTAL_DATA", payload: dataApi.length });

      let element = [];
      let harga = [];
      let dataHarga = [];
      let dataElektronik = [];
      for (let index = 0; index < dataApi.length; index++) {
        element = dataApi[index].kategori;
        harga = dataApi[index].harga;
        dataHarga.push(harga);
        //elektronik
        if (element == "Elektronik") {
          dataElektronik.push(element);
        }
      }
      // console.log(dataElektronik.length);

      //total data kategori elektronik
      dispatch({ type: "TOTAL_KATEGORI", payload: dataElektronik.length });

      //memcari total harga
      let total = 0;
      for (let i = 0; i < dataHarga.length; i++) {
        total = total + dataHarga[i];
      }

      console.log(total);
      dispatch({ type: "TOTAL_HARGA", payload: total });
    });
  };

  const handleUpdate = (id) => {
    history.push(`/update_barang/${id}`);
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://backendpkl.spacearts.id/api/barang/delete/${id}`)
      .then((result) => {
        getDataToApi();
      });
  };

  useEffect(() => {
    getDataToApi();
  }, []);

  const pindahHalaman = (parameter) => {
    if (parameter == "list") {
      history.push("/barang");
    } else if (parameter === "update") {
      history.push(`/update_barang`);
    } else if (parameter === "create") {
      history.push("/create_barang");
    }
  };

  return (
    <>
      <div>
        <button
          className="btn btn-primary btn-create"
          onClick={() => pindahHalaman("create")}
        >
          Create Barang
        </button>
      </div>
      <div>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>id</th>
              <th>nama</th>
              <th>harga</th>
              <th>kategori</th>
              <th>created at</th>
            </tr>
          </thead>
          <tbody>
            {post &&
              post.map((postb) => {
                return (
                  <tr key={postb.id}>
                    <td>{postb.id}</td>
                    <td>{postb.nama}</td>
                    <td>{postb.harga}</td>
                    <td>{postb.kategori}</td>

                    <td>
                      {/* <button onClick={() => pindahHalaman("update")}>
                        Update
                      </button> */}
                      <button
                        className="btn btn-primary btn-update"
                        onClick={() => handleUpdate(postb.id)}
                      >
                        Update
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(postb.id)}
                      >
                        Hapus
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default Barang;
