import styled from "styled-components";
import SingleMember from "../components/singleMember";
import { MainDiv } from "../components/singlePortfolioDetail";
import { teamMember } from "../data/teamMember";
import Layout from "./layout";

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  padding: 20px;
  background-color: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -40px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -50px;
  border: 1px solid #f6f6f6;
  border-radius: 10px;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  padding: 30px;
  background-color: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -40px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -50px;
  border: 1px solid #f6f6f6;
  border-radius: 10px;
  font-style: italic;
  font-size: 17px;

  div {
    font-style: normal;
    margin-top: 10px;
    font-size: 15px;
    color: #a29797;
  }
`;

export const AllTeam = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* flex-direction: column; */
  /* border: solid 1px red; */
  margin: 20px;
`;

export const Profile = styled.div`
  display: flex;
  justify-content: center;
  width: 200px;
  height: 200px;
  // border: solid 3px red;
  border-radius: 70%;
  overflow: hidden;

  .profileImg {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  /* border: solid 1px red; */
`;

export const Name = styled.div`
  display: flex;
  /* flex-direction: column; */
  justify-content: right;
  /* border: solid 1px red; */
`;

export const Career = styled.div`
  /* border: solid 1px red; */
  display: flex;
  flex-direction: column;
  text-align: right;
  align-items: right;
  margin: 7px 0px 7px 0px;

  p {
    color: #a29797;
    margin-bottom: 0;
    font-size: 14px;
  }
`;

export const SubText = styled.div`
  display: flex;
  justify-content: right;
  font-size: 14px;
`;

export const ImageWarpper = styled.div`
  display: flex;
  justify-content: right;
  img {
    width: 20px;
  }
`;

function Team() {
  return (
    <Layout>
      <MainDiv>
        <TextWrapper>
          많은 사람들은 실패를 두려워해 아예 시작조차 않는 경우가 많다. 그러나
          내가 보기엔 실패란 시도조차 하지 않는 것을 의미한다.
          <div>- 마리아 나브라틸로바</div>
        </TextWrapper>
        {teamMember.map((el, idx) => {
          return <SingleMember key={idx} data={el} />;
        })}
      </MainDiv>
    </Layout>
  );
}

export default Team;
