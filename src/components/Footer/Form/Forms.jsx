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
        width={[350, 690, 530]}
        px={[20, 40, 55]}
        py={[84, 100, 130]}
      >
        <Box
          display="flex"
          flexDirection={['column']}
          alignItems={['center', 'flex-start', 'flex-start']}
          gridGap={[44]}
        >
          <Box display="flex" justifyContent="center">
            <FormsTitle>Онлайн-запись</FormsTitle>
          </Box>
          <Box
            display="flex"
            flexDirection={['column']}
            alignItems={['center', 'flex-start', 'flex-start']}
          >
            <Formik
              initialValues={{
                name: '',
                telephone: '',
                message: '',
              }}
              onSubmit={onHandleSubmit}
            >
              <FormSubmit>
                <Box
                  display="flex"
                  flexDirection={['column', 'row', 'row']}
                  gridGap={[44, 30, 30]}
                >
                  <Lable>
                    <Input type="text" name="name" placeholder="*Имя" />
                  </Lable>
                  <Lable>
                    <Input type="tel" name="telephone" placeholder="*Телефон" />
                  </Lable>
                </Box>
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
