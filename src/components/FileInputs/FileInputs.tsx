import { access } from "fs/promises";
import React, { useCallback, useEffect, useState } from "react";
import { Accept, useDropzone } from "react-dropzone";
import { useFormContext } from "react-hook-form";
import IconContainer from "../IconContainer/IconContainer";

interface testReactHookFormProps {
  name: string;
  label: string;
  open: boolean;
}

const FileInputs = ({ name, label, open }: testReactHookFormProps) => {
  const [allFiles, setAllFiles] = useState<File[]>([]);
  const { register, unregister, setValue, watch, formState, reset } = useFormContext();
  const files = watch("uploadFile");
  const errors = formState.errors;
  // console.log(files);
  // console.log(allFiles);
  // console.log(errors);
  const onDrop = useCallback(
    (droppedFiles: File[]) => {
      Array.from(droppedFiles).map((file: File) => {
        setAllFiles(pervState => [...pervState, file]);
      });
    },
    []
  );

  const doubleFile = (file: File, allFiles: File[]) => {
    console.log(allFiles);
    const isDouble = allFiles.some((item) => {
      return item.name === file.name;
    });
    return isDouble;
  };

  const validatorFile = (file: File) => {
    if (file.name.length > 28) {
      return {
        code: "nameSize",
        message: `${file.name} - имя файла не может превышать ${28} символов`
      };
    } else if (file.size > 2000000) {
      return {
        code: "weigthSize",
        message: `${file.name} - размер файла превышает 2mb`
      };
    } else if (doubleFile(file, allFiles)) {
      return {
        code: "thisFile",
        message: `${file.name} - файл уже загружен`
      };
    }
    return null;
  };

  const { getRootProps, getInputProps, isDragActive, fileRejections, inputRef, acceptedFiles } = useDropzone({
    onDrop,
    validator: validatorFile, 
    accept: {
      "application/pdf": [],
      "application/msword": [],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [],
      "application/vnd.ms-excel": [],
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [],
      "application/vnd.openxmlformats-officedocument.presentationml.presentation": []
    }
  });


  const fileRejectionItems = fileRejections.map(({ file, errors }) => {
    return <span key={file.name} className="modal__input-limit_error">{errors[0].message}</span>;
  });


  useEffect(() => {
    setValue(name, allFiles, { shouldValidate: true });
  }, [allFiles]);

  useEffect(() => {
    console.log(open);
    console.log("files from watch", files);
    console.log("allFiles from useState", allFiles);
    setAllFiles([]);
    acceptedFiles;
    reset();
  }, [open]);

  useEffect(() => {
    register(name);
    return () => {
      unregister(name);
    };
  }, [register, unregister]);

  const deleteFile = (e: React.MouseEvent<HTMLElement>, file: File[]) => {
    e.preventDefault();
    const newFiles = [...files];
    newFiles.splice(newFiles.indexOf(file), 1);
    if (newFiles.length > 0) {
      setAllFiles(newFiles);
    } else {
      setAllFiles([]);
      setValue(name, []);
    }
  };



  return (
    <>
      <div>
        {files?.length ?
          files.map((item: any, key: number) => {
            return (
              <div className="modal__input modal__input_delete-files" key={key} onClick={(e) => { deleteFile(e, item); }}>
                <IconContainer icon={"mdi:garbage-can-outline"} color="#e31683" sizeWidth={"15"} sizeHeight={"15"} />
                {item.name}
              </div>
            );
          })
          : ""}
      </div>

      <div className="modal__formItem">
        <label className="modal__input modal__input_add-files" htmlFor="formId">
          <IconContainer icon={"material-symbols:add"} sizeWidth={"15"} sizeHeight={"15"} />
          <div
            {...getRootProps()}
          >
            <input
              {...getInputProps()}
              key={files}
              type="file"
              id="formId"
            />
          </div>
          Добавить файл
        </label>

        {fileRejectionItems}
      </div>
    </>
  );
};

export default FileInputs;