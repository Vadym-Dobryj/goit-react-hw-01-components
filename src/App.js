import React from 'react';

import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendsList from './components/FriendsList/FriendsList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

import user from './data-base/user.json';
import statisticalData from './data-base/statistical-data.json';
import friends from './data-base/friends.json';
import transactions from './data-base/transactions.json';

function App() {
  return (
    <div className="App">
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendsList friends={friends} />;
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
