export interface ProductType {
    id: string;
    firstName: string;
    avatar: string;
    deleteCategory: (id: string) => void;
    editCategory: (id: string) => void;
  }