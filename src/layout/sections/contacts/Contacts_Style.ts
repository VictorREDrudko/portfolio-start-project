import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Link } from "../../../components/Link";
import { Theme } from "../../../styles/Theme";

// From Contacts
const Contacts = styled.section`
  min-height: 70vh;
  ${FlexWrapper} {
    width: 100%;
  }
`

// From Contact
const Contact = styled.div`
  max-width: 350px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;

  ${Link} {
    font-size: 14px;
    padding: 0;

    &::before {
    top: 20px;
    }
  }

`

const Address = styled.div`
  @media ${Theme.media.mobile} {
    h4 {
    display: none;
    }
  }
`

const Phone = styled.div`
  @media ${Theme.media.mobile} {
    h4 {
    display: none;
    }
  }
`

const Email = styled.div`
  @media ${Theme.media.mobile} {
    h4 {
    display: none;
    }
  }
`

export const S = {
  Contacts,
  Contact,
  Address,
  Phone,
  Email
}
