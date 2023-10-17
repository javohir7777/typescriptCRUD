export interface CategoryType {
  id: string;
  firstName: string;
  avatar: string;
}

export interface CategoryResponseType extends CategoryType {
  createdAt: string;
}
