import PropTypes from 'prop-types';
import {Item, Status, Avatar, Name} from './FriendListItem.styled';

export const FriendListItem = ({avatar, name, isOnline, id}) => {
               
          return(
            <Item key = {id}>
            <Status
            style={{
              backgroundColor: getBgColor(isOnline),
            }}>{isOnline}</Status>
            <Avatar src={avatar} alt="User avatar" width="48" />
            <Name>{name}</Name>
            </Item>
          )
      
           
      

    
};
const getBgColor = isOnline => {
  switch (isOnline) {
    case true:
      return 'green';
    case false:
      return 'red';
    default:
      return 'pink';
  }
};
FriendListItem.propTypes = {
   
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    

};

