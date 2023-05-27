import { Profile } from 'components/Profile/profileee';
import { Statistics } from 'components/Statistics/statisticsee';
import { FriendList } from 'components/FriendList/friendlistee';
import { TransactionHistory } from 'components/TransactionHistory/transactionhistoryee';
import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';

export const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistics title="Upload stats" data={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
};
