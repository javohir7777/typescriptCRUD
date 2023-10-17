import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import request from "../../server";
import { Button, Card, Col, Form, Input, Modal, Row } from "antd";
import Meta from "antd/es/card/Meta";
import { CategoryType } from "../../types/category";

const CardId = () => {
  const { idx } = useParams();
  const [product, setSroduct] = useState([]);
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    getCategoriesId();
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleOk = async () => {
    try {
      const values: CategoryType = await form.validateFields();
      if (selected === null) {
        await request.post(`categories/${idx}`, values);
      } else {
        await request.put(`/categories/${idx}/products/${selected}`, values);
      }
      closeModal();
      getCategoriesId();
    } catch (error) {
      console.log(error);
    }
  };

  const getCategoriesId = async () => {
    try {
      const { data } = await request.get(`/categories/${idx}/products`);
      setSroduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  const editCategoryId = async (id: number) => {
    setSelected(id)
    const { data } = await request.get(`/categories/${idx}/products/${id}`);
    form.setFieldsValue(data);
    setIsModalOpen(true);
  };

  const deleteCategoryId = async (id: number) => {
    await request.delete(`/categories/${idx}/products/${id}`);
  };
  return (
    <div className="vh-100 d-flex align-items-center justify-content-center flex-column mt-5">
      <h1 className="text-black">Product page: {idx}</h1>
      <Row gutter={16}>
        {product.map(({ id, avatar, firstName }) => (
          <Col style={{ marginBottom: "10px" }} key={id} className="gutter-row">
            <Card
              hoverable
              cover={<img height={200} src={avatar} alt={firstName} />}
            >
              <Meta title={firstName} style={{ marginBottom: "20px" }} />
              <Button type="primary" onClick={() => editCategoryId(id)}>
                Edit
              </Button>
              <Button danger onClick={() => deleteCategoryId(id)}>
                Delete {id}
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
      <Modal
        open={isModalOpen}
        onCancel={closeModal}
        onOk={handleOk}
        title="Basic Modal"
      >
        <Form
          name="category"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          form={form}
          autoComplete="off"
        >
          <Form.Item<CategoryType>
            label="Name"
            name="firstName"
            rules={[{ required: true, message: "Please fill!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<CategoryType>
            label="Image"
            name="avatar"
            rules={[{ required: true, message: "Please fill!" }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default CardId;
