import React from 'react';
import styled from 'styled-components';
import Helen from '../img/Helen.JPG';

const StyledImg = styled.img`
width: 270px;
height: 500px;
border-radius: 50px;
margin: 20px;
`
const Profile = () => {
    return (
        <div>
            <div>
                <StyledImg src={Helen} alt='Who am I?' />
            </div>
        </div>
    )
}
export default Profile;