import React from "react";
import { Theme } from "../../components/Theme/index";
import { useHistory } from 'react-router-dom'
import { useForm, FormActions } from '../../contexts/FormContext'
import * as C from "./styles";

export function Account() {
  const {state, dispatch}  = useForm();
  const history = useHistory();

  return (
    <Theme>
      <C.Container>
        <p>teste</p>
      </C.Container>
    </Theme>
  );
}
