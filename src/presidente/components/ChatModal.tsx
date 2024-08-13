import "./chat.css";

const ChatModal = ({ active, setActive }) => {
  // const [active, setActive] = useState(true);
  // const [txtButton, setTxtButton] = useState<string>("Abrir chat");

  const onChangeButtonChat = () => {
    setActive(!active);
  };

  return (
    <>
      <div className={active ? "" : "desactivate"}>
        <div className="close-modal-chat d-flex justify-content-end"></div>

        <div className="chat-modal">
          <div className="title-chat text-center d-flex row-column mg-l-2">
            <span className="col-10 fs-3">Sala grupal</span>
            <button
              className="btn btn-primary-danger col-2 fs-4"
              onClick={onChangeButtonChat}
            >
              X
            </button>
            {/* <hr /> */}
          </div>

          <div className="list-msg-chat">
            <div className="body-msg border rounded-pill">
              {/* TODO: hacer componente aparte */}
              <div className="title-msg-chat">
                <h5 className="fs-5">Agustin</h5>
              </div>
              <div className="body-msg-chat">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </div>

              <div className="date-msg-chat">
                <span>8:05 AM</span>
              </div>
            </div>
          </div>

          <div className="input-send-chat d-flex ">
            <input
              type="text"
              className="input-send-msg"
              placeholder="Type here..."
            />
            <button className="btn btn-primary">Send</button>
          </div>

          {/* <div className="clear-msg-chat d-flex justify-content-center mt-2">
            <button className="btn btn-danger">Clear chat</button>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default ChatModal;
