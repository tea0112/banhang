import { useState } from 'react';

const useSearch = () => {
  const [email, setEmail] = useState();
  return [email, setEmail];
};

export default useSearch;
