import { Outlet } from 'react-router-dom'
// import { useAuthStore } from '../../hooks/useAuthStore';

const LoginRouter = () => {

  // const {status} = useAuthStore();

  // if(status === 'authenticated'){
  //   return <Navigate to="/"/>;
  // }

  
  return (
    <>
      <Outlet/>
    </>
  )
}

export default LoginRouter