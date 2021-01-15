import Portal from './Portal';
import { Background, Content, ModalButton } from './styled';
import { toggleSettingsModal } from '@slices/settingsSlice';
import { loadPosts, restoreState } from '@slices/postsSlice';
import { useDispatch, connect } from 'react-redux';
import { useEffect, useRef } from 'react';

const Modal = ({ isSettingsModalOpen }) => {
  const dispatch = useDispatch();

  const backgroundRef = useRef(null);

  useEffect(() => {
    const { current } = backgroundRef;

    const transitionEnd = () => setActive(open);

    const clickHandler = (e) => e.target === current && dispatch(toggleSettingsModal());

    if (current) {
      current.addEventListener('transitionend', transitionEnd);
      current.addEventListener('click', clickHandler);
    }

    if (isSettingsModalOpen) {
      window.setTimeout(() => {
        document.activeElement.blur();
        document.querySelector('#__next').setAttribute('inert', 'true');
      }, 10);
    }

    return () => {
      if (current) {
        current.removeEventListener('transitionend', transitionEnd);
        current.removeEventListener('click', clickHandler);
      }
      document.querySelector('#__next').removeAttribute('inert');
    };
  });

  const onClickReFetch = () => {
    dispatch(loadPosts());
    dispatch(toggleSettingsModal());
  };

  const onClickRestore = () => {
    dispatch(restoreState());
    dispatch(toggleSettingsModal());
  };

  return (
    <>
      {isSettingsModalOpen && (
        <Portal className="modal-portal">
          <Background ref={backgroundRef} className={isSettingsModalOpen && 'active'}>
            <Content className="modal-content">
              <h2>Settings</h2>
              <br />
              <div>
                <label htmlFor="refetch posts">Re-fetch posts</label>
                <ModalButton onClick={onClickReFetch}>
                  <span class="material-icons">autorenew</span>
                </ModalButton>
              </div>
              <div>
                <label htmlFor="restore">Restore all posts</label>
                <ModalButton onClick={onClickRestore}>
                  <span class="material-icons">settings_backup_restore</span>
                </ModalButton>
              </div>
            </Content>
          </Background>
        </Portal>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  isSettingsModalOpen: state.settings.isSettingsModalOpen,
});

export default connect(mapStateToProps)(Modal);
