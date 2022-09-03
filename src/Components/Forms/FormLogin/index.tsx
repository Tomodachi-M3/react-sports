import { useNavigate } from 'react-router-dom';

import Button from '../../Button';
import Input from '../../Input';
import FormStyle from '../style';

import { FieldValues, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaLogin } from '../../../Validations/validationLogin';

import { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthContext';

const FormLogin = () => {
  const { userLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const onSubmitFunctionLogin = (data: FieldValues) => {};

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schemaLogin) });
  return (
    <>
      <FormStyle onSubmit={handleSubmit(userLogin)}>
        <h1>Login</h1>
        <Input
          type='text'
          placeholder='Digite seu email'
          register={register}
          name='email'
          label='Email'
        />
        <span>
          {typeof errors.email?.message === 'string' && errors.email?.message}
        </span>
        <Input
          type='password'
          placeholder='Digite sua senha'
          register={register}
          name='password'
          label='Senha'
        />
        <span>
          {typeof errors.password?.message === 'string' &&
            errors.password?.message}
        </span>
        <Button
          backGround={'#93C335'}
          colorHover={'#6E9423'}
          color={'#D9D9D9'}
          onClick={() => onSubmitFunctionLogin}
        >
          Entrar
        </Button>
      </FormStyle>
    </>
  );
};

export default FormLogin;
