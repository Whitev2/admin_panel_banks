export const create = (state, action) => {
  switch (action.type) {
    case 'instance/create/pending':
      state.loading = true;
      state.error = '';
      break;
    case 'instance/create/fulfilled':
      state.loading = false;
      state.instancies = [action.payload, ...state.instancies];
      break;
    case 'instance/create/rejected':
      state.loading = false;
      state.error = 'Something went wrong....';
      break;
  }
};

export const getAll = (state, action) => {
  switch (action.type) {
    case 'machine/getAll/pending':
      state.loading = true;
      state.error = '';
      break;
    case 'machine/getAll/fulfilled':
      console.log(action);
      state.loading = false;
      state.machines = action.payload;
      break;
    case 'machine/getAll/rejected':
      state.loading = false;
      state.error = action.error.message;
      break;
  }
};

export const getOne = (state, action) => {
  switch (action.type) {
    case 'instance/getOne/pending':
      state.loading = true;
      state.error = '';
      break;
    case 'instance/getOne/fulfilled':
      state.loading = false;
      state.instance = action.payload;
      break;
    case 'instance/getOne/rejected':
      state.loading = false;
      state.error = action.error.message;
      break;
  }
};

export const update = (state, action) => {
  switch (action.type) {
    case 'instance/update/pending':
      state.loading = true;
      state.error = '';
      break;
    case 'instance/update/fulfilled':
      state.loading = false;
      state.instance = action.payload;
      break;
    case 'instance/update/rejected':
      state.loading = false;
      state.error = 'Something went wrong....';
      break;
  }
};
