import { Box } from 'CommonStyle/Common.styled';
import { Formik } from 'formik';
import {
  ButtonSubmitForm,
  FormSubmit,
  Input,
  ConteinerBg,
  FormsTitle,
  Lable,
  Message,
} from './Forms.styled';
import imgFooter from '../../img/bgFooter.jpg';

export const Forms = () => {
  const onHandleSubmit = (values, { resetForm }) => {
    resetForm();
  };
  return (
    <ConteinerBg bg={imgFooter}>
      <Box
        display="flex"
        flexDirection={['column']}
        alignItems={['center', 'flex-start', 'flex-start']}
        justifyContent="center"
        width={[420, 690, 1170]}
        px={[30, 40, 55]}
        py={[84, 100, 130]}
      >
        <Box display="flex" flexDirection={['column']} gridGap={[44]}>
          <Box display="flex" justifyContent="center">
            <FormsTitle>Онлайн-запись</FormsTitle>
          </Box>
          <Box>
            <Formik
              initialValues={{
                name: '',
                telephone: '',
                message: '',
              }}
              onSubmit={onHandleSubmit}
            >
              <FormSubmit>
                <Lable>
                  <Input type="text" name="name" placeholder="*Имя" />
                </Lable>
                <Lable>
                  <Input type="tel" name="telephone" placeholder="*Телефон" />
                </Lable>
                <Lable>
                  <Message
                    name="message"
                    type="text"
                    placeholder="Сообщение"
                  ></Message>
                </Lable>

                <ButtonSubmitForm type="submit">Отправить</ButtonSubmitForm>
              </FormSubmit>
            </Formik>
          </Box>
        </Box>
      </Box>
    </ConteinerBg>
  );
};
