import styled from "styled-components";

const Title = styled.h4`
  color: white;
  text-transform: uppercase;
  font-size: 26px;
  font-weight: 600;
`
const P = styled.div`
  color: white;
  font-size: 18px;
  display: flex;
  margin-top: 10px;
`
const Img = styled.img`
  width: 30px;
  //height: 40px;
`
const FooterLeft = () => {
    return (
        <div>
            <Title>Việt dũng design & construction</Title>
            <P>
                <div>
                    <Img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA
                    /wD/AP+gvaeTAAAA90lEQVRIie3TsS4EURTG8b1it5FoJCQ6BZ2GRkvFM+xDKLbwCloP4RVsQ6uh0pFQKRQK
                    QrMFP81J3GzMzjV2CuFLpjnn+/7n3pkznc6fEgYYtAFOOPSpI8xMC97DcYBH8Yha76fwOQwD+IJdbOMpameY
                    bwpfwmWAHrCR9dZxH70rLH8XvoKbANxitcJzHZ47rJXCN+PEcIHFCd4FnIf3EVt18B08R+C05P3GdzqJzCv2
                    qoz9bEOgWwfPst0sN0J/3LCPt8ykFJ4xcr3jYKKx6YDx+mxp+Kt6SinVZafzu09rQAq1NqCJfv+Ayi0qWdUST
                    +s3+FetPgBlXlO5kpJ6mwAAAABJRU5ErkJggg=="/>
                </div>
                <div style={{margin: "0 0 0 10px", paddingTop: "5px"}}>Address: 45a- ngõ 167- dương quảng hàm - cầu giấy
                    - hà nội
                </div>
            </P>
            <P>
                <div>
                    <Img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA
                    /wD/AP+gvaeTAAABOElEQVRIie3Vvy5DYRgH4EODRBcSEtyCUQejiMRVGBgsYjOLhcUNkF6AhJgJk0EMKgaJhdoY
                    iIjEYGkeQ89A+51G03MOQ3/jlzd5vj/53jeKuvnrYAn3qGA0L3TLz5TzQOc1p4aprOHTAAzn6MkSfk+AYSFL+LUF
                    /IhiGk5vYO2uRf1EFEWTWcGHLepvoyi6TgNuCsbxkXDVs5mg3/CNAFrJFI3hIh4a4GcM54GX8NmAn2EgD3w1cOV7
                    smwk3/DdAL6dB1zAQQDfQaGhtg/TGEwL78dRAD/GUFwzg5t4/QnLCPWJtvEiTgL4C64C69QHS+dTLT75fgKSlBrK
                    GOkUL8Tv224uOz55vIEVzf+8VaqpwDFeQvWX8GJqcIwXsS55sMBmqmjDBsawhgv1vv6m/t3mMkO7+df5AuZc43Mc
                    FtgEAAAAAElFTkSuQmCC"/>
                </div>
                <div style={{margin: "0 0 0 10px", paddingTop: "5px"}}>Hotline: 0961.211.861
                </div>
            </P>
            <P>
                <div>
                    <Img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJ
                        LR0QA/wD/AP+gvaeTAAAFHklEQVRoge2aW4hWVRTH/1tzgtRsvAR5wS4zIs1DGIkgxETgZZTMzBR8i
                        tIhe+kpy5dIMCqICCoiiCjDLvbQjdAo1CEtzAsKXQwtKgubkdExxyknx18PZx2+PbvvXL7znc+nWXD
                        Y862z1n+t/7f3t/Y6+4w0IiPSEHFlAQHjJN0uqV1Sm6RWSddKGmcm/ZK6JR2T9J2kLkl7nHP9ZeVQW
                        AAHdADbgH+oXf4G3gUWA6V9qbWSWAkc8ZK6COwFNgMrgJuBZmCMXc1Am917CvjKfGI5DNxzOQm0AJ9
                        7CfwKPApMLYA1DdgA/Obh7QBubETufuA1wF8WsBtYC4wpAbcJ6AROGfZZYHUZOYeBnC2ZWLYAzQ2IM
                        xHY6sXZVCa4A1424AvAA6WBJ8fsBAYt5otlgcYz0Q8sKgU0X9wO4HzemUktecAaSVslDUpa5pz7rM7
                        kblK0v0yUhKSLks5K6pV0wjnXE9h3SPpI0hhJq51z24oEbfF+2IWXk5XdJ4LKlCS3VPHvtHt9haoZl
                        RK7pQ4Sc4HfvURPAtvtB72VaCPdBQwkETGcuABsrzWBlebYTcHqBMwGzhlOFzA/xfZwBpFJVErz3Xk
                        TcFR27LUFSTjgoGG8DVyRYZ9KxGweMptD5GlniKoFRDt2oc0OWOhhjK1yfwqwALjPrl9yEGkCTphdd
                        vW0dQuwoQgJw3gzCQPYSHKDmUjEfB83u3eyEhhP1JFepEDv5OEcq5YYsNr0F4Dd9qX518wM3BnAEFF
                        xuCrNMF5We+sg0WQYg8Do4N4Bu/dwHfj7DGOhrx8V2LXbuKtoIEnX2NjnnBvyErhS0q2S/pVUuKRL2
                        mnjHb4yJNJm46E6Ao238Vygn6Kok+ip86nwoI1tvjIkMsvGH+sIFJdGAn38yBsSrFWO2jjLV4ZEJtt4
                        ss5gjZQ/bZzsK8ONyj8oyBRguaTXA3X45YTSCpxOuLfIObc/wz+e0fG+MiSStCySpElSrS3M6BSfn3P
                        4x7kN291DIv0WZKykvhqS+1BS2CFfCj4fU9S+hzJV0reSTjnnenPEqvpbC4n0KCIyXbURGXTOnUkzsF
                        L8Pxtgjv2Zt8BMs7HbV4br+biNrTlBy5DZNh5NtapInNtPvjKckSOSlkqaK+mDWpIBHgt0fc65V+MPw
                        CRJ1brpxTbmnZF5Xq7VBVhq2//XeRCBVQnNH8DxwHZ2ii3AXTljxi3KsA44nJHdkgYkzQOmOef+yMA9
                        KunZQNcsqTPFp1fSa1X0BzJiCZiuaLWcl/RllvH7xnhzFnCCf0vGjPxQBNcw4hOd9/IYLzDjPmBCgWA
                        NIQJcDZwxjDvD+9V24S8U1fUJktYVCdogWa+osz7snNuZZSxJApZ5s5L6sFPFt/QZAaYDp82/o1bn+Dh
                        oJ5DVP/l+pRIBRhE9TQLsqMU3BrieygFduEek+ZVNZKO3OmbU4uuDLAcu2bU+p09pRIAHiZ7RLwGras0
                        /BNtkCQwB9+ewL4UIsM4IADxZNP8Q9AWPzDOknHfVS4ToNd3THonnSiHhBXjEA98PtCTYFSYC3ED0HhK
                        LVc5MVAl0L5VNacBm6rp6iQBTgeepvA85DaxoCAkv6EzgEyoyALwEtAOjayEC3Aa8wvCTx48pWp0KElo
                        CfMNw6QU+zSDSA7xB5bw3ln3AkstGIBSbibeo7Dmx5GnjzxG9WG1Pws8rqcf9ecQ51yWpC2hS9C8c8yXN
                        kRSezQ4pavu/V/RQtEfRv3AM1pvDiIxIA+U/hQwSakBbB3QAAAAASUVORK5CYII="/>
                </div>
                <div style={{margin: "0 0 0 10px", paddingTop: "5px"}}>
                    <a style={{color: "#ffffff"}}
                       href={"https://www.facebook.com/kientrucvaxaydungvietdung"}>https://www.facebook.com/kientrucvaxaydungvietdung</a>
                </div>
            </P>
        </div>
    )
}
export default FooterLeft;