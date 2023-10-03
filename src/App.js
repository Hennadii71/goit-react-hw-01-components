import { Profile } from './Components/Profile/Profile.jsx';
import user from './data/user.json';

import { Statistics } from './Components/Statistics/Statistics.jsx';
import data from './data/data.json';

import { FriendList } from 'Components/FriendList/FriendList.jsx';
import friends from './data/friends.json';

import { TransactionHistory } from 'Components/TransactionHistory/TransactionHistory.jsx';
import transactions from './data/transactions.json';

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
