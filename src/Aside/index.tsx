import { NavLink } from "react-router-dom";
const Aside = () => {
  return (
    <aside>
      <ul>
        <li>
          <NavLink to="/learn" end>
            Quick start
          </NavLink>
        </li>
        <li>
          <NavLink to="/learn/think-in-react">Think in react</NavLink>
        </li>
        <li>
          <NavLink to="/learn/installation">installation</NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Aside;
