export const INITIAL_VALUE = {
  isPending: false,
  isErr: false,
  err: "",
  data: null,
};

export function reducer(state, action) {
  switch (action.type) {
    case "FETCHING__INIT":
      return {
        ...state,
        isPending: true,
      };
    case "FETCHING_SUCCESS":
      return {
        ...state,
        isPending: false,
        data: action.payload,
      };
    case "FETCHING_FAILED":
      return {
        ...state,
        isPending: false,
        isErr: true,
        err: action.err,
      };

    default:
      return state;
  }
}
