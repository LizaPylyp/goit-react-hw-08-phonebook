import { LoginForm } from '../components/LoginForm/LoginForm';
import { Section } from '../components/Sectio/Section';

const Login = () => {
    return (
      <Section title={'Log in'}>
        <LoginForm />
      </Section>
    );
};
  
export default Login;