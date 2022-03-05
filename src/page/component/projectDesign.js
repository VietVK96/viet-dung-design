import styled from "styled-components";
import {ButtonInfo} from "./general-tag/tag";

const ProjectBox = styled.div`
  padding: 0px 20px;
`
export const Title = styled.h1`
  font-size: 30px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
`
export const Description = styled.p`
  color: white;
  font-size: 20px;
  margin-top: 40px;
  margin-bottom: 40px;
`
export const ButtonInfo2 = styled.a`
  display: inline-block;
  min-width: 220px;
  background: #4c66ff;
  padding: 10px 30px;
  border-radius: 20px;
  color: #ffffffff;
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 500;
  text-decoration: none;
  text-align: center;
`

const ProjectDesign = () => {
    return (
        <ProjectBox>
            <Title>Dự án thiết kế việt dũng design từng thực hiện</Title>
            <Description>
                Các công trình đã và đang được triển khai xây dựng. Tư vấn phong cách và kiểu dáng phù hợp cho
                mảnh đất, nhu cầu của khách hàng
            </Description>
            <div>
                <div>
                    <ButtonInfo>Nhà phố hiện đại</ButtonInfo>
                </div>
                <div style={{
                    position: "relative",
                    left: "10%",
                    marginTop:"15px"
                }}>
                    <ButtonInfo>Nhà phố tân cổ điển</ButtonInfo>
                </div>
                <div style={{
                    position: "relative",
                    left: "20%",
                    marginTop:"15px"
                }}>
                    <ButtonInfo>tòa nhà văn phòng</ButtonInfo>
                </div>
                <div  style={{
                    position: "relative",
                    left: "30%",
                    marginTop:"15px"
                }}>
                    <ButtonInfo>chung cư mini</ButtonInfo>
                </div>
                <div style={{
                    position: "relative",
                    left: "40%",
                    marginTop:"15px"
                }}>
                    <ButtonInfo>nhà vườn mái nhật</ButtonInfo>
                </div>
                <div style={{
                    position: "relative",
                    left: "30%",
                    marginTop:"15px"
                }}>
                    <ButtonInfo>Nhà vườn mái thái</ButtonInfo>
                </div>
                <div style={{
                    position: "relative",
                    left: "20%",
                    marginTop:"15px"
                }}>
                    <ButtonInfo>Nhà vườn mái chéo</ButtonInfo>
                </div>
                <div style={{
                    position: "relative",
                    left: "10%",
                    marginTop:"15px"
                }}>
                    <ButtonInfo>Biệt thự</ButtonInfo>
                </div>
                <div style={{
                    position: "relative",
                    left: "20%",
                    marginTop:"15px"
                }}>
                    <ButtonInfo2 href={"tel:0961211861"}>hotline:0961.211.861</ButtonInfo2>
                </div>
            </div>
        </ProjectBox>
    )
}
export default ProjectDesign;