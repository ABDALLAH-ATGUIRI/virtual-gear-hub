import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { closeModel } from "../features/modelSlice";

function DialogDefault({ title, handle, children }) {
    const dispatch = useDispatch()
    const { isOpen } = useSelector((store) => store.model)

    return (
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
                <Button variant="gradient" color="green" onClick={() => handle()}>
                    <span>Confirm</span>
                </Button>
            </DialogFooter>
        </Dialog>
    );
}

export default DialogDefault