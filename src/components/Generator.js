import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";
import { ArrowRightOutlined , SyncOutlined } from '@ant-design/icons'
import { Divider,Card} from 'antd';
import 'antd/dist/antd.css'
const Generator = () => {


    const [quote, setQuote] = useState([])
    const getData = () => {

        fetch('https://quote-garden.herokuapp.com/api/v3/quotes/random')
            .then(res => res.json())
            .then(json => {

                const { quoteAuthor, quoteGenre, quoteText, _id } = json.data[0]

                const data = {
                    author: quoteAuthor,
                    genre: quoteGenre,
                    text: quoteText,
                    id: _id,

                }
                setQuote(data)
            })

    }
    useEffect(() => {
        getData()
    }, [])

    return (
        <Wrapper>
            <div  className="boton" onClick={getData}>
            <h5 >random</h5>&nbsp;<SyncOutlined/>
            </div>
            <div className="divi-prin">
            <Divider className="vertical" type="vertical" />
                 
                <Card className="principal">
                <p className="font">
                    { quote.text}
                </p>
                </Card>
             </div>
             
             <div className="details">
             <Link to={`/Quotes/${quote.author}`}>
                <Card className="carta">
                  <div className="f1">
                 {quote.author}
                  </div>
                  <div className="f2">
                  {quote.genre}
                  </div>
                  <ArrowRightOutlined className="Arrow"/>
                </Card>
                </Link>
            </div>
            
    
        </Wrapper>
    )
}

const Wrapper = styled.div`


.boton{
    display: flex;
    align-items:center;
    flex-flow: row wrap;
    justify-content: flex-end;
    margin: 100px;
    margin-top:2em;
    cursor: pointer;
    transition: all 200ms  ;

}
.divi-prin{
    display: flex;
    justify-content: center;
    margin-top: 1em;
}

.principal{
    width:40%;
    height:50%;
}
.vertical{
    width: 8px;
    height: auto;
    background: #F7DF94;
 }

.details{
    margin-top:5em;
    display: flex;
    justify-content: center;
}
.Arrow{
    margin-left: 280px;
    background: #F2F2F2;
    margin-top:-20em
}

.carta{
    
    background-color: white;
  border: 2px solid white;
  border-radius: 27px;
  color: white;
  cursor: pointer;
  font-size: 20px;
  width: auto;
   height: auto;
  padding: 15px 30px;
  text-transform: uppercase;
  transition: all 200ms  ; 
}
.carta:hover {
    background-color: black;
    color: black;
    outline: 0;
}
.carta:focus  {
    background-color: black;
    color: black;
    outline: 0;
}
.f1{
    font-family: Raleway;
font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 28px;
color: #4F4F4F;
}
.f2{
    font-family: Raleway;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 16px;
color:#828282;
}
 .font{
    font-style: normal;
    font-size: 26px;
    line-height: 120%;
    color: #000000;
 }

 @media (max-width: 475px) {
  .carta {
    padding: 0px;
  }
}
@media (max-width: 320px) {
  .details {
    width: 400px
  }
}
`


export default Generator
