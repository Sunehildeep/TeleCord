import HandleCommunities from './CommunityHandler/CommunityHandler';
import HandleUsers from './UserHandler/UserHandler';

const AdminPanel = () => {
  return (
    <div>
      <HandleCommunities />
      <HandleUsers />
    </div>
  );
};

export default AdminPanel;