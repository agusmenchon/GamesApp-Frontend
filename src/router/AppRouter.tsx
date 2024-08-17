import { Outlet } from "react-router-dom";

import SideBar from "../layout/components/SideBar";
// import { useLayoutStore } from "../hooks/useLayoutStore";
// import LoginModal from "../layout/components/LoginModal";

const AppRouter = () => {
  // const { isDateModalOpen, openDateModal } = useLayoutStore();

  // const onOpenModal = () => {
  //   openDateModal();
  // };

  return (
    <>
      <div className="d-flex">
        <SideBar />

        {/* container */}
        <div className="main p-3">
            <Outlet />
        </div>
      </div>

      {/* {
        isDateModalOpen
        ? <LoginModal />
        :
        <div className="position-absolute top-0 end-0 text-center m-3">
          <button
            onClick={onOpenModal}
            className="btn btn-primary btn-lg position-relative"
            >
            Login
          </button>
        </div>
      } */}
    </>
  );
};

export default AppRouter;
