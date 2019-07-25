import * as React from 'react';
import { useCurrentView } from '../../hooks/index';
// import ListView from 'components/ListView';
// import data from '../../../data';

interface IViewContainerProps {
  render: (actions: boolean[]) => JSX.Element;
}

const ViewContainer = (props: IViewContainerProps) => {
  const viewState = useCurrentView(2);
  
  return (
    <div //style={{position: 'relative'}}
    >
      {props.render(viewState.actions)}
    </div>
  );
};

export default ViewContainer;