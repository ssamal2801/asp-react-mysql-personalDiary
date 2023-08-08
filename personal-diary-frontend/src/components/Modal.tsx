import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import PropTypes from 'prop-types';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

interface ModalContent {
  title: string;
  content: string;
  open: boolean;
}

interface BasicModalProps {
  modalContent: ModalContent;
  onClose: () => void;
  onSave: () => void;
}

/**
 * BasicModal component to display the modal
 * @param {object} modalContent
 * @param {function} onClose
 * @param {function} onSave
 * @returns {JSX.Element} BasicModal component
 */
export default function BasicModal({
    modalContent = {
        title: '',
        content: '',
        open: false,
    },
    onClose = () => null,
    onSave = () => null,
}: BasicModalProps) {
    return (
        <Modal
            open={modalContent.open}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {modalContent.title}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    {modalContent.content}
                </Typography>
                <Button onClick={onSave}>Save Changes</Button>
            </Box>
        </Modal>
    );
}

BasicModal.propTypes = {
    modalContent: PropTypes.object,
    onClose: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
};
