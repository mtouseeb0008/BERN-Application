import React, { useState } from 'react';
import Navigation from './Navigation';

const DeleteTask = ({ state }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const closeModal = () => {
    setModalVisible(false);
    setModalContent('');
  };

  const { contract, account } = state; 

  const deleteTask = async (event) => {
    event.preventDefault();
    const taskID = document.querySelector('#taskID').value;

    try {
      const res = await fetch(`http://localhost:3000/api/ethereum/delete-task/ ${taskID}`, {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({ taskID: taskID }),
      });

      const data = await res.json();
      console.log('Response data:', data);
      if (data.status === 200) {
        await contract.methods.deleteTask(taskID).send({ from: account });
        setModalContent(`Task ID ${taskID} has been deleted.`);
        setModalVisible(true);
      } else {
        throw new Error('Task could not be deleted.');
      }
    } catch (error) {
      setModalContent('Task could not be deleted.');
      setModalVisible(true);
    }
  };

  return (
    <>
      <Navigation />
      <div className="delete_task todo_btn">
        <form onSubmit={deleteTask}>
          <label>
            ID:
            <input id="taskID" />
          </label>
          <button type="submit">Delete Task</button>
        </form>

        {modalVisible && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeModal}>
                &times;
              </span>
              <p>{modalContent}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default DeleteTask;
