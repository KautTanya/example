import styled from '@emotion/styled';

export const Profile = styled.div`
    margin: 30px auto;
    width: 350px;
    background-color: #E4E5EA;
    display: flex;
    flex-direction: column;
    justify-content: space-between;


`;
export const Description = styled.div`
text-align: center;
padding: 25px;
color: #16354D;
`;
export const Avatar = styled.img`
  width: 150px;
  height: 150px;
  display: block;
  margin: 0 auto;

`;
export const Name = styled.p`
    font-size: 35px;
    font-weight: 700;
    margin-top: 15px;
    margin-bottom: 5px;
`;
export const Tag = styled.p`
    font-size: 25px;
    font-weight: 500;
    margin-bottom: 5px;
    margin-top: 10px;
    opacity: 0.7;
`;
export const Location = styled.p`
    font-size: 25px;
    font-weight: 500;
    margin: 0 auto;
    opacity: 0.7;
`;
export const Stats = styled.ul`
   display: flex;
   margin: 0;
   padding: 0;
   list-style: none;
   background-color: #6B99C3;
   border-top: 1px solid #16354D;
`;
export const StatsItem = styled.li`
    display: flex;
    flex-direction: column;
    flex-basis: 33%;
    text-align: center;
    padding: 20px;
    &:not(:last-child){
        border-right: 1px solid #16354D;
    }
`;
export const Quantity = styled.span`
    font-size: 20px;
    font-weight: 500;

`;
export const Label = styled.span`
    font-size: 20px;
    font-weight: 500;

`;