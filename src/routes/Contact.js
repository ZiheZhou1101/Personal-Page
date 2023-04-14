import React from 'react';
import styled from 'styled-components';

const StyledBody = styled.div`
display:flex;
align-items: center;
justify-content: center;
padding: 50px 200px 50px 200px;
color:#f2ebd9;
background-color: #313636;
`
const StyledLeft = styled.div`
background-color: #88ada5;
padding: 50px 50px 50px 50px;
border-radius: 20px 0 0 20px;
width: 500px;
height: 500px;
border: 10px solid #4c221b;
`
const StyledRight = styled.div`
background-color: #4c221b;
padding: 50px 50px 50px 50px;
border-radius: 0 20px 20px 0;
width: 500px;
height: 500px;
border: 10px solid #88ada5;
`
const StyledForm = styled.form`
display:flex;
flex-direction:column;
align-items: flex-end;
color:#f2ebd9;
`
const StyledInput = styled.input`
padding:5px 0 5px 0;
margin-top: 10px;
margin-bottom: 10px;
border-radius: 5px;
background-color: #f2ebd9;
`
const StyledText = styled.textarea`
margin-top: 10px;
margin-bottom: 10px;
border-radius: 5px;
background-color: #f2ebd9;
`
const StyledBtn = styled.button`
background-color: #88ada5;
margin-top: 10px;
width: 80px;
height: 80px;
border-radius: 40px;
color: #f2ebd9;
font-size: large;
`
const LinkedIn = styled.a`
text-decoration: none;
color:#f2ebd9;
`
const Contact = () => {
    return (
        <StyledBody>
            <StyledLeft>
                <h1>
                    Contact
                </h1>
                <p>Look forward to hearing from you!</p>
                <h2>Phone</h2>
                <p> +1 (514)-386-5478</p>
                <h2>Email</h2>
                <p>zihezhou1101@gmail.com</p>
                <h2>LinkedIn</h2>
                <p>
                    <LinkedIn href='https://www.linkedin.com/in/zihe-zhou-8111b4221'>https://www.linkedin.com/in/zihe-zhou-8111b4221</LinkedIn>
                </p>
                <h2>GitHub</h2>
                <p>
                    <LinkedIn href="https://github.com/ZiheZhou1101">https://github.com/ZiheZhou1101</LinkedIn>
                </p>
            </StyledLeft>
            <StyledRight>
                <StyledForm>
                    First Name
                    <StyledInput type={'text'} />
                    Last Name
                    <StyledInput type={'text'} />
                    Email*
                    <StyledInput type={'text'} />
                    Subject
                    <StyledInput type={'text'} />
                    Message
                    <StyledText rows={5} cols={20} />
                    <StyledBtn>submit</StyledBtn>
                </StyledForm>
            </StyledRight>
        </StyledBody>
    )
}
export default Contact