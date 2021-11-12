import { Alert } from "react-bootstrap";

function AlertBox(props: any) {
    return (
        <Alert variant={props.variant}>
            {props.text}
        </Alert>
    )
}

export default AlertBox;