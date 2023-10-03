import { Profile } from './Components/Profile/Profile.jsx';
import user from './Components/Profile/user.json';

import { Statistics } from './Components/Statistics/Statistics.jsx';
import data from './Components/Statistics/data.json';

import { FriendList } from 'Components/FriendList/FriendList.jsx';
import friends from './Components/FriendList/friends.json';

import { TransactionHistory } from 'Components/TransactionHistory/TransactionHistory.jsx';
import transactions from 'Components/TransactionHistory/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="UPLOAD STATS" stats={data} />

      <FriendList friends={friends} />

      <TransactionHistory transactions={transactions} />
    </div>
  );
};
