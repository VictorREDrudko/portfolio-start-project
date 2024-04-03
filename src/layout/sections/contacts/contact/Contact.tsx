import styled from "styled-components"
import { Icon } from "../../../../components/icon/Icon"
import { FlexWrapper } from "../../../../components/FlexWrapper"
import { Link } from "../../../../components/Link"

export const Contact = () => {
  return (
    <StyledContact>
      <Address>
        <FlexWrapper align="center" gaps="5px">
          <Icon iconId={"address"} width="61px" height="61px" viewBox="0 0 2000 2829"/>
          <h4>Address: </h4>
          <Link href="https://yandex.by/maps/-/CDRUj2Kn">Minsk, Prilukskaya 46-112</Link>
        </FlexWrapper>
      </Address>
      <Phone>
        <FlexWrapper align="center" gaps="5px">
          <Icon iconId={"tel"} width="61px" height="61px" viewBox="0 0 2000 2829"/>
          <h4>Phone: </h4>
          <p>
            <Link href="tel:+375292907833">+375 (29) 290-78-33</Link>
          </p>
        </FlexWrapper>
      </Phone>
      <Email>
        <FlexWrapper align="center" gaps="5px">
          <Icon iconId={"mail"} width="61px" height="61px" viewBox="0 0 2000 2829"/>
          <h4>Email: </h4>
          <p>
            <Link href="mailto:viktor_RED_rudko@mail.ru">viktor_RED_rudko@mail.ru</Link>
          </p>
        </FlexWrapper>
      </Email>
    </StyledContact>
  )
}

const StyledContact = styled.div`
  max-width: 500px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${Link} {
    font-size: 14px;
    padding: 0;

    &::before {
    top: 20px;
    }
  }

`

const Address = styled.div`

`

const Phone = styled.div`

`

const Email = styled.div`

`