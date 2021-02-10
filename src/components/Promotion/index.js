import React from "react"
import styled from "styled-components"
import promotion from "/static/promotion.jpeg"

const Container = styled.div`
	object-fit: cover;
	display: flex;
	flex-direction: row;
`

const Img = styled.img`
	height: 100px;
`

const Text = styled.div`
	color: #657067;
	font-size: .9rem;
	transform: rotate(-90deg);
	padding: 10px;
`

const Promotion = () => {
  return (
    <Container>
    	<a href="https://notionpress.com/read/our-days-a-survival-odyssey">
    		<Img src={promotion} alt="promotion" />
    	</a>
    	<Text><span>PROMOTION</span></Text>
    </Container>
  )
}

export default Promotion
