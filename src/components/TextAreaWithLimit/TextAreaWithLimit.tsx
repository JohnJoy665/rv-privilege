import { useEffect, useRef } from "react";
import { UseFormWatch, FieldErrorsImpl, UseFormSetValue, Path, UseFormSetError, Control, Controller, UseFormReset } from "react-hook-form";
import useAutosizeTextArea from "../../hooks/useAutosizeTextArea";
import { UserSubmitForm } from "../../interfaces/inputs";

interface TextAreaWithLimitProps {
  watch: UseFormWatch<UserSubmitForm>;
  setValue: UseFormSetValue<UserSubmitForm>
  errors: Partial<FieldErrorsImpl<UserSubmitForm>>
  name: Path<{title: string, category: string, description: string, specification: string}>;
  placeholder: string;
  limit: number;
  setError: UseFormSetError<UserSubmitForm>
  control: Control<UserSubmitForm>
  reset: UseFormReset<UserSubmitForm>
  open: boolean
}

const TextAreaWithLimit = ({ 
  watch, 
  errors, 
  setValue, 
  name, 
  placeholder, 
  limit, 
  setError, 
  control, 
  reset, 
  open 
}: TextAreaWithLimitProps) => {
  const valueField = watch(name);
  const firstNameRef = useRef<HTMLTextAreaElement | null>(null);
  useAutosizeTextArea(firstNameRef.current, valueField, open);
  
  useEffect(() => {
    reset();
  }, [open]);

  useEffect(() => {
    if (valueField.length === limit) {
      setError(name, {
        type: "custom",
        message: "Достигнут предел"
      });
    } else if (valueField.length > limit) {
      setValue(name, valueField.substring(0, limit));
    }
  }, [valueField]);

  return (
    <div className="modal__formItem">
      <Controller
        control={control}
        name={name}
        rules={{
          required: { value: true, message: "Обязательное поле" },
          minLength: { value: 1, message: "Обязательное поле" },
          maxLength: { value: limit, message: "Достигнут предел" },
          pattern: {
            value: /^[^\s]+(\s+[^\s]+)*$/, message: "Пробел в начале или конце текста",
          },
          validate: {
            toMachSpaces: value => /^((?!\s{2}).)*$/.test(value),
            firstLetter: value => /^[0-9А-ЯA-Z].*/g.test(value),
            lastPoint: value => /.*[^\\.]$/g.test(value)
          }
        }}
        render={({ field: { ref, ...field } }) => (
          <textarea {...field}
            ref={(e) => {
              ref(e);
              firstNameRef.current = e;
            }}
            rows={1}
            className="modal__input"
            placeholder={placeholder}
          />
        )}
      />

      <span className={`${errors[name] ? "modal__input-limit_error" : "modal__input-limit"}`}>{
        errors[name] 
          ? errors[name]?.message
            ? errors[name]?.message
            : errors[name]?.type === "toMachSpaces"
              ? "Двойной пробел"
              : errors[name]?.type === "firstLetter"
                ? "Заглавная буква"
                : errors[name]?.type === "lastPoint"
                  ? "Не ставьте точку"
                  : "Неизвестная ошибка"
          :limit - valueField.length
      }</span>
    </div>
  );
};

export default TextAreaWithLimit;