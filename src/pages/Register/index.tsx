import React from "react";
import { Theme } from "../../components/Theme/index";
import { useHistory } from "react-router-dom";
import { useForm, FormActions } from "../../contexts/FormContext";
import * as C from "./styles";

export function Register() {
  const { state, dispatch } = useForm();

  return (
    <Theme>
      <C.Container>
        <h1>Preencha os dados abaixo</h1>
        <p>Agora é a hora de conhecer melhor voce! 😃</p>
        <C.FormData>
          <span>Seu nome completo</span>
          <input
            type="text"
            required
            autoFocus
            placeholder="Ex: Rodrigo..."
            alt="Name"
          />

          <span>Seu E-mail</span>
          <input
            type="email"
            required
            placeholder="rodrigo@gmail.com"
            alt="Email"
          />

          <span>Data de Nascimento</span>
          <input required type="date" />

          <span>Seu Telefone</span>
          <input type="tel" required />

          <span>Seu Cargo</span>
          <input type="text" required name="funcoes" list="funcoes" />
          <datalist id="funcoes">
            <option value="Dono" />
            <option value="Promoter" />
            <option value="barman" />
            <option value="Seguranca" />
          </datalist>

          <span>Sua Foto</span>
          <input required type="file" alt="foto" />

          <button>Enviar Dados</button>
        </C.FormData>
      </C.Container>
    </Theme>
  );
}
