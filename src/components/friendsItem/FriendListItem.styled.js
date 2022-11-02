import styled from '@emotion/styled';

export const Item = styled.li`
display: flex;
justify-content: center;
background-color: #E4E5EA;
  align-items: center;
  font-size: 20px;
  &:not(:last-child) {
    margin-bottom: 5px;
  }
  flex-basis: 20%;
  padding: 20px;
`;
export const Status = styled.span`
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 10px;
  margin-bottom: 10px;

`;
export const Avatar = styled.img`
  display: block;
  margin-right: 30px;
  margin-left: 10px;
`;
export const Name = styled.p``;