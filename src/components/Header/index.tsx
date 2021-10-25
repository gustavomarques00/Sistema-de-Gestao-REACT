import * as C from "./styles";
import { Link } from "react-router-dom";

import { ReactComponent as CodeIcon } from "../../assets/Code.svg";

export function Header() {
  return (
    <C.Container>
      <CodeIcon width={40} height={40} />
      <Link to="/">
        <h1>Sistema de Gestão</h1>
      </Link>
      <CodeIcon width={40} height={40} />
    </C.Container>
  );
}
