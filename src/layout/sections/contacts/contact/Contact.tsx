import styled from "styled-components"
import { Icon } from "../../../../components/icon/Icon"
import { FlexWrapper } from "../../../../components/FlexWrapper"

export const Contact = () => {
  return (
    <StyledContact>
      <Address>
        <FlexWrapper align="center" gaps="5px">
          <Icon iconId={"iconSvg"}/>
          <h4>Адрес: </h4>
          <a href="https://yandex.by/maps/-/CDRUj2Kn">г. Минск, Фрунзенский р-н, ул. Одоевского</a>
        </FlexWrapper>
      </Address>
      <Phone>
        <FlexWrapper align="center" gaps="5px">
          <Icon iconId={"iconSvg"}/>
          <h4>Телефон: </h4>
          <p>
            <a href="tel:+375292907833">+375 (29) 290-78-33</a>
          </p>

        </FlexWrapper>
      </Phone>
      <Email>
        <FlexWrapper align="center" gaps="5px">
          <Icon iconId={"iconSvg"}/>
          <h4>Электронная почта: </h4>
          <p>
            <a href="mailto:viktor_RED_rudko@mail.ru">viktor_RED_rudko@mail.ru</a>
          </p>
        </FlexWrapper>
      </Email>
    </StyledContact>
  )
}

const StyledContact = styled.div`
  min-width: 600px;
  min-height: 300px;
  background-color: #f1a9a9;
`

const Address = styled.div`

`

const Phone = styled.div`

`

const Email = styled.div`

`