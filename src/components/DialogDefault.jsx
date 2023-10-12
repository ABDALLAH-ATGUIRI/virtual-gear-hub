
// const Dialog = ({ show, close, title, form, setForm, handle }) => {
//     const { categories } = useProductContext();


//     const uploadImage = (e) => {
//         e.preventDefault();
//         const acceptedImgFiles = ['png', 'jpg', 'jpeg', 'webp']
//         if (e.target.files && e.target.files.length) {
//             const file = e.target.files[0]
//             if (acceptedImgFiles.includes(file.name.split('.').pop())) {
//                 setForm({ ...form, image: file })
//             } else {
//                 e.target.files = null
//             }

//         }

//     }

// }


import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { closeModel } from "../features/modelSlice";

function DialogDefault({ title, children }) {
    const dispatch = useDispatch()
    const { isOpen } = useSelector((store) => store.model)

    return (
        <>
            <Dialog open={isOpen} handler={() => dispatch(closeModel())} className="w-1/2 min-w-[500px]">
                <DialogHeader>{title}</DialogHeader>
                <DialogBody divider>
                    {children}
                </DialogBody>
                <DialogFooter>
                    <Button
                        variant="text"
                        color="red"
                        onClick={() => dispatch(closeModel())}
                        className="mr-1"
                    >
                        <span>Cancel</span>
                    </Button>
                    <Button variant="gradient" color="green" onClick={() => dispatch(closeModel())}>
                        <span>Confirm</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    );
}

export default DialogDefault