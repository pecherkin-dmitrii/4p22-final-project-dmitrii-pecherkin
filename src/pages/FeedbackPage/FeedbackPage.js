import {GREY_COLOR, WHITE_COLOR} from "../../components/common/CommonStyles";
import styled from "styled-components";
import Button from "../../components/common/Button/Button";
import RadioButton from "../../components/common/RadioButton/RadioButton";
import Checkbox from "../../components/common/Checkbox/Checkbox";
import FileInput from "../../components/common/FileInput/FileInput";
import {useSelector} from "react-redux";
import TextInput from "../../components/common/TextInput/TextInput";
import EmailInput from "../../components/common/EmailInput/EmailInput";
import TextArea from "../../components/common/TextArea/TextArea";

const StyledFeedbackForm = styled.form`
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: column;
  width: 600px;
  margin: 0 auto;
  background-color: ${WHITE_COLOR};
  box-shadow: 1px 1px 10px 4px #ccc;
  border-radius: 5px;
  overflow: hidden;
  padding: 50px;

  @media screen and (max-width: 699px) {
    width: 340px;
  }
`;

const StyledFeedbackHeading = styled.h1`
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

const StyledFeedbackTypeLabel = styled.p`
  color: ${GREY_COLOR};
  font-size: 0.9rem;
  margin-bottom: 2px;
`;

function FeedbackPage() {
    const formValidation = useSelector(store => store.formValidation);
    const isFormValid = (formValidation.isEmailValid &&
        formValidation.isNameValid &&
        formValidation.isTextareaValid &&
        formValidation.isFileValid) ||
        (formValidation.isEmailValid &&
        formValidation.isNameValid &&
        formValidation.isTextareaValid &&
        !formValidation.isFileAdded);

    const handleSubmitClick = (event) => {
        event.preventDefault();

        const form = event.target.form;
        const submitObject = {};
        const formData = new FormData(form);
        for(let [name, value] of formData) {
            submitObject[name] = value;
        }
        console.log(submitObject);
    }

    return (
        <StyledFeedbackForm action="">
            <StyledFeedbackHeading>Форма обратной связи</StyledFeedbackHeading>
            <EmailInput text="Email для ответа" id="email" name="email" placeholder="Введите email..." required/>
            <TextInput text="Имя" id="user-name" name="user-name" placeholder="Введите имя..." required/>
            <StyledFeedbackTypeLabel>Тип обращения</StyledFeedbackTypeLabel>
            <RadioButton text={"Оставить отзыв"} name={"feedback-type"} value={"feedback"} checked/>
            <RadioButton text={"Сообщить об ошибке"} name={"feedback-type"} value={"error"}/>
            <TextArea text="Текст обращения" name="feedback-message" cols="20" rows="8" required/>
            <FileInput text={"Добавить скриншот"} name={"file"}/>
            <Checkbox text={"Я согласен получать обновления на почту"} name={"updates"} value={"true"}/>
            <Button text={"Отправить"} onClick={handleSubmitClick} disabled={!isFormValid}/>
        </StyledFeedbackForm>
    );
}

export default FeedbackPage;