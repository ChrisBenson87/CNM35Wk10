import { fetchImages } from "../utils";
import { useEffect, useState } from "react";

export const ImageStorage = () => {

const [images, setImages] = useState([]);

useEffect(() => {
    fetchImages(setImages)
}, [])

    return (
        <div className = "images">
            {images.map((item) => {
                return <img src = {item.download_url} alt = "random instagram stuff" />
            })}
        </div>
    );
};