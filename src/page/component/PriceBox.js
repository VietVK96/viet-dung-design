import styled from "styled-components";
import {Li, Ul} from "./service";

const Box = styled.div`
  width: 320px;
  overflow: hidden;
  background: white;
  padding: 20px;
  position: relative;
  min-height: 400px;
`
const SVGBox = styled.div`
  position: absolute;
  width: 120%;
  left: -20px;
  top:-110px;
`
const PriceBoxx = styled.div`
  width: 100%;
  z-index: 9999;
  position: relative;
  top:10px;
`
const Price = styled.h3`
  color: white;
  font-size: 28px;
  font-weight: 700;
  padding: 0;
  z-index: 9999;
  text-align: center;
`
const Theme = styled.h3`
  color: #1701ab;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  text-align: center;
`
const ContentBox = styled.div`
  position: relative;
  top: 90px;
`
const PriceBox = ({title,list,price}) => {
    return (
        <Box>
            <SVGBox>
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="none"
                     viewBox="0 0 229.41 187.07" className="" fill="rgba(27, 166, 44, 1)">
                    <path
                        d="M161.44,1.44,48.52,24.7C21.72,30.22,0,56.42,0,83.22v94.89c0,9.79,11.83,12.25,18.76,3.9h0c9.75-11.76,23-20,36.77-22.8l105.91-21.82c37.54-7.73,68-44.44,68-82h0C229.41,17.87,199-6.29,161.44,1.44Z"></path>
                </svg>
            </SVGBox>
            <PriceBoxx>
                <Price> {price}</Price>
            </PriceBoxx>
            <ContentBox>
                <Theme>{title}</Theme>
                <Ul>
                    {
                        list.map((item,index)=>{
                            return(
                                <Li key={index}>{item}</Li>
                            )
                        })
                    }
                </Ul>
            </ContentBox>
        </Box>
    )
}
export default PriceBox;