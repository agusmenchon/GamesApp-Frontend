import { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { conexion, usePresidenteStore } from '../../hooks/usePresidenteStore';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../hooks/useAuthStore';


const FormPage = () => {
  const navigate = useNavigate();
  const { roomId, onJoinRoom, isConnected, createRoom } = usePresidenteStore();
  const {status} = useAuthStore();

  useEffect(() => {
    if(status === 'not-authenticated'){
      navigate('/auth/login');
      return;
    }
  }, [])
  
  const { handleSubmit, register } = useForm<conexion>();
  
  const onJoinToRoom = handleSubmit((values) => {
    onJoinRoom(values.roomId);
  });
  
  useEffect(() => {
    if(isConnected){
      navigate(`/presidente/game/${roomId}`);
    }
    
  }, [isConnected, roomId, navigate])
    
  
    const onCreateRoom = () => {
      createRoom();
    };
  
    return (
      <>
        <div className="d-flex flex-column justify-content-center align-items-center vh-100">
          <div>
            <form
              action=""
              className="bg-white p-5 rounded-5 text-secondary shadow-lg"
              style={{ width: "25rem" }}
              onSubmit={onJoinToRoom}
            >
              <div className="text-center">
                <h1 className="fs-1 fw-bold">Presidente</h1>
                <hr />
              </div>
              <div className="d-flex mt-2 flex-column justify-content-center">
                <h4 className="fs-6 fw-bold text-center">
                  Entrar a una sala existente
                </h4>
              </div>
  
              <div className="flex-column">
                <div className="input-group mt-2">
                  <div className="mt-3 input-group ">
                    <input
                      type="text"
                      placeholder="Codigo de sala"
                      className="form-control bg-light text-center"
                      {...register("roomId", { required: true })}
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="btn btn-primary text-white w-100 mt-3 fw-semibold principal-color"
                  >
                    Entrar
                  </button>
                </div>
              </div>
              <hr />
              <div className="d-flex mt-2 flex-column justify-content-center">
                <span className="fs-6 fw-bold text-center">
                  Ingresar a una nueva sala:
                </span>
                <button
                  type="button"
                  className="btn btn-primary text-white mt-3 w-100 fw-semibold principal-color"
                  onClick={onCreateRoom}
                >
                  Crear sala
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
}

export default FormPage