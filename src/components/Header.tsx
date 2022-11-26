import styles from './Header.module.css';
import Logo from './Logo';

const headerTextItems = [
  'Pull requests',
  'Issues',
  'Codespaces',
  'Marketplace',
  'Explore',
];

function Header() {
  return (
    <div
      className={
        styles.navBar +
        ' d-flex align-items-center justify-content-md-start justify-content-center'
      }
    >
      <div className="mx-4 mb-3 mt-3">
        <Logo />
      </div>
      <div className="position-relative d-none d-md-block">
        <input
          placeholder="Search user..."
          className={styles.userSearchInput}
        />
        <div
          className={
            styles.userSearchResults +
            ' position-absolute bg-white w-100 rounded-bottom border'
          }
        ></div>
      </div>

      <div className="d-none d-md-block ms-2">
        {headerTextItems.map((item) => (
          <a href="" className={styles.itemText + ' mx-2'} key={item}>
            <span>{item}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Header;
