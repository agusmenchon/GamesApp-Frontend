import Modal from "react-modal";
import { useLayoutStore } from "../../hooks/useLayoutStore";


const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      overflow: 'none',
      border: 'none',
      background: 0,
      // inset: "60% 75% 66% 59%"
    },
  };

// Modal.setAppElement("#root");

const LoginModal = () => {

    const { isDateModalOpen, closeDateModal } = useLayoutStore();

    const onCloseModal = () => {
        closeDateModal();
    }

  return (
    <Modal
        isOpen={isDateModalOpen}
        onRequestClose={onCloseModal}
        style={customStyles}
        contentLabel="Example Modal"
        closeTimeoutMS={200}
        className="modal"
    >
        <div className="d-flex justify-content-center align-items-center">
        <form
          action=""
          className="bg-white p-5 rounded-5 text-secondary shadow-lg"
          style={{ width: "30rem" }}
          >
          {/* h1 & Title */}
          <div className="d-flex justify-content-center">
            <h4 className="fs-2 fw-bold">Login</h4>
          </div>

          {/* Username input */}
          <div className="mt-3 input-group">
            <div className="input-group-text bg-info">
              <img
                src="src\assets\username.png"
                alt=""
                style={{ height: "1rem" }}
                />
            </div>
            <input
              type="text"
              placeholder="Username"
              className="form-control bg-light"
              />
          </div>

          {/* Password input */}
          <div className="mt-2 input-group">
            <div className="input-group-text bg-info" /*style={{backgroundColor: "#0e2238"} */>
              <img src="src\assets\pw.png" alt="" style={{ height: "1rem" }} />
            </div>
            <input
              type="password"
              placeholder="Password"
              className="form-control bg-light"
              />
          </div>

          {/* CheckBOX remember me */}
          <div className="mt-2">
            <div className="d-flex justify-content-start">
              <a
                href="#"
                className="text-decoration-none text-info fw-semibold fst-italic"
                style={{ fontSize: "0.9rem" }}
                >
                Forgot your password?
              </a>
            </div>

            <div className="d-flex gap-1 justify-content-start align-items-center">
              <input className="form-check-input" type="checkbox" />
              <span className="pt-1" style={{ fontSize: "1rem" }}>
                Remember me
              </span>
            </div>
          </div>

          {/* Button onClick Login */}
          <div>
            <button className="btn btn-info text-white w-100 mt-2 fw-semibold shadow-sm">
              Login
            </button>
          </div>

          {/* Register anchor tag (Navigate) */}
          <div className="d-flex">
            <div className="d-flex gap-1 justify-content-center mt-1">
              <span>Don't have an account?</span>
              <a
                className="text-decoration-none text-info fw-semibold fst-italic"
                href=""
                >
                Register
              </a>
            </div>
          </div>

          <div className="p-3">
            <div
              className="border-bottom text-center"
              style={{ height: "0.9rem" }}
              >
              <span className="bg-white px-3">or</span>
            </div>
          </div>

          {/* Facebook */}
          <div className="btn d-flex gap-2 justify-content-center border mt-3 shadow-sm">
            <img
              src="src\assets\facebook.png"
              alt="google"
              style={{ height: "1.6rem" }}
              />
            <div className="fw-semibold text-secondary">
              Login with Facebook
            </div>
          </div>

          {/* Google */}
          <div className="btn d-flex gap-2 justify-content-center border mt-3 shadow-sm">
            <img
              src="src\assets\google.png"
              alt="google"
              style={{ height: "1.6rem" }}
              />
            <div className="fw-semibold text-secondary">Login with Google</div>
          </div>
        </form>
        <button onClick={onCloseModal} className="btn position-absolute top-0 end-0 text-center me-5 mt-4 fs-4 fw-bold">X</button>
      </div>
    </Modal>
  )
}

export default LoginModal
