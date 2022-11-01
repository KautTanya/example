import styled from '@emotion/styled';

export const Statistics = styled.section`
    margin: 0 auto 30px;
    width: 500px;
    background-color: #E4E5EA;
    height: 100%;
    // display: flex;
    // flex-direction: column;
    // justify-content: space-between;


`;
export const Title = styled.h2`
  font-size: 30px;
  font-weight: 700;
  text-align: center;
  color: #16354D;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  margin: 0;
  padding: 0;
  list-style: none;
//   width: 100%;
`;

export const Item = styled.li`
//   margin: 0;
//   align-items: center;
    display: flex;
    flex-direction: column;
    background-color: #6B99C3;
    text-align: center;
    font-size: 20px;
     padding: 10px;
  flex-basis: 20%;
  &:not(:last-child) {
    border-right: 1px solid #16354D;
  }
`;
export const Label = styled.span`
    font-weight: 500;
  color: #16354D;
  font-size: 20px;
`;
export const Percentage = styled.span`
  padding-top: 8px;
  margin-top: 8px;
  color: #16354D;
  font-size: 20px;
  font-weight: 700;
`;