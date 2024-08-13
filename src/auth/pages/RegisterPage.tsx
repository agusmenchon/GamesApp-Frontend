import { useForm } from "react-hook-form"
import { useAuthStore } from "../../hooks/useAuthStore"

export interface registerDTO{
  username: string,
  email: string,
  password: string
}

const RegisterPage = ({changeForm}:any) => {

  const {startRegister, errorMessage} = useAuthStore()

  const { handleSubmit, register } = useForm<registerDTO>();

  const onChangeForm = () =>{
    changeForm()
  }

  const onRegisterSubmit = handleSubmit((values) => {
    startRegister(values);
  });
  
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
       <form
        action=""
        className="bg-white p-5 rounded-5 text-secondary shadow-lg"
        style={{ width: "25rem", height:"33rem" }}
        onSubmit={onRegisterSubmit}
      >
        <div className="d-flex justify-content-center">
          <h4 className="fs-2 fw-bold">Register</h4>
        </div>

        {/* Username input */}
        <div className="mt-3 input-group">
          <div className="input-group-text bg-info">
            <img
              src="../assets/username.png"
              alt=""
              style={{ height: "1rem" }} />
          </div>
          <input
            type="text"
            placeholder="Username"
            className="form-control bg-light" 
            {...register("username", { required: true })}
            />
            
        </div>

        {/* email input */}
        <div className="mt-2 input-group">
          <div className="input-group-text bg-info">
            <img
              src="../assets/username.png"
              alt=""
              style={{ height: "1rem" }} />
          </div>
          <input
            type="text"
            placeholder="Email"
            className="form-control bg-light" 
            {...register("email", { required: true })}
            />
        </div>

        {/* Password input */}
        <div className="mt-2 input-group">
          <div className="input-group-text bg-info" /*style={{backgroundColor: "#0e2238"} */>
            <img src="../assets/pw.png" alt="" style={{ height: "1rem" }} />
          </div>
          <input
            type="password"
            placeholder="Password"
            className="form-control bg-light" 
            {...register("password", { required: true })}
            />
        </div>
        {/* Button onClick Login */}
        <div>
          <button className="btn btn-info text-white w-100 mt-2 fw-semibold shadow-sm">
            Login
          </button>
        </div>
        <hr />

         {/* Register anchor tag (Navigate) */}
         <div className="d-flex">
          <div className="d-flex gap-1 justify-content-center mt-1">
            <span>Do you have an account?</span>
            <a
              className="text-decoration-none text-info fw-semibold fst-italic"
              onClick={onChangeForm}
              style={{cursor:"pointer"}}
            >
              Login
            </a>
          </div>

          {
          errorMessage
          ? <h1>{errorMessage}</h1>
          : ''
          }
        </div>
      </form>
    </div>
  )
}

export default RegisterPage
