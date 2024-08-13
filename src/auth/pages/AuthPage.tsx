import { useEffect, useState } from 'react'
import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage';
import { useAuthStore } from '../../hooks/useAuthStore';
import { useNavigate } from 'react-router-dom';

const AuthPage = () => {

  const [registerPage, setRegisterPage] = useState(false);
  const navigate = useNavigate();
  const {status} = useAuthStore();

  useEffect(() => {
    if(status === 'authenticated'){
      navigate('/presidente/lobby');
      return;
    }
  }, [navigate, status])  

  // 400 x 531;
  const changeForm = () => {
    setRegisterPage(!registerPage);
  }

  return (
    <>
    <div className='d-flex column justify-content-center align-items-center'>
      {
        registerPage
        ? <RegisterPage changeForm={changeForm}/>
        : <LoginPage changeForm={changeForm}/>
      }
    </div>
    </>
      
    
  )
}

export default AuthPage