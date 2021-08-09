import React from "react";
import { Form, Button } from "react-bootstrap";
const DetailBarang = () => {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="nama">
          <Form.Label>Nama</Form.Label>
          <Form.Control type="text" placeholder="Masukkan Nama" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="harga">
          <Form.Label>Harga</Form.Label>
          <Form.Control type="text" placeholder="Masukkan Harga" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="kategori">
          <Form.Label>Kategori</Form.Label>
          <Form.Control type="text" placeholder="Masukkan Kategori" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default DetailBarang;
