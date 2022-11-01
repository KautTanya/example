import PropTypes from 'prop-types';
import {FriendsList, Item, Status, Avatar, Name} from './Friends.styled';

export const FriendList = ({friends}) => {
    return(
      <FriendsList>
        {friends.map(friend =>{
          return(
            <Item key = {friend.id}>
            <Status
            style={{
              backgroundColor: getBgColor(friend.isOnline),
            }}>{friend.isOnline}</Status>
            <Avatar src={friend.avatar} alt="User avatar" width="48" />
            <Name>{friend.name}</Name>
            </Item>
          )
        })}
           
      </FriendsList>

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
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};

