import { useForm, SubmitHandler, Controller  } from "react-hook-form";
import { UserSubmitForm } from "../../interfaces/inputs";
import cardImg from "../../img/cardImg2.png";
import TextAreaWithLimit from "../../components/TextAreaWithLimit/TextAreaWithLimit";
import FileInputs from "../../components/FileInputs/FileInputs";
// import FileInputsTest from "../FileInputs/FileInputsTest";

interface ModalEditCardProps {
  open: boolean;
}

const ModalEditCard = ({ open }: ModalEditCardProps) => {

  const {
    watch,
    handleSubmit,
    getValues,
    setValue,
    setError,
    control,
    reset,
    formState: { errors }
  } = useForm<UserSubmitForm>({
    defaultValues: {
      title: "",
      category: "",
      description: "",
      specification: "",
      uploadFile: []
    },
    mode: "onChange"
  });

  const onSubmit: SubmitHandler<UserSubmitForm> = data => console.log("Отправка формы", data);


  return (
    <form className="modal__form" onSubmit={handleSubmit(onSubmit)}>
      <div className="modal__body">
        <div className="modal__info">
          <TextAreaWithLimit
            watch={watch}
            errors={errors}
            setValue={setValue}
            setError={setError}
            name={"title"}
            placeholder={"Заголовок"}
            limit={30}
            control={control}
            reset={reset}
            open={open}
          />
          <TextAreaWithLimit
            watch={watch}
            errors={errors}
            setValue={setValue}
            setError={setError}
            name={"category"}
            placeholder={"Категория"}
            limit={30}
            control={control}
            reset={reset}
            open={open}
          />
          <TextAreaWithLimit
            watch={watch}
            errors={errors}
            setValue={setValue}
            setError={setError}
            name={"description"}
            placeholder={"Краткое описание"}
            limit={75}
            control={control}
            reset={reset}
            open={open}
          />
          <TextAreaWithLimit
            watch={watch}
            errors={errors}
            setValue={setValue}
            setError={setError}
            name={"specification"}
            placeholder={"Об акции - условия"}
            limit={250}
            control={control}
            reset={reset}
            open={open}
          />
          <FileInputs 
            errors={errors}
            watch={watch}
            setValue={setValue}
            reset={reset}
            control={control}
            getValues={getValues}
          />

        </div>
        <input type="submit" />
        <div className="modal__img">
          <img src={cardImg} alt="" />
        </div>
      </div>
    </form>
  );
};

export default ModalEditCard;
