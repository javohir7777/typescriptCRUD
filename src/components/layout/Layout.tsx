import { ChildrenType } from "../../types/children";

const Layout = ({ children }: ChildrenType) => {
  return (
    <div>
      <header></header>
      {children}
     
    </div>
  );
};

export default Layout;
