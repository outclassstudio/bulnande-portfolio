import styled from "styled-components";

const MainDiv = styled.div`
  background-color: rgba(58, 58, 58, 0.3);
  position: fixed;
  top: 0%;
  left: 0%;
  bottom: 0%;
  right: 0%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1000px;
  }
`;

const Photo = styled.img`
  width: 1000px;
`;

function PhotoModal({ handleOpenPhoto, data, idx }) {
  return (
    <MainDiv onClick={handleOpenPhoto}>
      <div>
        <Photo src={data[idx]} alt="" />
      </div>
    </MainDiv>
  );
}

export default PhotoModal;
