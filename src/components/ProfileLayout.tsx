import ProfileInformation from './ProfileInformation';
import styles from './ProfileLayout.module.css';
import ProfileRepositories from './ProfileRepositories';

interface ProfileLayoutProps {
  userName: string;
}
function ProfileLayout(props: ProfileLayoutProps) {
  return (
    <div className={styles.layoutGrid}>
      <ProfileInformation userName={props.userName} />
      <ProfileRepositories userName={props.userName} />
    </div>
  );
}

export default ProfileLayout;
