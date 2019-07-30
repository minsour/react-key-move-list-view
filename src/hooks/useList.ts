import { useState } from 'react';
import { IContent } from '../types/index';

export const useList = (newList: IContent[]) => {
  const [list] = useState<IContent[]>(newList);
  return list;
};