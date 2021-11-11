import { Row, Col, Image } from "react-bootstrap";
import './thumbnails.css';

function Thumbnails(props: any) {
    return (
        <Row>
            {props.data.map((ele: any, ind: any) => {
                return (
                    <Col className="gif-wrap">
                        <img src={ele.images.fixed_height.url} alt="" />
                    </Col>
                )
            })}
        </Row>
    )
}

export default Thumbnails;