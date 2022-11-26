import { useEffect, useState } from 'react';
import Repository from '../interfaces/repository';
import User from '../interfaces/user';
import { userService } from '../services/userService';
import styles from './ProfileRepositories.module.css';

interface ProfileRepositoriesProps {
  user: User;
}
function ProfileRepositories(props: ProfileRepositoriesProps) {
  const user = props.user;
  const [repositoryList, setRepositoryList] = useState<Array<Repository>>([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const getRepositories = async () => {
      const repositories = await userService.fetchUserRepositories(
        user.login,
        searchQuery
      );
      console.log(repositories);
      setRepositoryList(repositories);
    };
    getRepositories();
  }, [searchQuery]);

  return (
    <div>
      <div className="mt-3 border-bottom">
        <input
          className={styles.repositorySerchInput + ' w-75 mb-3'}
          type="text"
          placeholder="Find a repository..."
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    </div>
  );
}

export default ProfileRepositories;
