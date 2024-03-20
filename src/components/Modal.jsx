import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  borderRadius: "20px",
  boxShadow: 24,
  p: 4,
};
const buttonStyle = {
  color: "black",
  fontFamily: "Poppins",
  fontSize: "1.3rem",
  backdropFilter: "blur(5px)",
  marginTop: "5%",
  // marginLeft:'30%'
  display: "inline-block",
};
const descStyle = {
  fontFamily: "Poppins",
  fontSize: "1.1rem",
  textAlign: "justify",
};
const titleStyle = {
  fontFamily: "Poppins",
  fontSize: "2rem",
  textAlign: "center",
};

export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <Button onClick={handleOpen} sx={buttonStyle}>
          Read More
        </Button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            sx={titleStyle}
            variant="h6"
            component="h2"
          >
            {props.title}
          </Typography>
          <Typography id="modal-modal-description" sx={descStyle}>
            {props.description}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
