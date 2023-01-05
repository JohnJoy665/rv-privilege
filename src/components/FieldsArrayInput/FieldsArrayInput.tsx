import { useFormContext, useFieldArray, Controller } from "react-hook-form";
import IconContainer from "../IconContainer/IconContainer";




const FieldsArrayInput = () => {

  const { control, register, watch, formState, getValues } = useFormContext();
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
    control,
    name: "contactsArray",
  });

  const cusErrors = formState.errors;
  console.log(cusErrors);

  const watchFieldArray = watch("contactsArray");

  // console.log(!!cusErrors["contactsArray"]?.[0]);


  return (
    <>
      {fields.map((field: any, index: number) => {
        // console.log(field);
        // console.log(errors["contactsArray"]);

        return (
          <div className="modal__formItem" key={field.id}>
            <input
              className="modal__input"
              placeholder="Контакты (ФИО)"
              {...register(`contactsArray.${index}.fio` as const,
                {
                  // required: { value: getValues(`contactsArray.${index}.email`) || getValues(`contactsArray.${index}.number`) ? true : false, message: "Добавьте имя контакта" },
                  required: { value: getValues(`contactsArray.${index}.email`) || getValues(`contactsArray.${index}.number`) ? true : false, message: "Добавьте имя контакта" },
                  maxLength: {
                    value: 5,
                    message: "Стоит ограничение 50 символов"
                  }
                })
              } />
            <input
              className="modal__input"
              placeholder="Контакты (почта)"
              {...register(`contactsArray.${index}.email` as const,
                {
                  required: { value: getValues(`contactsArray.${index}.fio`) ? (getValues(`contactsArray.${index}.number`) ? false : true) : false, message: "Добавьте email или номер телефона" },
                  validate: {
                    contactValue: value => getValues(`contactsArray.${index}.email`) ? (/^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value) || "Введите корректный email") : true
                  }
                })
              } />
            <input
              className="modal__input"
              placeholder="Контакты (телефон)"
              {...register(`contactsArray.${index}.number` as const,
                {
                  required: { value: getValues(`contactsArray.${index}.fio`) ? (getValues(`contactsArray.${index}.email`) ? false : true) : false, message: "Добавьте email или номер телефона" },
                  validate: {
                    contactValue: value => getValues(`contactsArray.${index}.number`) ? (/^((8|\+7)[\\-]?)?(\(?\d{3}\)?[\\-]?)?[\d\\-]{7,10}$/.test(value) || "Введите телефон") : true
                  }
                })
              } />
            <span className={`${cusErrors["contactsArray"] && cusErrors["contactsArray"]?.[index] ? "modal__input-limit_error" : "modal__input-limit"}`}>{
              cusErrors["contactsArray"]
                && cusErrors["contactsArray"]?.[index]
                && cusErrors["contactsArray"]?.[index]?.["fio"]
                ? cusErrors["contactsArray"][index]["fio"].message
                : cusErrors["contactsArray"]?.[index]?.["email"]
                  ? cusErrors["contactsArray"][index]["email"].message
                  : cusErrors["contactsArray"]?.[index]?.["number"]
                    ? cusErrors["contactsArray"][index]["number"].message
                    : ""
            }</span>
            {index === 0 || <span onClick={() => {remove(index);}} className="modal__input-limit modal__input-delete-button">
              удалить
            </span>}
          </div>
        );
      })}

      <div className="" onClick={() => {
        append({ fio: "", email: "", number: "" });
      }}><IconContainer icon={"material-symbols:add"} sizeWidth={"30"} sizeHeight={"30"} color="#C0C0C0" /></div>
    </>
  );
};

export default FieldsArrayInput;