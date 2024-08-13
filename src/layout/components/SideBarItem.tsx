import { useNavigate } from "react-router-dom";
import { sideBarItem } from "./SideBar";

const SideBarItem = (props:sideBarItem) => {

    const navigate = useNavigate()

    const onNavigate = () => {
        navigate(`${props.url}`)
    }

  return (
    <li className="sidebar-item">
      <a href="#" className="sidebar-link" onClick={onNavigate}>
        <i className={props.logo}></i>
        <span>{props.nombre}</span>
      </a>
    </li>
  );
};

export default SideBarItem;
