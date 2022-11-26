import { useEffect, useState } from 'react';
import Repository from '../interfaces/repository';
import User from '../interfaces/user';
import { userService } from '../services/userService';
import styles from './ProfileRepositories.module.css';
import { BiGitRepoForked } from 'react-icons/bi';
import dayjs from 'dayjs';

function formatDate(date: string) {
  return dayjs(date).format('MMMM D');
}

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
      {repositoryList.length ? (
        repositoryList.map((item) => (
          <div className="mt-4 border-bottom pb-4" key={item.id}>
            <div className="d-flex justify-content-start">
              <a className="font-weight-bold" href="">
                {item.name}
              </a>
              <span
                className={styles.customBadge + ' my-auto ms-2 border px-2'}
              >
                Public
              </span>
            </div>
            <div className="mt-1 w-50 font-weight-light">
              <small className="">{item.description}</small>
            </div>
            <div className="d-flex align-items-center mt-3">
              {item.languages &&
                item.languages?.edges?.map((language) => (
                  <div
                    className="d-flex me-4 align-items-center"
                    key={language.node.name}
                  >
                    <div
                      className={styles.languageColor + ' me-1'}
                      style={{ backgroundColor: language.node.color }}
                    ></div>
                    <small className="font-weight-light">
                      {language.node.name}
                    </small>
                  </div>
                ))}
              {item.forkCount && item.languages && (
                <div className={'d-flex mt-auto me-4'}>
                  <BiGitRepoForked />
                  <small className="ms-1">{item.forkCount}</small>
                </div>
              )}
              {item.updatedAt && (
                <small className="font-weight-light">
                  Updated on {formatDate(item.updatedAt ?? '')}
                </small>
              )}
            </div>
          </div>
        ))
      ) : (
        <div className="d-flex justify-content-center h4 mt-5 ">
          {user.login} does not have any repositories that match.
        </div>
      )}
    </div>
  );
}

export default ProfileRepositories;
