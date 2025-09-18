import React from "react";

import {
  SkillsTag,
  Container,
  Title,
  SkillsContent,
  Card,
  Label,
  Progress,
  Inner,
} from "./styles";

import Portifolio from "../../pages/Portifolio";

export default function Skills() {
  return (
    <>
      <SkillsTag id="skills">
        <Container>
          <Title>Tecnologias</Title>

          <SkillsContent>
            <Card>
              <Label>TypeScript</Label>
              <Progress>
                <Inner style={{ width: "90%" }}></Inner>
              </Progress>
            </Card>

            <Card>
              <Label>JavaScript</Label>
              <Progress>
                <Inner style={{ width: "90%" }}></Inner>
              </Progress>
            </Card>

            <Card>
              <Label>React.js</Label>
              <Progress>
                <Inner style={{ width: "90%" }}></Inner>
              </Progress>
            </Card>

            <Card>
              <Label>React Native</Label>
              <Progress>
                <Inner style={{ width: "90%" }}></Inner>
              </Progress>
            </Card>

            <Card>
              <Label>Next.js</Label>
              <Progress>
                <Inner style={{ width: "90%" }}></Inner>
              </Progress>
            </Card>

            <Card>
              <Label>Micro Front-end</Label>
              <Progress>
                <Inner style={{ width: "90%" }}></Inner>
              </Progress>
            </Card>

            <Card>
              <Label>Node.js</Label>
              <Progress>
                <Inner style={{ width: "90%" }}></Inner>
              </Progress>
            </Card>

            <Card>
              <Label>TailwindCSS</Label>
              <Progress>
                <Inner style={{ width: "90%" }}></Inner>
              </Progress>
            </Card>

            <Card>
              <Label>HTML</Label>
              <Progress>
                <Inner style={{ width: "90%" }}></Inner>
              </Progress>
            </Card>

            <Card>
              <Label>CSS</Label>
              <Progress>
                <Inner style={{ width: "90%" }}></Inner>
              </Progress>
            </Card>
          </SkillsContent>
        </Container>
      </SkillsTag>

      <Portifolio />
    </>
  );
}
