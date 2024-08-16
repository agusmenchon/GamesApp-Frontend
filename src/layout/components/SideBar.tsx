import { useState } from "react";
import SideBarItem from "./SideBarItem";
import './sideBar.css'

export interface sideBarItem{
  nombre:string,
  url: string,
  logo: string
}

const SideBar = () => {

  const sideBarItems:sideBarItem[] = [
    {
      nombre: "Presidente",
      url: "/presidente/lobby",
      logo: "lni lni-game"
    },
    {
      nombre: "TicTacToe",
      url: "/tic-tac-toe",
      logo: "lni lni-close"
    },
    {
      nombre: "ToDo List",
      url: "/todo",
      logo: "lni lni-list"
    },
    {
      nombre: "prueba",
      url: "/presidente-prueba",
      logo: "lni lni-game"
    }
  ]


  const [sideBar, setsideBar] = useState(true);

  const onExpand = () => {
    setsideBar(!sideBar);
  };

  return (
    <div className="wrapper">
      <aside id="sidebar" className={sideBar ? "expand" : ""}>
        <div className="items">

            {/* title menu */}
          <div className="d-flex col justify-content-evenly">
            <div className="sidebar-logo">
              <a href="/">GamesApp</a>
            </div>

            <button id="#toggle-btn" className="toggle-btn" type="button" onClick={onExpand}>
              <i className="lni lni-grid-alt"></i>
            </button>

          </div>
        <hr style={{color: "white"}}/>

            {/* links */}
          <ul className="sidebar-nav">
            {sideBarItems.map((item) => (
                <SideBarItem key={item.nombre} nombre={item.nombre} url={item.url} logo={item.logo}/>
              ))
            }
          </ul>
        </div>

        {/* user links (footer) */}

        <div className="sidebar-footer">
          <ul className="sidebar-nav">
                <>
                  <SideBarItem nombre="Settings" url="/config" logo="lni lni-cog"/>
                  <SideBarItem nombre="Logout" url="/logout" logo="lni lni-exit"/>
                </>

          </ul>
        </div>
      </aside>
    </div>
  );
};

export default SideBar;
