import styled from "styled-components";
import { Theme } from "../../styles/Theme";

const Header = styled.header`
  background-color: ${Theme.colors.mainBg};
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 999;
  padding: 20px 0;

  @media ${Theme.media.mobile} {
    padding: 5px 0;
    }
`

export const S = {
  Header,
}