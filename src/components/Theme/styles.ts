import styled from "styled-components";
import background from "../../assets/Background.png";

export const Container = styled.div`
  background-color: #eeeeee;
  color: #c7c7c7;
  min-height: 100vh;
  font-family: 'Roboto';

`;

export const Area = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Options = styled.div`
  flex: 1;
  display: flex;
`;

export const Sidebar = styled.div`
  width: 250px;
  border-right: 1px solid #16195c;
  background: rgb(2, 0, 36);
  background: -moz-linear-gradient(
    0deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(0, 212, 255, 1) 100%
  );
  background: -webkit-linear-gradient(
    0deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(0, 212, 255, 1) 100%
  );
  background: linear-gradient(
    0deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(0, 212, 255, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#020024",endColorstr="#00d4ff",GradientType=1);
`;

export const Page = styled.div`
  flex: 1;
  padding-left: 40px;
  padding-top: 40px;
`;
