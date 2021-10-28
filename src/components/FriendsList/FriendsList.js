import PropTypes from 'prop-types';
// import defaultImg from "../../default-images/unnamed.jpg";
import styles from './FriendsList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem';

const FriendsList = ({ friends }) => {
  console.log(friends);
  return (
    <ul className={styles.friendList}>
      {friends.map(friend => (
        <FriendListItem key={friend.id} friend={friend} />
      ))}
    </ul>
  );
};

export default FriendsList;

// FriendsList.defaultProps = {
//   avatar: defaultImg,
// };

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
