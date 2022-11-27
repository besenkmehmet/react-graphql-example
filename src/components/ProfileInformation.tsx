import { useEffect, useState } from 'react';
import User from '../interfaces/user';
import { userService } from '../services/userService';
import styles from './ProfileInformation.module.css';

interface ProfileInformationProps {
  userName: string;
}

function ProfileInformation(props: ProfileInformationProps) {
  const userName = props.userName;
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const getUser = async () => {
      const fetchedUser = await userService.fetchUserByLogin(userName);
      console.log(fetchedUser);
      setUser(fetchedUser);
    };
    getUser();
  }, [userName]);

  return (
    <div className="d-flex flex-column align-items-end me-3 position-relative ms-auto">
      <div
        className={
          styles.top +
          ' d-flex flex-column justify-content-start position-absolute'
        }
      >
        <div className={styles.profilePicture}>
          <img src={user?.avatarUrl} alt="" />
        </div>

        <div className="mt-3">
          <h4>{user?.name}</h4>
          <p>{user?.login}</p>
        </div>
        <button className={styles.followButton}>Follow</button>
        <div className="mt-3">{user?.bio}</div>
        <div className="d-flex mt-3 align-items-center">
          <span className="fw-bold me-2">{user?.followers?.totalCount}</span>
          <small className="fw-light me-2">followers</small>·
          <span className="fw-bold mx-2">{user?.following?.totalCount}</span>
          <small className="fw-light">following</small>
        </div>
      </div>
    </div>
  );
}

export default ProfileInformation;
