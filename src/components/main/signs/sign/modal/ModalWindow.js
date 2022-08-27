import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

const ModalWindow = ({ item }) => {

    const { name, desc, additional } = item;

    const { flex, modal } = useTheme();

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Button variant="outlined" onClick={handleOpen}>Подробнее...</Button>
            <Modal
                aria-labelledby="Описание дорожного знака"
                aria-describedby="Подробное дорожного знака и его особенностей."
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={{ ...flex, ...modal }} >
                        <Typography id="transition-modal-title" variant="h5" component="h2">
                            {name}
                        </Typography>
                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                            {desc}
                        </Typography>
                        <Typography id="transition-modal-additional" sx={{ mt: 2 }}>
                            {additional}
                        </Typography>
                        <Button variant="outlined" onClick={handleClose}>Закрыть</Button>
                    </Box>
                </Fade>
            </Modal>
        </>
    )
}

export default ModalWindow;