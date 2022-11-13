import './styles.css';
import NavBar from '../NavBar';

const Layout = ({ nickName, avatarURL, id, children }) => {
  return (
    <div className="layoutRoot">
      <NavBar nickName={nickName} avatarURL={avatarURL} id={id} />
      <div className="layoutBody">{children}</div>
    </div>
  );
};
export default Layout;
