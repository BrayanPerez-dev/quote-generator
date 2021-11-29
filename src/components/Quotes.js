import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { SyncOutlined } from '@ant-design/icons'
import { Divider, Card, Button } from 'antd';
import 'antd/dist/antd.css'
import styled from 'styled-components'


const Quotes = () => {

    const author = useParams().name

    const [quotes, setQuotes] = useState([])


    useEffect(() => {
        const getData = () => {
            fetch(`https://quote-garden.herokuapp.com/api/v3/quotes?author=${author}&limit=10`)
                .then(res => res.json())
                .then(response => {
                    const data = response.data
                    setQuotes(data)

                })
        }
        getData()
    }, [author])
    return (
        <Wrapper>
            <Button className="btn" > <h5 >random</h5>&nbsp;<SyncOutlined className="anticon" /></Button>

            <div className="author">
                <p>{author}</p>
            </div>
            {
                quotes.map(({ quoteText, _id }, index) => (
                    <div className="quotes" key={_id}>
                        <Divider className="vertical" type="vertical" />
                        <Card key={index} className="cards" >
                            {quoteText}
                        </Card>
                    </div>
                ))
            }
            <br />

        </Wrapper>
    )
}

export default Quotes

const Wrapper = styled.div`



.author{
    display:  flex;
    justify-content: center;
    margin-top:-7em;
    
}

p{
font-style: normal;
font-weight: bold;
font-size: 36px;
line-height: 42px;

color: #333333;
}
   


.btn{
    display: flex;
    align-items:center;
    flex-flow: row wrap;
    justify-content: flex-start;
    margin: 100px;
    margin-top:2em;
    border-style: none;
    cursor: pointer;
    position: relative;
    left: 80%;
}

.anticon{
    color: initial;
}
.quotes{
    display: flex;
    justify-content: center;
    margin: 25px;
    margin-top:10px;
    
}

.vertical{
    width: 8px;
    height: auto;
    background: #F7DF94;
 }

.cards{
    width: 40%;
    height: auto;
    border-style:none;
}
@media (max-width: 620px) {
    .cards{
    width:100%;
}
 

}
`
