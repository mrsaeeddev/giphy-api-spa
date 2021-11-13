import { ImageInterface } from "../Thumbnails/Thumbnails.interface";

export interface LargeModalProps {
    lgShow: boolean;
    setLgShow(lgShow: boolean): void;
    images: ImageInterface;
}