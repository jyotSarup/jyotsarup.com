import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

function Experience(props) {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div className="experience">
            <h2
                style={{
                    paddingBottom: "0",
                    marginBottom: "0",
                    color: "#07072b",
                }}
            >
                {props.experience.company}
            </h2>
            <h4 style={{ marginTop: "-8px" }}>{props.experience.place}</h4>
            <h3 style={{ marginBottom: "-8px" }}>
                {props.experience.position}
            </h3>
            <h3 style={{ margin: "-8px" }}>{props.experience.timeServed}</h3>
            <h4 style={{ margin: "0" }}>{props.experience.dates}</h4>
            <button onClick={handleClickOpen}>Learn More..</button>

            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle
                    style={{ color: "#050642", paddingBottom: "0" }}
                    id="responsive-dialog-title"
                >
                    {props.experience.company} - {props.experience.position}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText style={{ color: "black" }}>
                        {props.experience.workDone.map((work, index) => (
                            <p key={`work${index}`}>{work}</p>
                        ))}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <button autoFocus onClick={handleClose}>
                        Close
                    </button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default Experience;
