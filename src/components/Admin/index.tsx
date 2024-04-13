import HandleCommunities from './CommunityHandler/CommunityHandler';
import HandleUsers from './UserHandler/UserHandler';

const AdminPanel = () => {
  return (
    <div>
      <div >
        <HandleCommunities />
      </div>
      <div className='h-[50vh]'>
      <HandleUsers />
      </div>
    </div>
  );
};

export default AdminPanel;