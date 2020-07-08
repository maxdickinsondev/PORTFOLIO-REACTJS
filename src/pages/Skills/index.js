import React from 'react';

import { SkillsTag, Container, Title, SkillsContent,
    Card, Label, Progress, Inner
} from './styles';

import Portifolio from '../../pages/Portifolio';

export default function Skills() {
    return (
        <>
            <SkillsTag id="skills">
                <Container>
                    <Title>Skills</Title>

                    <SkillsContent>
                        <Card>
                            <Label>JavaScript</Label>
                            <Progress>
                                <Inner style={{ width: '80%' }}>
                                        
                                </Inner>
                            </Progress>
                        </Card>

                        <Card>
                            <Label>ReactJS</Label>
                            <Progress>
                                <Inner style={{ width: '80%' }}>
                                        
                                </Inner>
                            </Progress>
                        </Card>

                        <Card>
                            <Label>React Native</Label>
                            <Progress>
                                <Inner style={{ width: '80%' }}>
                                        
                                </Inner>
                            </Progress>
                        </Card>

                        <Card>
                            <Label>NodeJS</Label>
                            <Progress>
                                <Inner style={{ width: '77%' }}>
                                        
                                </Inner>
                            </Progress>
                        </Card>

                        <Card>
                            <Label>Hooks</Label>
                            <Progress>
                                <Inner style={{ width: '65%' }}>
                                        
                                </Inner>
                            </Progress>
                        </Card>

                        <Card>
                            <Label>Redux</Label>
                            <Progress>
                                <Inner style={{ width: '80%' }}>
                                        
                                </Inner>
                            </Progress>
                        </Card>

                        <Card>
                            <Label>HTML</Label>
                            <Progress>
                                <Inner style={{ width: '86%' }}>
                                        
                                </Inner>
                            </Progress>
                        </Card>

                        <Card>
                            <Label>CSS</Label>
                            <Progress>
                                <Inner style={{ width: '75%' }}>
                                        
                                </Inner>
                            </Progress>
                        </Card>
                    </SkillsContent>
                </Container>
            </SkillsTag>

            <Portifolio />
        </>
    );
}