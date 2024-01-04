import { ITask } from "@/types/task";
import { FileEdit, Trash2 } from "lucide-react";
import React, { FormEvent, FormEventHandler, useState } from "react";
import { FaEdit } from "react-icons/fa";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { deleteTodo, editTodo } from "@/apis";

interface TaskProps {
  task: ITask;
}
const Task: React.FC<TaskProps> = ({ task }) => {
  const router = useRouter();
  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
  const [openModalDeletet, setOpenModalEditDelete] = useState<boolean>(false);
  const [editText, setEditText] = useState<string>(task.text);

  const handleEditTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await editTodo({
      id: task.id,
      text: editText,
    });
    setOpenModalEdit(false);
    router.refresh();
  };

  const handleDeleteTask = async (id: string) => {
    await deleteTodo(id);
    setOpenModalEditDelete(false);
    router.refresh();
  };

  return (
    <tr key={task.id}>
      <td className="w-full">{task.text}</td>
      <td className="flex gap-5">
        <FaEdit
          cursor="pointer"
          className="text-blue-500"
          size={25}
          onClick={() => {
            setOpenModalEdit(true);
          }}
        />
        <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
          <form onSubmit={handleEditTodo}>
            <h3 className="font-bold text-xl">Edit Task</h3>
            <div className="modal-action">
              <input
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                type="text"
                placeholder="Type here"
                className="input input-bordered input-primary w-full max-w-full"
              />
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </Modal>
        <Trash2
          cursor="pointer"
          size={25}
          className="text-red-600"
          onClick={() => {
            setOpenModalEditDelete(true);
          }}
        />
        <Modal
          modalOpen={openModalDeletet}
          setModalOpen={setOpenModalEditDelete}
        >
          <h3 className="text-xl">Are you sure you want to delete</h3>
          <div className="modal-action">
            <button
              className="btn btn-square"
              onClick={() => {
                handleDeleteTask(task.id);
              }}
            >
              Yes
            </button>
          </div>
        </Modal>
      </td>
    </tr>
  );
};

export default Task;
