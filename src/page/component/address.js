import styled from "styled-components";
import {Li, Ul} from "./projectDesignV2";

const AddressBox = styled.div`
  padding: 0px 50px 20px 0;
`
const Title = styled.h1`
  color: white;
  font-size: 40px;
  font-weight: 700;
  padding: 0 50px 0 20px;;
`
const Address = () => {
    return (
        <AddressBox>
            <Title>QUY TRÌNH LÀM VIỆC CỦA CHÚNG TÔI</Title>
            <Ul>
                <Li>Khảo sát trực tiếp khu đất</Li>
                <Li>Tính toán phương án lên thiết kế.</Li>
                <Li>Kí kết hợp đồng.</Li>
                <Li>Tư vấn gói thi công phù hợp với tài chính.</Li>
            </Ul>
            <div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.91222562308!2d105.79894221440748!3d21.036197792901458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab3f68e337a1%3A0x60972001f9acd74b!2zNDVhLCAxNjcgRMawxqFuZyBRdeG6o25nIEjDoG0sIFF1YW4gSG9hLCBD4bqndSBHaeG6pXksIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1646407819387!5m2!1svi!2s"
                    width="100%" height="350"  allowFullScreen="" loading="lazy"></iframe>
            </div>
        </AddressBox>
    )
}
export default Address;