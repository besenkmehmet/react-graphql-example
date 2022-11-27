import { useEffect, useState } from 'react';
import styles from '../assets/styles/components/Header.module.css';
import Logo from './Logo';
import { userService } from '../services/userService';
import User from '../interfaces/user';

export const headerTextItems = [
  'Pull requests',
  'Issues',
  'Codespaces',
  'Marketplace',
  'Explore',
];

interface HeaderProps {
  userSelect: (userName: string) => void;
}

function Header(props: HeaderProps) {
  let delayTimer: NodeJS.Timeout;
  const [userSearchQuery, setUserSearchQuery] = useState('');
  const [usersList, setUsersList] = useState<Array<User>>([]);
  useEffect(() => {
    const getUsers = async () => {
      const users = await userService.fetchUsers(userSearchQuery);
      console.log(users);
      setUsersList(users);
    };
    getUsers();
  }, [userSearchQuery]);

  function handleUserChange(userName: string) {
    clearTimeout(delayTimer);
    delayTimer = setTimeout(function () {
      setUserSearchQuery(userName);
    }, 300);
  }

  return (
    <div
      className={`${styles.navBar} d-flex align-items-center justify-content-md-start justify-content-center'`}
    >
      <div className="mx-4 mb-3 mt-3">
        <Logo />
      </div>
      <div className="position-relative d-none d-md-block">
        <input
          placeholder="Search user..."
          className={styles.userSearchInput}
          onChange={(e) => handleUserChange(e.target.value)}
        />
        <div
          className={`${styles.userSearchResults} position-absolute bg-white w-100 rounded-bottom border`}
        >
          {usersList?.map((item) => (
            <div
              className={`${styles.userSearchResultItem} px-3 py-2 border-bottom`}
              key={item.login}
              onMouseDown={() => props.userSelect(item.login)}
            >
              <img
                src={item.avatarUrl}
                alt=""
                height={32}
                className="rounded-circle"
              />
              <span className="ms-3">{item.login}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="d-none d-md-block ms-2">
        {headerTextItems.map((item) => (
          <a href="" className={`${styles.itemText} mx-2`} key={item}>
            <span>{item}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Header;
