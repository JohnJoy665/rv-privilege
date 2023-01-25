import React, { useCallback, useEffect, useState } from "react";
import { Accept, DropEvent, useDropzone } from "react-dropzone";
import { useFormContext } from "react-hook-form";
import { Icon } from "@iconify/react";
import CropImage from "../CropImage/CropImage";
import Portal from "../Portal/Portal";

interface imageInputProps {
  name: string;
}

const ImageInput = ({ name }: imageInputProps) => {
  const [files, setFiles] = useState<any[]>([]);
  const [isFinalFile, setIsFinalFile] = useState(false);
  const [imgForCrop, setImgForCrop] = useState("");
  const { register, unregister, setValue, watch, formState, reset, clearErrors } = useFormContext();

  // console.log(formState.errors);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(acceptedFiles.map(file => Object.assign(file, {
      preview: URL.createObjectURL(file)
    })));
  }, []);


  const validatorFile = (file: File) => {
    console.log("Валидация Drop");
    if (file.size > 2000000) {
      return {
        code: "weigthSize",
        message: `${file.name} - размер файла превышает 2MB`
      };
    }
    return null;
  };

  const { getRootProps, getInputProps, open, acceptedFiles, fileRejections } = useDropzone({
    multiple: false,
    maxFiles: 1,
    accept: { "image/*": [] },
    onDrop,
    validator: validatorFile,
  });

  const fileRejectionItems = fileRejections.map(({ file, errors }) => {
    return <span key={file.name} className="modal__input-limit_error">{errors[0].message}</span>;
    // return errors[0].message;
  });

  console.log(fileRejectionItems);

  const removeFile = (file: File) => () => {
    const newFiles = [...files];
    newFiles.splice(newFiles.indexOf(file), 1);
    setFiles(newFiles);
  };

  const thumbs = files.map(file => (
    <div key={file.name}>
      <div>
        <img
          // onClick={open}
          onClick={removeFile(file)}
          className="modal__img-final"
          src={file.preview}
          // Revoke data uri after image is loaded
          onLoad={
            () => {
              console.log("third");
              URL.revokeObjectURL(file.preview);
            }
          }
        />
      </div>
      {/* <button onClick={removeFile(file)}>Remove File</button> */}
    </div>
  ));


  

  useEffect(() => {
    clearErrors(name);
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    console.log("first");
    setFiles([]);
    acceptedFiles;
    return () => files.forEach(file => URL.revokeObjectURL(file.preview));
  }, []);

  useEffect(() => {
    files.map((file) => {
      setImgForCrop(file.preview);
    });
    setValue(name, files, { shouldValidate: false });
  }, [files]);

  useEffect(() => {
    register(
      name,
      {
        required: { value: true, message: "Обязательное поле" }
      }
    );
    return () => {
      unregister(name);
    };
  }, [register, unregister]);


  return (
    <>
      <section className="modal__img-item">
        {files.length > 0 
          ? isFinalFile ? thumbs : <Portal><CropImage imgForCrop={imgForCrop || ""}/></Portal>
          : <div {...getRootProps()} onClick={(e) => e.stopPropagation}>
            <input {...getInputProps()} />
            <div className="modal__img-item-container" onClick={open}>
              <Icon icon="mingcute:pic-line" width="34" className="icon_picture" />
            </div>
          </div>
        }

        {/* <div {...getRootProps()} onClick={(e) => e.stopPropagation}>
        <input {...getInputProps()} />
        <div className="modal__img-item-container" onClick={open}>
          Нажми ка
        </div>
      </div>
      <aside>{thumbs}</aside> */}
      </section>
      {fileRejectionItems}
    </>
  );
};

export default ImageInput;

{/* {files.length>0 && <CropImage srcTarget={files}/>} */ }