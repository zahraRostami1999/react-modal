import React from 'react';
import { useState } from 'react';
import { Modal } from './components/modal/Modal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div className="p-4">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Click HERE
        </button>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <h2 className="text-xl font-semibold mb-4">Hello!</h2>
        </Modal>
      </div>
    </>
  )
}

export default App
