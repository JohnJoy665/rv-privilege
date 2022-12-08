import {
  UseFormWatch,
  UseFormSetValue,
  UseFormReset,
  Control,
  FieldErrors,
  UseFormGetValues,
  useController
} from "react-hook-form";
import { UserSubmitForm } from "../../interfaces/inputs";

interface FileInputsProps {
  watch: UseFormWatch<UserSubmitForm>;
  setValue: UseFormSetValue<UserSubmitForm>;
  reset: UseFormReset<UserSubmitForm>;
  control: Control<UserSubmitForm>;
  errors: Partial<FieldErrors<UserSubmitForm>>;
  getValues: UseFormGetValues<UserSubmitForm>
}

const FileInputs = ({ errors, control }: FileInputsProps) => {

  console.log(errors);

  const validateTypeOfFile = (v: any[]): boolean => {
    const result = v.every((item) => {
      const indexFile = item.name.split(".")[item.name.split(".").length - 1];
      const result = indexFile === "docx" || indexFile === "doc" || indexFile === "docx" || indexFile === "xlsx" || indexFile === "pptx";
      console.log(result);
      return result;
    });
    return result;
    return true;
  };

  const {
    field: { onChange, value, name },
  } = useController({
    control,
    name: "uploadFile",
    defaultValue: [],
    rules: {
      required: {
        message: "required",
        value: true,
      },
      // validate: (v) => validateTypeOfFile(v)
      validate: {
        typeOfFile: value => validateTypeOfFile(value)
      }
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
              console.log(value);
              if (value?.length) {
                console.log("Чандж1");
                return onChange([...value, ...Array.from(e.target.files)]);
              }
              console.log("Чандж2");
              return onChange([e.target.files[0]]);
            }
          }}
        />
        Добавить файл
      </label>
      <span className={`${errors["uploadFile"] ? "modal__input-limit_error" : "modal__input-limit"}`}>{
        errors["uploadFile"]
          ? (errors["uploadFile"] as any)?.type === "typeOfFile"
            ? "Недопустисмый тип файла"
            : "Неизвестная ошибка"
          : "pdf, excel, pptx"
      }</span>
    </div>
  );

};

export default FileInputs;
