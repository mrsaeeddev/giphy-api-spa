import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Image from "../Image/Image";
import LargeModal from "../Modal/Modal";

function Thumbnails(props: any) {
    const [lgShow, setLgShow] = useState(false);
    const [images, setImages] = useState({});

    const activateModal = (images: any) => {
        setImages(images);
        setLgShow(true);
    }

    return (
        <Row>
            <LargeModal images={images} lgShow={lgShow} setLgShow={setLgShow} />
            {props.data.map((ele: any, ind: any) => {
                return (
                    <>
                        <Col key={ind}>
                            <Image onClick={() => activateModal(ele.images)} src={ele.images.fixed_height.url} alt="" />
                        </Col>
                    </>
                )
            })}
        </Row>
    )
}

export default Thumbnails;