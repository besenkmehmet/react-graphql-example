import ProfileInformation from './ProfileInformation';
import styles from './ProfileLayout.module.css';

function ProfileLayout() {
  return (
    <div className={styles.layoutGrid}>
      <ProfileInformation
        user={{
          login: 'Test',
          avatarUrl:
            'https://avatars.githubusercontent.com/u/62817155?s=96&v=4',
          followers: {
            totalCount: 50,
          },
          following: {
            totalCount: 100,
          },
        }}
      />
    </div>
  );
}

export default ProfileLayout;
