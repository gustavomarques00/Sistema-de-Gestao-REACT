import * as C from "./styles";
import { Link } from "react-router-dom";
import { ReactComponent as AccountIcon } from "../../assets/Account.svg";
import { ReactComponent as LogoutIcon } from "../../assets/Logout.svg";
import { ReactComponent as RegisterIcon } from "../../assets/Register.svg";

type Props = {
  title: string;
  icon: string;
  path: string;
  active: boolean;
};

export const SidebarItem = ({ title, icon, path, active }: Props) => {
  return (
    <C.Container>
      <Link to={path}>
        <C.IconArea active={active}>
          {icon === "account" && (
            <AccountIcon fill="white" width={24} height={24} />
          )}
          {icon === "register" && (
            <RegisterIcon fill="white" width={24} height={24} />
          )}
          {icon === "logout" && (
            <LogoutIcon fill="white" width={24} height={24} />
          )}
        </C.IconArea>
        <C.Info>
          <C.Title>{title}</C.Title>
        </C.Info>
        <C.Point active={active}></C.Point>
      </Link>
    </C.Container>
  );
};
