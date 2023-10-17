import { Button, Card } from "antd";
import { CategoryType } from "../../types/category";

const { Meta } = Card;

const CategoryCard = ({ name, image, id }: CategoryType) => {
  return (
    <Card hoverable cover={<img height={200} src={image} alt={name} />}>
      <Meta title={name} style={{ marginBottom: "20px" }} />
      <Button>Edit</Button>
      <Button danger>Delete</Button>
    </Card>
  );
};

export default CategoryCard;
