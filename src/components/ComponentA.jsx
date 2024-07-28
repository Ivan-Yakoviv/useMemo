import { useToggle } from "../hooks/useToggle.js";
import Modal from "./Modal.jsx";

const ComponentA = () => {
  const { isOpen, open, close } = useToggle();

  return (
    <>
      <button onClick={open}>Open modal</button>
      <Modal isOpen={isOpen} onClose={close} />
    </>
  );
};

export default ComponentA;