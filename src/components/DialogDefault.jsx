import PropTypes from "prop-types";
import { Button, Dialog, DialogHeader, DialogBody, DialogFooter } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { closeDialog , selectIsOpen} from "@features/dialogsReducer";
import { useCallback } from "react";

function DialogDefault(props) {
    const { title, handle, children: { body, footer }, dialogId = null, className } = props;
    const isOpen = useSelector((store) => selectIsOpen(store.dialogs[dialogId]));
    const dispatch = useDispatch();

    const handleClose = useCallback(() => {
        dispatch(closeDialog(dialogId));
    }, [dispatch, dialogId]);

    return (
        <Dialog open={isOpen} handler={handleClose} className={`dark:[&>_*]:bg-dark dark:[&>_*]:text-white ${className}`}>
            <DialogHeader className="dark:text-white text-xl">{title}</DialogHeader>
            <DialogBody divider>
                {body}
            </DialogBody>
            <DialogFooter>
                {footer || (
                    <>
                        <Button variant="outlined" color="red" onClick={handleClose} className="mr-1">
                            Cancel
                        </Button>
                        <Button variant="outlined" color="green" onClick={handle}>
                            Confirm
                        </Button>
                    </>
                )}
            </DialogFooter>
        </Dialog>
    );
}

DialogDefault.propTypes = {
    title: PropTypes.string.isRequired,
    handle: PropTypes.func,
    children: PropTypes.shape({
        body: PropTypes.node.isRequired,
        footer: PropTypes.node
    }).isRequired,
    dialogId: PropTypes.string.isRequired,
    className: PropTypes.string
};

export default DialogDefault;
