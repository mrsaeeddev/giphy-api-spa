import "./image.css"
import { ImageProps } from "./Image.interface";

function Image(props: ImageProps) {
    return (
        <div className="gif-wrap">
            <img src={props.src} onClick={props.onClick} alt="GIPHY GIFs" loading="lazy" />
        </div>)
}

export default Image;