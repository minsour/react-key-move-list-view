import * as React from 'react';
// import * as ReactDOM from 'react-dom';

interface IKeyboardListViewProps {
}

interface IKeyboardListViewState {
}

class KeyboardListView extends React.Component<IKeyboardListViewProps, IKeyboardListViewState> {
  constructor(props: IKeyboardListViewProps) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
      </div>
    );
  }
};

export default KeyboardListView;