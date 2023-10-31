import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { closeDialog } from "../features/dialogsReducer";

function DialogDefault({ title, handle, children, dialogId, className }) {
    const { isOpen } = useSelector((store) => store.dialogs[dialogId] || false)
    const dispatch = useDispatch()

    return (
        <Dialog open={isOpen || false} handler={() => dispatch(closeDialog(dialogId))} className={className}>
            <DialogHeader>{title}</DialogHeader>
            <DialogBody divider>
                {children}
            </DialogBody>
            <DialogFooter>
                <Button
                    variant="outlined"
                    color="red"
                    onClick={() => dispatch(closeDialog(dialogId))}
                    className="mr-1"
                >
                    Cancel
                </Button>
                <Button variant="outlined" color="green" onClick={() => handle()}>
                    Confirm
                </Button>
            </DialogFooter>
        </Dialog>
    );
}

export default DialogDefault