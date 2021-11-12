import "./thumbnails.css"

function Image(props: any) {
    return (
        <div className="gif-wrap">
            <img src={props.src} onClick={props.onClick} />
        </div>)
}

export default Image;