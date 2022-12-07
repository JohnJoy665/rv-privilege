import {
  UseFormWatch,
  UseFormSetValue,
  UseFormReset,
  Control,
  FieldErrorsImpl,
  UseFormGetValues,
  useController
} from "react-hook-form";
import { UserSubmitForm } from "../../interfaces/inputs";

interface FileInputsProps {
  watch: UseFormWatch<UserSubmitForm>;
  setValue: UseFormSetValue<UserSubmitForm>;
  reset: UseFormReset<UserSubmitForm>;
  control: Control<UserSubmitForm>;
  errors: Partial<FieldErrorsImpl<UserSubmitForm>>;
  getValues: UseFormGetValues<UserSubmitForm>
}

const FileInputs = ({ errors, control }: FileInputsProps) => {

  const validateTypeOfFile = (v: any[]): boolean => {
    // const result = v.every((item) => {
    //   const indexFile = item.name.split(".")[item.name.split(".").length - 1];
    //   const result = indexFile === "docx" || indexFile === "doc" || indexFile === "docx" || indexFile === "xlsx" || indexFile === "pptx";
    //   console.log(result);
    //   return result;
    // });
    // return result;
    return true;
  };

  const {
    field: { onChange, value, name },
    fieldState: { error },
  } = useController({
    control,
    name: "uploadFile",
    defaultValue: [],
    rules: {
      required: {
        message: "required",
        value: true,
      },
      validate: (v) => validateTypeOfFile(v)
      // validate: {
      //   typeOfFile: value => validateTypeOfFile(value)
      // }
    },
  });

  return (
    <div className="modal__formItem">
      <label className="modal__input modal__input_files" htmlFor="formId">
        <input
          id="formId"
          hidden
          type={"file"}
          multiple
          name={name}
          onChange={(e) => {
            if (e.target?.files?.[0]) {
              if (value?.length) {
                console.log("Тест1");
                return onChange([...value, ...Array.from(e.target.files)]);
              }
              console.log("Тест2");
              return onChange([e.target.files[0]]);
            }
          }}
        />
        Добавить файл
      </label>
      <span className={`${errors["uploadFile"] ? "modal__input-limit_error" : "modal__input-limit"}`}>{
        errors["uploadFile"]
          ? errors["uploadFile"]?.type === "typeOfFile"
            ? "Недопустисмый тип файла"
            : "Неизвестная ошибка"
          : "pdf, excel, pptx"
      }</span>
    </div>
  );




  // return (
  //   <div className="modal__formItem">
  //     <label className="modal__input modal__input_files" htmlFor="formId">




  //       Добавить файл
  //     </label>
  //     <span className="modal__input-limit">pdf, excel, pptx</span>
  //   </div>
  // );
};

export default FileInputs;
