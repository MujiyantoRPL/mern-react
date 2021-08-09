import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import API from "../../services";
import { useHistory, useParams } from "react-router-dom";
import { Alert } from "react-bootstrap";

const CreateBarang = (props) => {
  const [data, setData] = useState([]);
  const [namaBarang, setNamaBarang] = useState("");
  const [hargaBarang, setHargaBarang] = useState("");
  const [kategoriBarang, setKategoriBarang] = useState("");
  const { register, handleSubmit } = useForm();
  let history = useHistory();
  let { id } = useParams();
  const [show, setShow] = useState(false);
  const getData = () => {
    console.log("id", id);

    axios
      .get(`http://backendpkl.spacearts.id/api/barang/detail/${id}`)
      .then((result) => {
        console.log(result);
        // setData(result.data._data);
        setNamaBarang(result.data._data.nama);
        setHargaBarang(result.data._data.harga);
        setKategoriBarang(result.data._data.kategori);
      })
      .then(() => {
        <Alert variant="success">Berhasil Mendapatkan Detail</Alert>;
      });
  };

  const onSubmit = () => {
    axios
      .put(`http://backendpkl.spacearts.id/api/barang/update`, {
        id: id,
        nama: namaBarang,
        harga: hargaBarang,
        kategori: kategoriBarang,
      })
      .then((response) => {
        <Alert variant="success">Berhasil Mendapatkan Detail</Alert>;
      })
      .then(() => {
        history.push("/barang");
      });
  };

  useEffect(() => {
    getData();
    console.log(namaBarang);
    return () => {};
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <span></span>
          <input
            placeholder="setNamaBarang"
            type="text"
            value={namaBarang || ""}
            onChange={(e) => setNamaBarang(e.target.value)}
          />
        </div>
        <div>
          <span></span>
          <input
            placeholder="setHargaBarang"
            type="text"
            value={hargaBarang || ""}
            onChange={(e) => setHargaBarang(e.target.value)}
          />
        </div>
        <div>
          <span></span>
          <input
            placeholder="setKategoriBarang"
            type="text"
            value={kategoriBarang || ""}
            onChange={(e) => setKategoriBarang(e.target.value)}
          />
        </div>

        <button className="btn btn-primary update">Update Barang</button>
      </form>
    </>
  );
};

export default CreateBarang;
