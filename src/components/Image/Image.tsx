import "./image.css"

function Image(props: any) {
    return (
        <div className="gif-wrap">
            <img src={props.src} onClick={props.onClick} alt="GIPHY GIFs" />
        </div>)
}

export default Image;