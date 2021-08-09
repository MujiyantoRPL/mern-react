import React from "react";
import { Table } from "react-bootstrap";
import "./DataBarang.css";
import DetailBarang from "../../pages/Barang/DetailBarang";

const DataBarang = (props) => {
  return (
    <div>
      <Table striped bordered hover size="sm">
        <tbody>
          <tr>
            <td>{props.data.id}</td>
            <td>{props.data.nama}</td>
            <td>{props.data.harga}</td>
            <td>{props.data.kategori}</td>
            <td>{props.data.created_at}</td>
            <td>{props.data.updated_at}</td>
            <td>
              <button>Tambah</button>
              <button>Update</button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default DataBarang;
