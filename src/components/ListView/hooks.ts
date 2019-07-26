import { useState } from 'react';
import { IContent } from '../../types/index';

export const useList = (newList: IContent[] = []) => {
  const [list] = useState(newList);
  //useEffect(() => {
    
  //},[list])
  return list;
};