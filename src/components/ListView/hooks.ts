import { useState } from 'react';
import { IContent } from '../../types/index';

export const useListView = (newList: IContent[]) => {
  const [list] = useState<IContent[]>(newList);

  //useEffect(() => {
    
  //},[list])
  return list;
};