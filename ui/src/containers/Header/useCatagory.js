import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

const useCatagory = () => {
  const catagory = useSelector((state) => state.catagory);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: 'SET_CATAGORIES_ASYNC' });
  }, []);
  return catagory.catagories;
};

export default useCatagory;
