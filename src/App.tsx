import { useState } from 'react';
import Header from './components/Header';
import ProfileLayout from './components/ProfileLayout';
import ProfileTabs from './components/ProfileTabs';

function App() {
  const [userName, setUserName] = useState('besenkmehmet');
  return (
    <div>
      <Header
        userSelect={(userName) => {
          setUserName(userName);
        }}
      />
      <ProfileTabs />
      <ProfileLayout userName={userName} />
    </div>
  );
}

export default App;
