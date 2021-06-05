import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { ArrowRightOutlined , SyncOutlined } from '@ant-design/icons'
import { Divider,Card} from 'antd';
import 'antd/dist/antd.css'
import styled from 'styled-components'


const Quotes = () => {

    const author = useParams().name

    const [quotes,setQuotes] = useState([])
    const  getData  = () => {
       fetch(`https://quote-garden.herokuapp.com/api/v3/quotes?author=${author}&limit=10`)
       .then(res => res.json())
       .then(response =>{
       const data = response.data
       setQuotes(data)

    })
    }

    useEffect(() => {
        getData()
    }, [author])
    return (
        <Wrapper>
             <div  className="boton" >
            <h5 >random</h5>&nbsp;<SyncOutlined/>
            </div>
            <div className="author"> 
            <p>{author}</p>
            </div>
     
                {
                    quotes.map(({quoteText,_id},index) => (
                     <>

                    <div className="quotes" >
                    <Divider className="vertical" type="vertical"  />
                    <Card key={index} className="cards" >
                     {quoteText}
                    </Card>
                    </div>
                     </>

                    ))
                }
                <br/>
          
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
   

.boton{
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-end;
    align-items:baseline;
    margin: 100px;
    margin-top:1em;

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

`
