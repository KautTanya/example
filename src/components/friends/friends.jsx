import PropTypes from 'prop-types';
import {FriendsList} from './Friends.styled';

import { FriendListItem } from 'components/friendsItem/FriendListItem';
export const FriendList = ({friends}) => {
  return(
    <FriendsList>
      {friends.map(({ avatar, name, isOnline, id }) =>{
        return(
          <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
        )
      })}
         
    </FriendsList>

  )
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

