import { FormProvider, useForm, SubmitHandler, Controller } from "react-hook-form";
import { UserSubmitForm } from "../../interfaces/inputs";
import cardImg from "../../img/cardImg2.png";
import TextAreaWithLimit from "../../components/TextAreaWithLimit/TextAreaWithLimit";
import FileInputs from "../FileInputs/FileInputs";
import FieldsArrayInput from "../FieldsArrayInput/FieldsArrayInput";
import ImageInput from "../ImageInput/ImageInput";

interface ModalEditCardProps {
  open: boolean;
  handleClose: () => void;
}

const ModalEditCard = ({ open, handleClose }: ModalEditCardProps) => {

  const methods = useForm<UserSubmitForm>({
    defaultValues: {
      title: "",
      category: "",
      description: "",
      specification: "",
      uploadFile: [],
      contactsArray: [{ fio: "", number: "", email: "" }],
      uploadImg: []
    },
    mode: "onChange"
  });

  const onSubmit: SubmitHandler<UserSubmitForm> = (data) => {
    console.log("Отправка формы", data);
    handleClose();
  };


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
            <FieldsArrayInput />
          </div>
          <div className="modal__img">
            <ImageInput 
              name="uploadImg"
            />
            {/* <img src={cardImg} alt="" /> */}
          </div>
        </div>
        <input type="submit" />
      </form>
    </FormProvider>
  );
};

export default ModalEditCard;
