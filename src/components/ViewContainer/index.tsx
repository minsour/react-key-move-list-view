import * as React from 'react';
import { ViewContainerProvider } from './context';
// import { useViewContainer } from './hooks';
// import ListView from 'components/ListView';
// import data from '../../../data';

interface IViewContainerProps {
  render: () => JSX.Element;
}

const ViewContainer = (props: IViewContainerProps) => {
  return (
    <ViewContainerProvider>
      <div>
        {props.render()}
      </div>
    </ViewContainerProvider>
  );
};

export default ViewContainer;