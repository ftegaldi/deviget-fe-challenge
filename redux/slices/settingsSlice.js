import { createSlice } from '@reduxjs/toolkit';

const settingsSlice = createSlice({
  name: 'settingsSlice',
  initialState: {
    isSidebarOpen: true,
    isSettingsModalOpen: false,
  },
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    toggleSettingsModal: (state) => {
      state.isSettingsModalOpen = !state.isSettingsModalOpen;
    },
  },
});

export const { toggleSidebar, toggleSettingsModal } = settingsSlice.actions;

export default settingsSlice.reducer;
