import { useNavigate } from 'react-router-dom';
import './styles.css';

const UserBadge = ({ nickName, avatarURL, id }) => {
  const navigate = useNavigate();

  const onUserBadgeClick = () => {
    navigate(`/${id}`);
  };
  return (
    <div className="userBadgeRoot" onClick={onUserBadgeClick}>
      {avatarURL ? (
        <img src={avatarURL} alt="logo" className="userBadgeAvatar" />
      ) : (
        <div className="userBadgePlaceholder" />
      )}
      <span className="userBadgeMame">{nickName}</span>
    </div>
  );
};
export default UserBadge;
