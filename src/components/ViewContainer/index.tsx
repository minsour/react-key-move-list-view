import * as React from 'react';
import { useContainer } from './hooks';
// import ListView from 'components/ListView';
// import data from '../../../data';

interface IViewContainerProps {
  render: (actions: boolean[]) => JSX.Element;
}

const ViewContainer = (props: IViewContainerProps) => {
  const viewState = useContainer(2);
  
  return (
    <div //style={{position: 'relative'}}
    >
      {props.render(viewState.actions)}
    </div>
  );
};

export default ViewContainer;