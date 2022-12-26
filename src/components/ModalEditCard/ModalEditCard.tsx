import { FormProvider, useForm, SubmitHandler, Controller } from "react-hook-form";
import { UserSubmitForm } from "../../interfaces/inputs";
import cardImg from "../../img/cardImg2.png";
import TextAreaWithLimit from "../../components/TextAreaWithLimit/TextAreaWithLimit";
import FileInputs from "../FileInputs/FileInputs";
// import FileInputsTest from "../FileInputs/FileInputsTest";

interface ModalEditCardProps {
  open: boolean;
}

const ModalEditCard = ({ open }: ModalEditCardProps) => {

  const methods = useForm<UserSubmitForm>({
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
    <FormProvider {...methods}>
      <form className="modal__form" onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="modal__body">
          <div className="modal__info">
            <TextAreaWithLimit
              watch={methods.watch}
              errors={methods.formState.errors}
              setValue={methods.setValue}
              setError={methods.setError}
              name={"title"}
              placeholder={"Заголовок"}
              limit={30}
              control={methods.control}
              reset={methods.reset}
              open={open}
            />
            <TextAreaWithLimit
              watch={methods.watch}
              errors={methods.formState.errors}
              setValue={methods.setValue}
              setError={methods.setError}
              name={"category"}
              placeholder={"Категория"}
              limit={30}
              control={methods.control}
              reset={methods.reset}
              open={open}
            />
            <TextAreaWithLimit
              watch={methods.watch}
              errors={methods.formState.errors}
              setValue={methods.setValue}
              setError={methods.setError}
              name={"description"}
              placeholder={"Краткое описание"}
              limit={75}
              control={methods.control}
              reset={methods.reset}
              open={open}
            />
            <TextAreaWithLimit
              watch={methods.watch}
              errors={methods.formState.errors}
              setValue={methods.setValue}
              setError={methods.setError}
              name={"specification"}
              placeholder={"Об акции - условия"}
              limit={250}
              control={methods.control}
              reset={methods.reset}
              open={open}
            />
            <FileInputs
              name="uploadFile"
              label="File Upload" 
              open={open}
            />
          </div>
          <input type="submit" />
          <div className="modal__img">
            <img src={cardImg} alt="" />
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default ModalEditCard;
