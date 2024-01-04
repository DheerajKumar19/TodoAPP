"use client";

import { Plus } from "lucide-react";
import Modal from "./Modal";
import { FormEventHandler, useState } from "react";
import { addTodo } from "@/apis";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

const AddTask = () => {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newTextValue, setNewtextValue] = useState<string>("");
  

  const handleAddTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await addTodo({
      id: uuidv4(),
      text: newTextValue,
    });
    setNewtextValue("");
    setModalOpen(false);
    router.refresh();
  };

  return (
    <div className="">
      <button
        className="btn btn-primary w-full"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Add Task
        <Plus className="ml-2" size={18} />
      </button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleAddTodo}>
          <h3 className="font-bold text-xl">Add new Task</h3>
          <div className="modal-action">
            <input
              value={newTextValue}
              onChange={(e) => setNewtextValue(e.target.value)}
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
    </div>
  );
};

export default AddTask;
