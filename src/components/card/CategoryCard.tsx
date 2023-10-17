import { Button, Card } from "antd";
import { CategoryType } from "../../types/category";
import { Link } from "react-router-dom";

const { Meta } = Card;

const CategoryCard = ({
  deleteCategory,
  editCategory,
  firstName,
  avatar,
  id,
}: CategoryType) => {
  return (
    <Card hoverable cover={<img height={200} src={avatar} alt={firstName} />}>
      <Meta title={firstName} style={{ marginBottom: "20px" }} />

      <div style={{ display: "flex", gap: "2px" }}>
        <Link to={`/categorie/${id}`}>
          <Button type="primary">One Card {id}</Button>
        </Link>
        <Button onClick={() => editCategory(id)}>Edit</Button>
        <Button danger onClick={() => deleteCategory(id)}>
          Delete
        </Button>
      </div>
    </Card>
  );
};

export default CategoryCard;
