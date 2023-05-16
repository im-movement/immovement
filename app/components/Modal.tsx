import { useState, FC, useEffect } from 'react';

interface ModalProps {
  title: string;
  children?: React.ReactNode;
}

export const Modal: FC<ModalProps> = props => {
  const { title, children } = props;
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(!showModal)}>{title}</button>
      {/* {showModal && ( */}
      <dialog open={showModal}>
        <button aria-label="Close" onClick={() => setShowModal(!setShowModal)}>
          X
        </button>
        {children}
      </dialog>
      {/* )} */}
    </>
  );
};
