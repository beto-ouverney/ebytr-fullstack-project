import { FormButton } from '../../molecules/FormButton';
import { FormContainer } from '../../molecules/FormContainer';
import { UserInput } from '../../molecules/UserInput';
import { useAppSelector } from '../../../app/hooks';
import { ErrorParagraph } from '../../molecules/ErrorParagraph';

export function RegistrationForm() {
  const {
    register: {
      error: { message },
    },
  } = useAppSelector((state) => state);

  return (
    <FormContainer>
      <UserInput
        inputId="firstNameInput"
        content="Enter your first name: "
        type="text"
        formRegister="firstName"
      />
      {message.includes('first name') && <ErrorParagraph content={message} />}
      <UserInput
        inputId="lastNameInput"
        content="Enter your last name: "
        type="text"
        formRegister="lastName"
      />
      {message.includes('last name') && <ErrorParagraph content={message} />}
      <UserInput
        inputId="emailInput"
        content="Enter your e-mail: "
        type="text"
        formRegister="email"
      />
      {message.includes('email address') && (
        <ErrorParagraph content={message} />
      )}
      <UserInput
        inputId="passwordInput"
        content="Enter your password: "
        type="password"
        formRegister="password"
      />
      {message.includes('password') && <ErrorParagraph content={message} />}
      <FormButton content="Submit" />
    </FormContainer>
  );
}
