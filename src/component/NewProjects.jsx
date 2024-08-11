import Input from "./Input"
import { useRef } from "react"

import Modal from "./Modal";



export default function NewProjects({onAdd, onCancel}) {
    const modal = useRef();
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSaveData() {
        const enteredTitle = title.current.value;
        const enteredDescrpt = description.current.value;
        const enteredDueDate = dueDate.current.value;

        if(enteredTitle.trim() === "" || enteredDescrpt.trim() === "" ||enteredDueDate.trim() === "") {
            modal.current.open();
            return
        } 

        onAdd ({
            title: enteredTitle,
            description: enteredDescrpt,
            dueDate: enteredDueDate 
        });
    }

    return (
        <>
            <Modal ref={modal} btnCaption="Okay">
                <h2  className="text-xl font-bold text-stone-700 my-4">Invaild Input</h2>
                <p className="text-stone-700 mb-4">Opps looks like you forgot to enter a value</p>
                <p className="text-stone-700 mb-4">Please Make Sure you enter a vaild value for every input field</p>
            </Modal>
            <div className="w-[35rem] mt-16">
                <menu className="flex items-center justify-end gap-4 my-4">
                    <li><button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>Cancel</button></li>
                    <li><button  onClick={handleSaveData} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button></li>
                </menu>
                <div>
                    <Input type="text" ref={title} label="Title" />
                    <Input ref={description} label="Description" textarea/>
                    <Input  type="date" ref={dueDate} label="Due Date" />
                    
                </div>
            </div>
         </>
    )
}