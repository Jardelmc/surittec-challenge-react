import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '../../store/modules/auth/actions';

const schema = Yup.object().shape({
  login: Yup.string().required('O campo de login é obrigatório'),
  password: Yup.string().required('Campo de senha é obrigatório'),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ login, password }) {
    dispatch(signInRequest(login, password));
  }

  return (
    <>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="login" type="text" placeholder="Seu login" />
        <Input name="password" type="password" placeholder="Sua senha" />

        <button type="submit">{loading ? 'Carregando...' : 'Acessar'}</button>
      </Form>
    </>
  );
}
