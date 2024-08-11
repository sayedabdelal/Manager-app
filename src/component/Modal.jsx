import { createPortal } from "react-dom"
import Button from "./Button";
import { forwardRef, useImperativeHandle, useRef } from "react";


const Modal = forwardRef( function Modal({children, btnCaption}, ref) {

    const dialog = useRef();

    useImperativeHandle(ref, ()=> {
        return {
            open() {
                dialog.current.showModal();
            }
        }
    })
    return createPortal (  
         <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
            {children}
            <form method="dialog" className="mt-4 text-right">
                <Button>{btnCaption}</Button>
            </form>
            </dialog>, 
            document.getElementById("modal-root")
        );
}
)

export default Modal;

