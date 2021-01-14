import { UndoDismissButtonContainer } from './styled';
import { useDispatch } from 'react-redux';
import { undoDismissPost } from '@slices/postsSlice';

const UndoDismissButton = () => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(undoDismissPost());
  };

  return (
    <UndoDismissButtonContainer onClick={onClick}>
      <span class="material-icons">undo</span>
    </UndoDismissButtonContainer>
  );
};

export default UndoDismissButton;
