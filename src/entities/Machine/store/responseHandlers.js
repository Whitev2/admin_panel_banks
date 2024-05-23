export const create = (state, action) => {
  switch (action.type) {
    case 'machine/create/pending':
      state.loading = true;
      state.error = '';
      break;
    case 'machine/create/fulfilled':
      state.loading = false;
      state.instancies = [action.payload, ...state.instancies];
      break;
    case 'machine/create/rejected':
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

export const getTrans = (state, action) => {
  switch (action.type) {
    case 'machine/trans/pending':
      state.loading = true;
      state.errorTrans = '';
      break;

    case 'machine/trans/fulfilled':
      state.loading = false;
      state.transactions = action.payload;
      break;

    case 'machine/trans/rejected':
      state.loading = false;
      state.errorTrans = 'Something went wrong....';
      break;
  }
};

export const getErrors = (state, action) => {
  switch (action.type) {
    case 'machine/errors/pending':
      state.loading = true;
      state.error = '';
      break;
    case 'machine/errors/fulfilled':
      state.loading = false;
      state.errors = action.payload;
      break;
    case 'machine/errors/rejected':
      state.loading = false;
      state.error = 'Something went wrong....';
      break;
  }
};

export const getLogs = (state, action) => {
  switch (action.type) {
    case 'machine/logs/pending':
      state.loading = true;
      state.errorLogs = '';
      break;

    case 'machine/logs/fulfilled':
      state.loading = false;
      state.logs = action.payload;
      break;

    case 'machine/logs/rejected':
      state.loading = false;
      state.errorLogs = 'Something went wrong....';
      break;
  }
};
