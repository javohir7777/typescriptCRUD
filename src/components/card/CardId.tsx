import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import request from "../../server";
import { Card, Col, Row, Spin } from "antd";
import Meta from "antd/es/card/Meta";

const CardId = () => {
  const { id } = useParams();
  const [product, setSroduct] = useState([]);

  useEffect(() => {
    getCategoriesId();
  }, []);

  const getCategoriesId = async () => {
    try {
      const { data } = await request.get(`/categories/${id}/products`);
      setSroduct(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="vh-100 d-flex align-items-center justify-content-center flex-column mt-5">
      <h1 className="text-black">Product page: {id}</h1>
      <Row gutter={16}>
        {product.map((product) => (
          <Col
            style={{ marginBottom: "10px" }}
            key={product.id}
            className="gutter-row"
           
          >
            <Card
              hoverable
              cover={
                <img
                  height={200}
                  src={product.avatar}
                  alt={product.firstName}
                />
              }
            >
              <Meta
                title={product.firstName}
                style={{ marginBottom: "20px" }}
              />
            </Card>
          </Col>
        ))}
      </Row>
      {/* <div className="row container">
        {product.map((product) => (
          <div key={product.id} className="col-12 col-sm-6 col-md-3 col-lg-4">
            <div key={product.id} className="card" style={{ width: "400px" }}>
              <img
                className="card-img-top"
                height={300}
                src={product.avatar}
                alt=""
              />
              <h1 className="text-title text-center">{product.name}</h1>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default CardId;
