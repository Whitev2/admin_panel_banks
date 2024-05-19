export const getAll = (state, action) => {
  switch (action.type) {
    case 'project/getAll/pending':
      state.loading = true;
      state.error = '';
      break;
    case 'project/getAll/fulfilled':
      state.loading = false;
      state.projects = action.payload;
      break;
    case 'project/getAll/rejected':
      state.loading = false;
      state.error = action.error.message;
      break;
  }
};

export const getOne = (state, action) => {
  switch (action.type) {
    case 'project/getOne/pending':
      state.loading = true;
      state.error = '';
      break;
    case 'project/getOne/fulfilled':
      state.loading = false;
      state.project = action.payload;
      break;
    case 'project/getOne/rejected':
      state.loading = false;
      state.error = action.error.message;
      break;
  }
};

export const update = (state, action) => {
  switch (action.type) {
    case 'project/update/pending':
      state.loading = true;
      state.error = '';
      break;
    case 'project/update/fulfilled':
      state.loading = false;
      state.project = action.payload;
      break;
    case 'project/update/rejected':
      state.loading = false;
      state.error = 'Something went wrong....';
      break;
  }
};

export const create = (state, action) => {
  switch (action.type) {
    case 'project/create/pending':
      state.loading = true;
      state.error = '';
      break;
    case 'project/create/fulfilled':
      state.loading = false;
      state.projects = [action.payload, ...state.instancies];
      break;
    case 'project/create/rejected':
      state.loading = false;
      state.error = 'Something went wrong....';
      break;
  }
};

// export const remove = (state, action) => {
//   switch (action.type) {
//     case 'project/create/pending':
//       state.loading = true;
//       state.error = false;
//       break;
//     case 'project/create/fulfilled':
//       state.loading = false;
//       if (action.payload) {
//         state.instancies = [action.payload, ...state.instancies];
//       } else {
//         state.error = 'Something went wrong....';
//       }
//       break;
//     case 'project/create/rejected':
//       state.loading = false;
//       state.error = 'Something went wrong....';
//       break;
//   }
// };
