import React, { ReactNode } from "react";
import { Header } from "../Header";
import * as C from "./styles";
import { useForm } from "../../contexts/FormContext";
import { SidebarItem } from "../SidebarItem";

type Props = {
  children: ReactNode;
};

export function Theme({ children }: Props) {
  const { state } = useForm();

  return (
    <C.Container>
      <C.Area>
        <Header />

        <C.Options>
          <C.Sidebar>
            <SidebarItem
              title="Sua Conta"
              icon="account"
              path="/conta"
              active={state.currentStep === 1}
            />

            <SidebarItem
              title="Cadastrar"
              icon="register"
              path="/cadastrar"
              active={state.currentStep === 2}
            />

            <SidebarItem
              title="Sair"
              icon="logout"
              path="/sair"
              active={state.currentStep === 3}
            />
          </C.Sidebar>
          <C.Page>{children}</C.Page>
        </C.Options>
      </C.Area>
    </C.Container>
  );
}
