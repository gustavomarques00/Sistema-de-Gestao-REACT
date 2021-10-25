import React from "react";
import { Theme } from "../../components/Theme/index";
import { useHistory } from 'react-router-dom'
import { useForm, FormActions } from '../../contexts/FormContext'
import * as C from "./styles";

export function Register() {
  const {state, dispatch}  = useForm();

  return (
    <Theme>
      <C.Container>
        <p>Cadastrar</p>
      </C.Container>
    </Theme>
  );
}
