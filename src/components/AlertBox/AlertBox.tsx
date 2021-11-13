import { Alert } from "react-bootstrap";
import { AlertBoxProps } from "./AlertBox.interface";

function AlertBox(props: AlertBoxProps) {
    return (
        <Alert variant={props.variant}>
            {props.text ? props.text : "Unexpected error"}
        </Alert>
    )
}

export default AlertBox;