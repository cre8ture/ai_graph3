import { useState } from "react";

export default function Modal({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <button onClick={openModal}>Open Modal</button>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-50" onClick={closeModal} />
          <div className="bg-white p-8 rounded shadow">{children}</div>
        </div>
      )}
    </>
  );
}


// CALL MODAL
// import Modal from "./Modal";

// export default function Home() {
//   return (
//     <main>
//       <Modal>
//         <h1>Modal Title</h1>
//         <p>Modal content...</p>
//       </Modal>
//     </main>
//   );
// }
