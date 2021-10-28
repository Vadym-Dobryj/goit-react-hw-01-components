import React from 'react';
import styles from './FriendsListItem.module.css';

const FriendListItem = ({ friend }) => {
  return (
    <li className={styles.item}>
      <span className={friend.isOnline ? styles.online : styles.offline}>
        {friend.isOnline}
      </span>

      <img
        className={styles.avatar}
        src={friend.avatar}
        alt={friend.name}
        width="48"
      />
      <p className={styles.name}>{friend.name}</p>
    </li>
  );
};

export default FriendListItem;
