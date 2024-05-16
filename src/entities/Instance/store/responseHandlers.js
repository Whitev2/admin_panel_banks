export const getAll = (state, action) => {
  switch (action.type) {
    case 'instance/getAll/pending':
      state.loading = true;
      state.error = '';
      break;
    case 'instance/getAll/fulfilled':
      state.loading = false;
      if (action.payload) {
        state.instancies = action.payload;
      } else {
        state.error = 'Something went wrong+....';
      }
      break;
    case 'instance/getAll/rejected':
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

// export const remove = (state, action) => {
//   switch (action.type) {
//     case 'instance/create/pending':
//       state.loading = true;
//       state.error = false;
//       break;
//     case 'instance/create/fulfilled':
//       state.loading = false;
//       if (action.payload) {
//         state.instancies = [action.payload, ...state.instancies];
//       } else {
//         state.error = 'Something went wrong....';
//       }
//       break;
//     case 'instance/create/rejected':
//       state.loading = false;
//       state.error = 'Something went wrong....';
//       break;
//   }
// };
