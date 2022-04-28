import isomorphicUnfetch from 'isomorphic-unfetch';

const fetch = (options) => {
  return isomorphicUnfetch(options).then(res => res.json());
}

export default fetch;