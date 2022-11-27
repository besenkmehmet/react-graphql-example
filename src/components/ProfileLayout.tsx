import ProfileInformation from './ProfileInformation';
import styles from '../assets/styles/components/ProfileLayout.module.css';
import ProfileRepositories from './ProfileRepositories';

interface ProfileLayoutProps {
  userName: string;
}
function ProfileLayout({ userName }: ProfileLayoutProps) {
  return (
    <div
      className={`${styles.layoutGrid} d-flex justify-content-center d-lg-grid`}
    >
      <ProfileInformation userName={userName} />
      <ProfileRepositories userName={userName} />
    </div>
  );
}

export default ProfileLayout;
