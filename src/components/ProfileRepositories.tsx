import User from '../interfaces/user';
import styles from './ProfileRepositories.module.css';

interface ProfileRepositoriesProps {
  user: User;
}
function ProfileRepositories(props: ProfileRepositoriesProps) {
  return (
    <div>
      <div className="mt-3 border-bottom">
        <input
          className={styles.repositorySerchInput + ' w-75 mb-3'}
          type="text"
          placeholder="Find a repository..."
        />
      </div>
    </div>
  );
}

export default ProfileRepositories;
