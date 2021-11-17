export const getFetchStore = (store) => store.fetch || {};
export const getFetchData = (store) => getFetchStore(store).data;
export const getIsLoading = (store) => getFetchStore(store).loading;
export const getIsError = (store) => getFetchStore(store).error;
