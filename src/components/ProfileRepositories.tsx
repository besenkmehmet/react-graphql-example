import { useEffect, useState } from 'react';
import Repository from '../interfaces/repository';
import { userService } from '../services/userService';
import styles from './ProfileRepositories.module.css';
import { BiGitRepoForked } from 'react-icons/bi';
import dayjs from 'dayjs';

function formatDate(date: string) {
  return dayjs(date).format('MMMM D');
}

interface ProfileRepositoriesProps {
  userName: string;
}
function ProfileRepositories(props: ProfileRepositoriesProps) {
  let delayTimer: NodeJS.Timeout;
  const userName = props.userName;
  const [repositoryList, setRepositoryList] = useState<Array<Repository>>([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const getRepositories = async () => {
      const repositories = await userService.fetchUserRepositories(
        userName,
        searchQuery
      );
      console.log(repositories);
      setRepositoryList(repositories);
    };
    getRepositories();
  }, [searchQuery, userName]);

  function handleQueryChange(query: string) {
    clearTimeout(delayTimer);
    delayTimer = setTimeout(function () {
      setSearchQuery(query);
    }, 300);
  }

  return (
    <div className="ms-4 ms-lg-0">
      <div className="mt-3 border-bottom">
        <input
          className={styles.repositorySerchInput + ' w-75 mb-3'}
          type="text"
          placeholder="Find a repository..."
          onChange={(e) => handleQueryChange(e.target.value)}
        />
      </div>
      {repositoryList.length ? (
        repositoryList.map((item) => (
          <div className="mt-4 border-bottom pb-4" key={item.id}>
            <div className="d-flex justify-content-start">
              <a className="fw-bold fs-5 text-decoration-none" href="">
                {item.name}
              </a>
              <span
                className={styles.customBadge + ' my-auto ms-2 border px-2'}
              >
                Public
              </span>
            </div>
            <div className="mt-1 w-50 fw-light">
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
                    <small className="fw-light">{language.node.name}</small>
                  </div>
                ))}
              {
                <div className={'d-flex align-items-center me-4'}>
                  <BiGitRepoForked />
                  <small className="ms-1">{item.forkCount}</small>
                </div>
              }
              {item.updatedAt && (
                <small className="fw-light">
                  Updated on {formatDate(item.updatedAt ?? '')}
                </small>
              )}
            </div>
          </div>
        ))
      ) : (
        <div className="d-flex justify-content-center h4 mt-5 ">
          {userName} does not have any repositories that match.
        </div>
      )}
    </div>
  );
}

export default ProfileRepositories;
