import { Navigate } from "react-router-dom";
import { useAuthStore } from "../../hooks/useAuthStore";

const PrincipalPage = () => {

  const {status} = useAuthStore();

  if(status === 'not-authenticated'){
    return <Navigate to="/auth/login"/>;
  }


  return (
    <div className="d-flex">
      <h1>HOLA!!</h1>
    </div>
  );
};

export default PrincipalPage;
