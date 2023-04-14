import React from 'react';
import styled from 'styled-components';

const StyledBody = styled.div`
background-color: #789263;
color: #e9e8ed;
padding: 50px 200px 50px 200px;
`
const StyledSkills = styled.div`
display: flex;
justify-content: space-between;
border-bottom: 5px double #e9e8ed;
margin-bottom: 30px;
`
const Divs = styled.div`
background-color: #e9e8ed;
color:#789263;
padding: 5px 30px 5px 30px;
margin-left: 30px;
margin-bottom: 25px;
border-radius: 10px;
`
const StyledWork = styled.div`
display: flex;
justify-content: space-between;
border-bottom: 5px double #e9e8ed;
margin-bottom: 30px;
`
const StyledEduc = styled.div`
display: flex;
justify-content: space-between;
`
const WorkTitle = styled.div`
display:flex;
align-items: center;
justify-content: space-between;
`
const WorkExp = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
const Edu = styled.div`
border: 1px solid #789263;
border-radius: 10px;
margin: 15px 0 15px 0;
padding: 0 10px 0 10px;
`
const EduTime = styled.div`
display: flex;
width: 250px;
flex-direction: column;
align-items: center;
`
const EduTimeline = styled.div`
margin-top: 200px;
`
const SkillSec = styled.div`
display: flex;
padding: 20px 0 20px 0;
`
const SkillDiv = styled.div`
border:1px solid #789263;
border-radius: 10px;
padding-left: 10px;
padding-right: 10px;
margin-right: 10px;
margin-left: 15px;
`
const Resume = () => {
    return (
        <StyledBody>
            <StyledSkills>
                <div>
                    <h1>Skills</h1>
                </div>
                <Divs>
                    <SkillSec>
                        <SkillDiv>
                            <h3>Front-end Development</h3>
                            <ul>
                                <li>React</li>
                                <li>Git</li>
                                <li>TypeScript</li>
                                <li>Redux</li>
                                <li>MUI</li>
                                <li>Storybook</li>
                                <li>Scrum</li>
                            </ul>
                        </SkillDiv>
                        <SkillDiv>
                            <h3>Programming Language</h3>
                            <ul>
                                <li>JavaScript</li>
                                <li>HTML/CSS</li>
                                <li>Python</li>
                                <li>C</li>
                                <li>C++</li>
                                <li>SQL</li>
                                <li>MATLAB</li>
                            </ul>
                        </SkillDiv>
                        <SkillDiv>
                            <h3>Data Analysis and Modeling</h3>
                            <ul>
                                <li>SAS</li>
                                <li>Stata</li>
                                <li>GAMS</li>
                                <li>Lingo</li>
                                <li>CPLEX</li>
                                <li>Excel</li>
                            </ul>
                        </SkillDiv>
                    </SkillSec>
                </Divs>
            </StyledSkills>
            <StyledWork>
                <WorkExp>
                    <h1>Work Experience</h1>
                    <span>
                        May 2022 ~ Aug 2022
                    </span>
                </WorkExp>
                <Divs>
                    <WorkTitle>
                        <h3>
                            Distribution Intern
                        </h3>
                        <h4>NFI Industries</h4>
                    </WorkTitle>
                    <span>Belleville, Ontario</span>
                    <ul>
                        <li>
                            Conduct time studies, create metrics tracking, create efficiency reports for management.
                        </li>
                        <li>
                            Responsible for daily shipment tracking and tracing to ensure timely delivery of goods.
                        </li>
                        <li>
                            Proactively communicates with all clients regarding project plan exceptions and requests.
                        </li>
                        <li>
                            Coordinates with warehouse and office team operational readiness of racking and pack stations.
                        </li>
                        <li>
                            Compiles and submits data as needed for daily, weekly and monthly reports.
                        </li>
                        <li>
                            Effective communication with internal and external clients via phone, email and team meetings.
                        </li>
                    </ul>
                </Divs>
            </StyledWork>
            <StyledEduc>
                <EduTime>
                    <h1>Education</h1>
                    <EduTimeline>Aug 2021 ~ May 2023</EduTimeline>
                    <EduTimeline>Sep 2017 ~ Jun 2021</EduTimeline>
                </EduTime>
                <Divs>
                    <Edu>
                        <h3>Universite de Montreal</h3>
                        <h4>Master of Science in Global Supply Chain Management</h4>
                        <h4>GPA: 3.84</h4>
                        <h4>
                            Main Courses:
                        </h4>
                        <ul>
                            <li>Quantitave Methods</li>
                            <li>Optimization Models</li>
                            <li>Fundamental of Optimization</li>
                            <li>Decision Analysis</li>
                            <li>Supply Chain Analytics</li>
                            <li>Decision Support Tools</li>
                        </ul>
                    </Edu>
                    <Edu>
                        <h3>Nanjing University of Aeronautics and Astronautics</h3>
                        <h4>Bachelor of Science in Mathematics</h4>
                        <h4>GPA: 3.5 (top 20%)</h4>
                        <h4>Main Courses:</h4>
                        <ul>
                            <li>Data Structure and Algorithm Design</li>
                            <li>Database Principle</li>
                            <li>Machine Learning and Applications</li>
                            <li>Operating Systems Principle and Practice</li>
                            <li>Programming Language</li>
                            <li>Artificial Intelligence</li>
                            <li>Data Analysis and Mining</li>
                            <li>Mathematical Modeling</li>
                            <li>Mathematical Analysis</li>
                        </ul>
                    </Edu>
                </Divs>
            </StyledEduc>
        </StyledBody>
    )
}
export default Resume