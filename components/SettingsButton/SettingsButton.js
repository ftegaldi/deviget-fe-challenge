import { SettingsButtonContainer } from './styled';
import { useDispatch } from 'react-redux';
import { toggleSettingsModal } from '@slices/settingsSlice';

const SettingsButton = () => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(toggleSettingsModal());
  };
  return (
    <SettingsButtonContainer onClick={onClick}>
      <span class="material-icons">settings</span>
    </SettingsButtonContainer>
  );
};

export default SettingsButton;
