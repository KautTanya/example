import user from '../json/user';
import data from '../json/data';
import friends from '../json/friends';
import transactions from '../json/transactions';

import { ProfileCard } from 'components/profile/profile';
import { StatisticsCard} from 'components/statistic/statistics';
import { FriendList } from 'components/friends/friends';
import {TransactionHistory} from 'components/transactions/transactions';

export const App = () => {
  return (
    <div
      style={{
        margin: '0 auto',
        display: 'flex',
        width: '1200px',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '600px',
      
        }}>
            <ProfileCard
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
          />

          <StatisticsCard title="Upload stats" stats={data} />
          <FriendList friends={friends} />
      </div>
 
    
    
  <TransactionHistory items={transactions} />
      
    </div>
    
    
    
  
  );
};
