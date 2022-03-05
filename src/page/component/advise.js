import styled from "styled-components";
import {Input} from "antd";
import TextArea from "antd/es/input/TextArea";
import {ButtonInfo} from "./general-tag/tag";

const AdviseBox = styled.div`
  border-bottom-left-radius: 20%;
  border-bottom-right-radius: 20%;
  background: white;
  min-height: 520px;
  margin-top: 20px;
`
const AdviseTitle = styled.div`
  background: black;
  color: white;
  padding: 20px 80px 20px 20px;
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 500;
`
const Advise = () => {
    return (
        <AdviseBox>
            <AdviseTitle>Đăng ký tư vấn khảo sát miễn phí</AdviseTitle>
            <div>
                <Input style={{marginTop: 15,height:40}} placeholder={"họ và tên"}/>
                <Input style={{marginTop: 15,height:40}} placeholder={"Số điện thoại"}/>
                <TextArea style={{marginTop: 15, height: 150}} placeholder={"Để lại lời nhắn cho chúng tôi"}/>
                <div style={{textAlign:"center",marginTop: 40}}>
                    <ButtonInfo type={"submit"}>Gửi ngay</ButtonInfo>
                </div>
            </div>
        </AdviseBox>
    )
}
export default Advise;