import './styles.css';
import UserBadge from '../UserBadge';

const NavBar = ({ nickName, avatarURL, id }) => {
  return (
    <div className="navBarRoot">
      <div className="navBarContent">
        <span>Instaclone</span>
        <UserBadge nickName={nickName} avatarURL={avatarURL} id={id} />
      </div>
    </div>
  );
};
export default NavBar;
