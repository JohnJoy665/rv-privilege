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

const FileInputs = ({ control }: FileInputsProps) => {
  const {
    field: { onChange, value },
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
    },
  });

  return (
    <div>
      <label>
        заполни меня
        <input
          type={"file"}
          multiple
          name={"uploadFile"}
          onChange={(e) => {
            if (e.target?.files?.[0]) {
              if (value?.length) {
                return onChange([...value, ...Array.from(e.target.files)]);
              }
              return onChange([e.target.files[0]]);
            }
          }}
        />
      </label>

      {error?.message && (
        <span
          style={{
            color: "red",
          }}
        >
          {error.message}
        </span>
      )}
      {value?.map(({ name }) => name).join(", ")}
    </div>
  );
};

export default FileInputs;
