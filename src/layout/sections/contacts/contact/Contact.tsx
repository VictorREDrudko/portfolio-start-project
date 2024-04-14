import { Icon } from "../../../../components/icon/Icon"
import { FlexWrapper } from "../../../../components/FlexWrapper"
import { Link } from "../../../../components/Link"
import { S } from "../Contacts_Style"

export const Contact: React.FC = () => {
  return (
    <S.Contact>
      <S.Address>
        <FlexWrapper align="center" gaps="5px" wrap="wrap">
          <Icon iconId={"address"} width="61px" height="61px" viewBox="0 0 2000 2829"/>
          <h4>Address: </h4>
          <Link href="https://yandex.by/maps/-/CDRUj2Kn">Minsk, Prilukskaya 46-112</Link>
        </FlexWrapper>
      </S.Address>
      <S.Phone>
        <FlexWrapper align="center" gaps="5px">
          <Icon iconId={"tel"} width="61px" height="61px" viewBox="0 0 2000 2829"/>
          <h4>My number phone: </h4>
          <p>
            <Link href="tel:+375292907833">+375 (29) 290-78-33</Link>
          </p>
        </FlexWrapper>
      </S.Phone>
      <S.Email>
        <FlexWrapper align="center" gaps="5px">
          <Icon iconId={"mail"} width="61px" height="61px" viewBox="0 0 2000 2829"/>
          <h4>Email: </h4>
          <p>
            <Link href="mailto:viktor_RED_rudko@mail.ru">viktor_RED_rudko@mail.ru</Link>
          </p>
        </FlexWrapper>
      </S.Email>
    </S.Contact>
  )
}