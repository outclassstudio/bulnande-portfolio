import styled from "styled-components";
import { dummydata } from "../data/dummydata";
import { dummydataShort } from "../data/dummydataShort";
import Layout from "./layout";
import { useState } from "react";
import { boxFade, MediaQuery, pointColor } from "../style/GlobalStyle";
import SinglePortfolio from "../components/project/singlePortfolio";
import SinglePortfolioShort from "../components/project/singlePortfolioShort";
import { FlexColumnDiv, FlexDiv } from "../style/utility.style";

export default function Project() {
  //장기프로젝트 데이터 상태
  const [data, setData] = useState(dummydata);

  //단기프로젝트 데이터 상태
  const [shortData, setShortData] = useState(dummydataShort);

  //프로젝트명으로 검색하는 함수
  const handlSearch = (e) => {
    let filtered = dummydata.filter((el) => {
      return el.title.indexOf(e.target.value) !== -1;
    });

    let filteredShort = dummydataShort.filter((el) => {
      return el.title.indexOf(e.target.value) !== -1;
    });

    setData(filtered);
    setShortData(filteredShort);
  };

  return (
    <Layout>
      <MainContainer>
        <SearchBar>
          <img src="assets/search_icon_1.png" alt="" />
          <input
            type="text"
            placeholder="프로젝트명을 입력하세요"
            onChange={handlSearch}
          />
        </SearchBar>
        <TextWrapper>
          <img src="assets/bulbu_symbol.png" alt="" />
          장기프로젝트
        </TextWrapper>
        <MainDiv className="mount">
          {data.map((el, idx) => {
            return <SinglePortfolio key={idx} data={el} />;
          })}
        </MainDiv>
        <TextWrapper>
          <img src="assets/bulbu_symbol.png" alt="" />
          단기프로젝트
        </TextWrapper>
        <MainDiv className="mount">
          {shortData.map((el, idx) => {
            return <SinglePortfolioShort key={idx} data={el} />;
          })}
        </MainDiv>
      </MainContainer>
    </Layout>
  );
}

const MainContainer = styled(FlexColumnDiv)`
  gap: 15px;
  animation: 0.7s ease-in-out ${boxFade};
  margin: 35px 0px 25px 0px;
`;

const SearchBar = styled(FlexDiv)`
  align-items: center;
  width: 1150px;
  height: 60px;
  background-color: white;
  border: 1px solid #f6f6f6;
  border-radius: 10px;
  padding: 5px 20px 5px 20px;

  img {
    width: 25px;
    height: 25px;
    margin-right: 7px;
  }

  input {
    padding: 5px;
    width: 1070px;
    border: none;
    border-radius: 5px;
  }

  input:focus {
    outline: 2px solid ${pointColor};
  }

  ${MediaQuery.middle} {
    width: 565px;
  }

  ${MediaQuery.mobile} {
    width: 370px;
    padding: 5px 20px 5px 20px;

    input {
      width: 310px;
    }
  }
`;

const MainDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  gap: 20px;

  ${MediaQuery.middle} {
    display: flex;
    flex-direction: column;
  }
`;

const TextWrapper = styled(FlexDiv)`
  display: flex;
  color: #2f2f2f;
  width: 1150px;
  padding: 15px 30px 15px 20px;
  background-color: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -40px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -50px;
  border: 1px solid #f6f6f6;
  border-radius: 10px;
  font-size: 23px;
  font-weight: bold;

  img {
    width: 35px;
    margin-right: 1px;
  }

  div {
    font-style: normal;
    margin-top: 10px;
    font-size: 15px;
    color: #a29797;
  }

  ${MediaQuery.middle} {
    width: 565px;
  }

  ${MediaQuery.mobile} {
    width: 370px;
    font-size: 18px;
    padding: 15px 30px 15px 25px;

    img {
      width: 25px;
    }
  }
`;
