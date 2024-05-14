export const getAll = (state, action) => {
  switch (action.type) {
    case 'instance/getAll/pending':
      state.loading = true;
      state.error = false;
      break;
    case 'instance/getAll/fulfilled':
      state.loading = false;
      state.instancies = action.payload;
      break;
    case 'instance/getAll/rejected':
      state.loading = false;
      state.error = 'Something went wrong....';
      break;
  }
};
