import * as C from "./styles";
import { Link } from "react-router-dom";

import { ReactComponent as CodeIcon } from "../../assets/Code.svg";

export function Header() {
  return (
    <Link to="/">
      <C.Container>
        <CodeIcon width={40} height={40} />
        <h1>Sistema de Gestão</h1>
        <CodeIcon width={40} height={40} />
      </C.Container>
    </Link>
  );
}
