import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import API from "../../services";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./Barang.css";

const CreateBarang = () => {
  const [data, setData] = useState([]);
  const [namaBarang, setNamaBarang] = useState("");
  const [hargaBarang, setHargaBarang] = useState("");
  const [kategoriBarang, setKategoriBarang] = useState("");
  const { register, handleSubmit } = useForm();
  let history = useHistory();

  const getData = () => {
    API.getDataBarang().then((result) => {
      setData(result._data);
    });
  };

  const onSubmit = (data) => {
    axios
      .post(`http://backendpkl.spacearts.id/api/barang/create`, {
        nama: namaBarang,
        harga: hargaBarang,
        kategori: kategoriBarang,
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

        <button className="btn btn-primary create">Create Barang</button>
      </form>
    </>
  );
};

export default CreateBarang;
