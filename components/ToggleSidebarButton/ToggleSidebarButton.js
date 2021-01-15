import { useDispatch } from 'react-redux';
import { toggleSidebar } from '@slices/settingsSlice';

import { ShowHideButton } from './styled';

const ToggleSidebarButton = ({ icon, isInSidebar }) => {
  const dispatch = useDispatch();

  const toggleSidebarVisibility = () => {
    dispatch(toggleSidebar());
  };

  return (
    <ShowHideButton onClick={toggleSidebarVisibility} isInSidebar={isInSidebar}>
      <span class="material-icons">{icon}</span>
    </ShowHideButton>
  );
};

export default ToggleSidebarButton;
