import {ButtonInfo} from "./general-tag/tag";
import styled from "styled-components";
import {Col, Row} from "antd";

const ServiceBox = styled.div`
  padding: 20px 30px;
  text-align: center;
`
export const Ul = styled.ul`
  max-width: 480px;
  margin: auto;
  text-align: left;
`
export const Li = styled.li`
  list-style-image: url("data:image/svg+xml;utf8, %3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20%20viewBox%3D%220%200%20205.6%20205.6%22%20fill%3D%22rgba(7%2C%2058%2C%20145%2C%201)%22%3E%3Cpath%20d%3D%22M58.6%2C143.6a17.8%2C17.8%2C0%2C0%2C1-25.2%2C0h0L5.2%2C115.4a17.8%2C17.8%2C0%2C0%2C1%2C0-25.2h0L33.4%2C62a17.8%2C17.8%2C0%2C0%2C1%2C25.2%2C0h0L86.8%2C90.2a17.8%2C17.8%2C0%2C0%2C1%2C0%2C25.2h0ZM90.2%2C86.8a17.8%2C17.8%2C0%2C0%2C0%2C25.2%2C0h0l28.2-28.2a17.8%2C17.8%2C0%2C0%2C0%2C0-25.2h0L115.4%2C5.2a17.8%2C17.8%2C0%2C0%2C0-25.2%2C0h0L62%2C33.4a17.8%2C17.8%2C0%2C0%2C0%2C0%2C25.2h0Zm25.2%2C32a17.8%2C17.8%2C0%2C0%2C0-25.2%2C0h0L62%2C147a17.8%2C17.8%2C0%2C0%2C0%2C0%2C25.2h0l28.2%2C28.2a17.8%2C17.8%2C0%2C0%2C0%2C25.2%2C0h0l28.2-28.2a17.8%2C17.8%2C0%2C0%2C0%2C0-25.2h0Zm85-28.6L172.2%2C62A17.8%2C17.8%2C0%2C0%2C0%2C147%2C62h0L118.8%2C90.2a17.8%2C17.8%2C0%2C0%2C0%2C0%2C25.2h0L147%2C143.6a17.8%2C17.8%2C0%2C0%2C0%2C25.2%2C0h0l28.2-28.2a17.8%2C17.8%2C0%2C0%2C0%2C0-25.2Z%22%20transform%3D%22translate(0)%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E");
  font-size: 18px;
`
const Info = styled.div`
  background: white;
  padding: 15px;
  margin-top: 10px;
`
const HeadLine = styled.div`
  width: 40px;
  height: 40px;

`
const InfoContent = styled.span`
  font-size: 48px;
  font-weight: 700;
  color: rgba(27, 166, 44, 1);
  margin-top: -15px;
  margin-left: 20px;
`
const InDes = styled.div`
  font-size: 18px;
  text-transform: uppercase;
  text-align: left;
`
const Logo = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100%;
`
const Service = () => {
    return (
        <ServiceBox>
            <div>
                <ButtonInfo>Miễn Phí Khảo Sát Khu đất</ButtonInfo>
            </div>
            <div style={{marginTop: "20px"}}>
                <ButtonInfo>Miễn phí đăng ký nhận bản vẽ sơ bộ</ButtonInfo>
            </div>
            <div style={{marginTop: "10px"}}>
                <Ul>
                    <Li>Lên ý tưởng phân chia công năng sử dụng theo yêu cầu khách hàng</Li>
                    <Li>Tính toán diện tích sử dụng các phòng</Li>
                    <Li>Tính toán phong thủy cơ bản hướng bếp, ban thờ</Li>
                    <Li>Tư vấn gói thi công phù hợp với tài chính</Li>
                </Ul>
            </div>
            <Info>
                <Row>
                    <Col span={6}>
                        <div>
                            <div style={{display: "flex"}}>
                                <HeadLine>
                                    <img
                                        alt={"logo"}
                                        src={"data:image/svg+xml;utf8, %3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20%20viewBox%3D%220%200%20205.6%20205.6%22%20fill%3D%22rgba(7%2C%2058%2C%20145%2C%201)%22%3E%3Cpath%20d%3D%22M58.6%2C143.6a17.8%2C17.8%2C0%2C0%2C1-25.2%2C0h0L5.2%2C115.4a17.8%2C17.8%2C0%2C0%2C1%2C0-25.2h0L33.4%2C62a17.8%2C17.8%2C0%2C0%2C1%2C25.2%2C0h0L86.8%2C90.2a17.8%2C17.8%2C0%2C0%2C1%2C0%2C25.2h0ZM90.2%2C86.8a17.8%2C17.8%2C0%2C0%2C0%2C25.2%2C0h0l28.2-28.2a17.8%2C17.8%2C0%2C0%2C0%2C0-25.2h0L115.4%2C5.2a17.8%2C17.8%2C0%2C0%2C0-25.2%2C0h0L62%2C33.4a17.8%2C17.8%2C0%2C0%2C0%2C0%2C25.2h0Zm25.2%2C32a17.8%2C17.8%2C0%2C0%2C0-25.2%2C0h0L62%2C147a17.8%2C17.8%2C0%2C0%2C0%2C0%2C25.2h0l28.2%2C28.2a17.8%2C17.8%2C0%2C0%2C0%2C25.2%2C0h0l28.2-28.2a17.8%2C17.8%2C0%2C0%2C0%2C0-25.2h0Zm85-28.6L172.2%2C62A17.8%2C17.8%2C0%2C0%2C0%2C147%2C62h0L118.8%2C90.2a17.8%2C17.8%2C0%2C0%2C0%2C0%2C25.2h0L147%2C143.6a17.8%2C17.8%2C0%2C0%2C0%2C25.2%2C0h0l28.2-28.2a17.8%2C17.8%2C0%2C0%2C0%2C0-25.2Z%22%20transform%3D%22translate(0)%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E"}/>
                                </HeadLine>
                                <InfoContent>7+</InfoContent>
                            </div>
                            <InDes>Kinh nghiệm</InDes>
                        </div>
                        <div style={{marginTop: "20px"}}>
                            <div style={{display: "flex"}}>
                                <HeadLine>
                                    <img
                                        alt={"logo"}
                                        src={"data:image/svg+xml;utf8, %3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20%20viewBox%3D%220%200%20205.6%20205.6%22%20fill%3D%22rgba(7%2C%2058%2C%20145%2C%201)%22%3E%3Cpath%20d%3D%22M58.6%2C143.6a17.8%2C17.8%2C0%2C0%2C1-25.2%2C0h0L5.2%2C115.4a17.8%2C17.8%2C0%2C0%2C1%2C0-25.2h0L33.4%2C62a17.8%2C17.8%2C0%2C0%2C1%2C25.2%2C0h0L86.8%2C90.2a17.8%2C17.8%2C0%2C0%2C1%2C0%2C25.2h0ZM90.2%2C86.8a17.8%2C17.8%2C0%2C0%2C0%2C25.2%2C0h0l28.2-28.2a17.8%2C17.8%2C0%2C0%2C0%2C0-25.2h0L115.4%2C5.2a17.8%2C17.8%2C0%2C0%2C0-25.2%2C0h0L62%2C33.4a17.8%2C17.8%2C0%2C0%2C0%2C0%2C25.2h0Zm25.2%2C32a17.8%2C17.8%2C0%2C0%2C0-25.2%2C0h0L62%2C147a17.8%2C17.8%2C0%2C0%2C0%2C0%2C25.2h0l28.2%2C28.2a17.8%2C17.8%2C0%2C0%2C0%2C25.2%2C0h0l28.2-28.2a17.8%2C17.8%2C0%2C0%2C0%2C0-25.2h0Zm85-28.6L172.2%2C62A17.8%2C17.8%2C0%2C0%2C0%2C147%2C62h0L118.8%2C90.2a17.8%2C17.8%2C0%2C0%2C0%2C0%2C25.2h0L147%2C143.6a17.8%2C17.8%2C0%2C0%2C0%2C25.2%2C0h0l28.2-28.2a17.8%2C17.8%2C0%2C0%2C0%2C0-25.2Z%22%20transform%3D%22translate(0)%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E"}/>
                                </HeadLine>
                                <InfoContent>700+</InfoContent>
                            </div>
                            <InDes>dự án thiết kế</InDes>
                        </div>
                    </Col>
                    <Col span={12}>
                        <Logo>
                            <ButtonInfo>Việt Dũng design</ButtonInfo>
                        </Logo>
                    </Col>
                    <Col span={6}>
                        <div>
                            <div style={{display: "flex"}}>
                                <HeadLine>
                                    <img
                                        alt={"logo"}
                                        src={"data:image/svg+xml;utf8, %3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20%20viewBox%3D%220%200%20205.6%20205.6%22%20fill%3D%22rgba(7%2C%2058%2C%20145%2C%201)%22%3E%3Cpath%20d%3D%22M58.6%2C143.6a17.8%2C17.8%2C0%2C0%2C1-25.2%2C0h0L5.2%2C115.4a17.8%2C17.8%2C0%2C0%2C1%2C0-25.2h0L33.4%2C62a17.8%2C17.8%2C0%2C0%2C1%2C25.2%2C0h0L86.8%2C90.2a17.8%2C17.8%2C0%2C0%2C1%2C0%2C25.2h0ZM90.2%2C86.8a17.8%2C17.8%2C0%2C0%2C0%2C25.2%2C0h0l28.2-28.2a17.8%2C17.8%2C0%2C0%2C0%2C0-25.2h0L115.4%2C5.2a17.8%2C17.8%2C0%2C0%2C0-25.2%2C0h0L62%2C33.4a17.8%2C17.8%2C0%2C0%2C0%2C0%2C25.2h0Zm25.2%2C32a17.8%2C17.8%2C0%2C0%2C0-25.2%2C0h0L62%2C147a17.8%2C17.8%2C0%2C0%2C0%2C0%2C25.2h0l28.2%2C28.2a17.8%2C17.8%2C0%2C0%2C0%2C25.2%2C0h0l28.2-28.2a17.8%2C17.8%2C0%2C0%2C0%2C0-25.2h0Zm85-28.6L172.2%2C62A17.8%2C17.8%2C0%2C0%2C0%2C147%2C62h0L118.8%2C90.2a17.8%2C17.8%2C0%2C0%2C0%2C0%2C25.2h0L147%2C143.6a17.8%2C17.8%2C0%2C0%2C0%2C25.2%2C0h0l28.2-28.2a17.8%2C17.8%2C0%2C0%2C0%2C0-25.2Z%22%20transform%3D%22translate(0)%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E"}/>
                                </HeadLine>
                                <InfoContent>15+</InfoContent>
                            </div>
                            <InDes>Kiến trúc sư</InDes>
                        </div>
                        <div style={{marginTop: "20px"}}>
                            <div style={{display: "flex"}}>
                                <HeadLine>
                                    <img
                                        alt={"logo"}
                                        src={"data:image/svg+xml;utf8, %3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20%20viewBox%3D%220%200%20205.6%20205.6%22%20fill%3D%22rgba(7%2C%2058%2C%20145%2C%201)%22%3E%3Cpath%20d%3D%22M58.6%2C143.6a17.8%2C17.8%2C0%2C0%2C1-25.2%2C0h0L5.2%2C115.4a17.8%2C17.8%2C0%2C0%2C1%2C0-25.2h0L33.4%2C62a17.8%2C17.8%2C0%2C0%2C1%2C25.2%2C0h0L86.8%2C90.2a17.8%2C17.8%2C0%2C0%2C1%2C0%2C25.2h0ZM90.2%2C86.8a17.8%2C17.8%2C0%2C0%2C0%2C25.2%2C0h0l28.2-28.2a17.8%2C17.8%2C0%2C0%2C0%2C0-25.2h0L115.4%2C5.2a17.8%2C17.8%2C0%2C0%2C0-25.2%2C0h0L62%2C33.4a17.8%2C17.8%2C0%2C0%2C0%2C0%2C25.2h0Zm25.2%2C32a17.8%2C17.8%2C0%2C0%2C0-25.2%2C0h0L62%2C147a17.8%2C17.8%2C0%2C0%2C0%2C0%2C25.2h0l28.2%2C28.2a17.8%2C17.8%2C0%2C0%2C0%2C25.2%2C0h0l28.2-28.2a17.8%2C17.8%2C0%2C0%2C0%2C0-25.2h0Zm85-28.6L172.2%2C62A17.8%2C17.8%2C0%2C0%2C0%2C147%2C62h0L118.8%2C90.2a17.8%2C17.8%2C0%2C0%2C0%2C0%2C25.2h0L147%2C143.6a17.8%2C17.8%2C0%2C0%2C0%2C25.2%2C0h0l28.2-28.2a17.8%2C17.8%2C0%2C0%2C0%2C0-25.2Z%22%20transform%3D%22translate(0)%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E"}/>
                                </HeadLine>
                                <InfoContent>40+</InfoContent>
                            </div>
                            <InDes>dự án thi công</InDes>
                        </div>
                    </Col>
                </Row>
            </Info>
        </ServiceBox>
    )
}
export default Service;