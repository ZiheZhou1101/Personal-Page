import React from 'react';
import styled from 'styled-components';
import Profile from '../components/Profile';

const StyledBody = styled.div`
display:flex;
align-items: center;
background-color:#313636;
`
const StyledProfile = styled.div`
margin-left: 250px;
`
const StyledIntro = styled.div`
margin-left: 30px;
padding: 10px 50px 20px 50px;
background-color:#753735;
color:#f2ebd9;
width: 500px;
border-radius: 30px;
text-align: justify;
`
const Home = () => {
    return (
        <StyledBody>
            <StyledProfile>
                <Profile />
            </StyledProfile>
            <StyledIntro>
                <h1>
                    About me
                </h1>
                <p>
                    Hello, my name is Zihe. I am a hardworking and thoughtful individual with excellent time-management skills. I excel in problem solving and have a positive, optimistic outlook.
                </p>
                <p>
                    In Addition, I am a strong team leader and also skilled in self-study. My expertise in programming and algorithm, along with my thorough knowledge in these areas, makes me a valuable asset to any team.
                </p>
            </StyledIntro>
        </StyledBody>
    )
}
export default Home;