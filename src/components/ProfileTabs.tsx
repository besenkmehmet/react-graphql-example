import styles from '../assets/styles/components/ProfileTabs.module.css';
import { BsBook } from 'react-icons/bs';
import { BsJournalBookmark } from 'react-icons/bs';
import { AiOutlineProject, AiOutlineStar } from 'react-icons/ai';
import { FiPackage } from 'react-icons/fi';

interface ProfileTabsProps {
  repositoryCount?: number;
}
function ProfileTabs({ repositoryCount }: ProfileTabsProps) {
  return (
    <div
      className={
        styles.tabsWrapper +
        ' mt-4 d-flex justify-content-center border-bottom sticky-top bg-white pb-1 overflow-scroll'
      }
    >
      <a
        className={`${styles.tabContainer} d-flex align-item-center mx-3 p-1 mb-2`}
        href=""
      >
        <BsBook size={16} className="me-2 my-auto" />
        <span>Overview</span>
      </a>
      <div className="d-flex flex-column">
        <a
          className={`${styles.tabContainer} d-flex align-item-center mx-3 p-1 mb-2`}
          href=""
        >
          <BsJournalBookmark size={16} className="me-2 my-auto" />
          <span>Repositories</span>
          {repositoryCount != null && repositoryCount != 0 && (
            <div
              className={`${styles.tabCount} rounded-circle d-flex justify-content-center align-items-center ms-2 px-1`}
            >
              {repositoryCount}
            </div>
          )}
        </a>

        <div className={styles.underline}></div>
      </div>

      <a
        className={`${styles.tabContainer} d-flex align-item-center mx-3 p-1 mb-2`}
        href=""
      >
        <AiOutlineProject size={18} className="me-2 my-auto" />
        <span>Projects</span>
      </a>
      <a
        className={`${styles.tabContainer} d-flex align-item-center mx-3 p-1 mb-2`}
        href=""
      >
        <FiPackage size={18} className="me-2 my-auto" />
        <span>Packages</span>
      </a>
      <a
        className={`${styles.tabContainer} d-flex align-item-center mx-3 p-1 mb-2`}
        href=""
      >
        <AiOutlineStar size={18} className="me-2 my-auto" />
        <span>Stars</span>
      </a>
    </div>
  );
}

export default ProfileTabs;
