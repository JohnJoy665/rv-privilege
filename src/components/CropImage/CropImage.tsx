import React, { useState, createRef, useRef, useEffect } from "react";
import ReactCrop, {
  centerCrop,
  makeAspectCrop,
  Crop,
  PixelCrop,
} from "react-image-crop";
import { canvasPreview } from "./canvasPreview";
import { useDebounceEffect } from "../CropImage/useDebounceEffect";
import "react-image-crop/dist/ReactCrop.css";

interface CropImageProps {
  imgForCrop: string;
}

const CropImage = ({ imgForCrop }: CropImageProps) => {
  const refComponent = React.createRef<HTMLDivElement>();
  const [crop, setCrop] = useState<Crop>();
  const [imgWidth, setImgWidth] = useState<number>();
  const [imgHeight, setImgHeight] = useState<number | null>();

  useEffect(() => {
    const node = refComponent.current;
    const height = node && refComponent.current.getBoundingClientRect().height;
    setImgHeight(height);
  }, [refComponent]);

  function onImageLoad(e: any) {
    const { naturalWidth: width, naturalHeight: height } = e.currentTarget;
    console.log(width);
    console.log(height);
    // setImgWidth(width);
    const crop = centerCrop(
      makeAspectCrop(
        {
          // You don't need to pass a complete crop into
          // makeAspectCrop or centerCrop.
          unit: "px",
          height: 312,
        },
        4 / 3,
        width,
        height
      ),
      width,
      height,
    );

    setCrop(crop);
  }

  const handleOnCropCompleated = (crop: any, pixelCrop: any) => {
    console.log(crop, pixelCrop);
  };

  return (
    <div className="crop-image" ref={refComponent} >
      <ReactCrop keepSelection={true} crop={crop} aspect={4 / 3} onChange={c => setCrop(c)} onComplete={handleOnCropCompleated}>
        <img style={{ maxHeight: `${imgHeight}px` }} onLoad={(e) => onImageLoad(e)} src={imgForCrop} alt="" />
      </ReactCrop>
      <p>А вот тут текст и что</p>
    </div>
  );
};

export default CropImage;