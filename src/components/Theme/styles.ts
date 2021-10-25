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
  background-color: #17A2B8;
`;

export const Page = styled.div`
  flex: 1;
  padding: 40px;
`;
