/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import Sudoku from '../img/Nine.jpeg';

const StyledBody = styled.div`
display:flex;
padding: 50px 200px 50px 200px;
background-color: #bccbb0; 
`
const ProjectOne = styled.div`
background-color: rgb(117,108,75);
`
const ProjectTwo = styled.div`
background-color: #79836c;
`
const ProjectThree = styled.div`
background-color: #92905d;
`
const ProjectFour = styled.div`
background-color: #ac9f8a;
`
const ProjectFive = styled.div`
background-color: #c6beb1;
`
const ProjectSix = styled.div`
background-color: #bec2b3;
`
const ProjectSeven = styled.div`
background-color: #919177;
`
const ProjectEight = styled.div`
background-color: #9d9d82;
`
const ProjectNine = styled.div`
background-color: #b3b59c;
`
const ProjectTen = styled.div`
background-color: #a9a886;
`
const ProjectEleven = styled.div`
background-color: #bfc096;
`
const ProjectTwelve = styled.div`
background-color: #e0dfc6;
`
const ProjectThirteen = styled.div`
background-color: #bfc1a9;
`
const ProjectFourteen = styled.div`
background-color: #a8b092;
`
const ProjectFifteen = styled.div`
background-color: #b3bda9;
`
const ProjectSixteen = styled.div`
background-color: #becab7;
`
const ProjectSeventeen = styled.div`
background-color: #cad7c5;
`
const ProjectEighteen = styled.div`
background-color: #d5e3d4;
`
const ProjectNineteen = styled.div`
background-color: #cac5a0;
`
const ProjectTwenty = styled.div`
background-color: #d5c8a0;
`
const ProjectTwentyOne = styled.div`
background-color:#dfd6b8;
`
const ProjectTwentyTwo = styled.div`
background-color: #eae4d1;
`
const ProjectTwentyThree = styled.div`
background-color: #ebeddf;
`
const ProjectTwentyFour = styled.div`
background-color: #ebeee8;
`

const StyledImg = styled.img`
width: 400px;
height: 150px;
`
const Project = () => {
    return (
        <StyledBody>
            <div>
                <h1>Projects</h1>
                <ProjectOne>Project1</ProjectOne>
                <ProjectTwo>Project2</ProjectTwo>
                <ProjectThree>Project3</ProjectThree>
                <ProjectFour>Project4</ProjectFour>
                <ProjectFive>Project5</ProjectFive>
                <ProjectSix>Project6</ProjectSix>
                <ProjectSeven>Project7</ProjectSeven>
                <ProjectEight>Project8</ProjectEight>
                <ProjectNine>Project9</ProjectNine>
            </div>
        </StyledBody>
    )
}
export default Project