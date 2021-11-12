import { Alert } from "react-bootstrap";

function AlertBox(props: any) {
    return (
        <Alert variant={props.variant}>
            {props.text ? props.text : "Unexpected error"}
        </Alert>
    )
}

export default AlertBox;