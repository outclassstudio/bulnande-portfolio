import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./layout";
import AboutFirst from "../components/about/first";
import AboutSecond from "../components/about/second";
import AboutThird from "../components/about/third";
import AboutFourth from "../components/about/fourth";

function About() {
  return (
    <Layout>
      <AlignDiv>
        <AboutFirst />
        <AboutSecond />
        <AboutThird />
        <AboutFourth />
      </AlignDiv>
    </Layout>
  );
}

export default About;

export const AlignDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;
