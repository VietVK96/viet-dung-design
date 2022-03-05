import styled from "styled-components";
import image from "../../image/image.jpg"
import {Li, Ul} from "./projectDesignV2";

const PropertiesBox = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px 0;
`
const ImgBox = styled.div`
`
const ContentBox = styled.div`
  padding: 0 40px;
`
const Img = styled.img`
  width: 400px;
  height: 400px;
  object-fit: cover;
`
const TitleBox = styled.div`
  display: flex;
  justify-content: left;
`
const TitleContent = styled.h2`
  color: white;
  font-weight: 700;
  font-size: 30px;
  text-transform: uppercase;
  width: 400px;
`
const Logo = styled.img`
  width: 100px;
  background: yellow;
  margin-right: 20px;
`
const ListBox = styled.div`
  margin-top: 40px;
  margin-left: 40px;
`
const Properties = () => {
    return (
        <PropertiesBox>
            <ImgBox>
                <Img src={image} alt={"img"}/>
            </ImgBox>
            <ContentBox>
                <TitleBox>
                    <Logo alt={"img"} src="https://img.icons8.com/dotty/80/000000/certificate.png"/>
                    <TitleContent>Kiến trúc tối ưu -Việt dũng Design</TitleContent>
                </TitleBox>
                <ListBox>
                    <Ul>
                        <Li>Tận Tâm</Li>
                        <Li>Uy Tín</Li>
                        <Li>Trách nhiệm</Li>
                        <Li>Cam kết chuẩn tiến độ</Li>
                    </Ul>
                </ListBox>

            </ContentBox>
        </PropertiesBox>
    )
}
export default Properties;