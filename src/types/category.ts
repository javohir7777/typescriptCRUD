export interface CategoryType {
  id: string;
  firstName: string;
  avatar: string;
  deleteCategory: (id: string) => void;
  editCategory: (id: string) => void;
}

export interface CategoryResponseType extends CategoryType {
  createdAt: string;
}
