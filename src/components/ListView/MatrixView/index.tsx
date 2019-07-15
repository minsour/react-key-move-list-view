import * as React from 'react';
import Content from '../Content';
import { IContent } from 'types';
import './style.scss';
import { KEY_DOWN, LEFT_KEY, RIGHT_KEY, UP_KEY, DOWN_KEY} from '../../../constants';

interface IMatrixViewProps {
    contentWidth?: number | string;
    contentHeight?: number | string;
    list: IContent[];
    shape: number;
}

interface IMatrixViewState {
    matrixList : IContent[];
    activeContent: IContent;
    matrixShape : number;
}

class MatrixView extends React.Component<IMatrixViewProps, IMatrixViewState> {
    constructor(props: IMatrixViewProps){
        super(props);
        this.state = {
            matrixList: this.props.list,
            activeContent: this.props.list[0],
            matrixShape: this.props.shape,
        }
    }

    componentDidMount = () => {
        document.addEventListener(KEY_DOWN, this.handleKeyDown);
    }

    componentWillUnmount = () => {
        document.addEventListener(KEY_DOWN, this.handleKeyDown);
    }

    left = () => {
        if((this.state.activeContent.index) % this.state.matrixShape !== 0)
        {
            const newIndex = this.state.activeContent.index-1;
            this.setState({
                activeContent: this.props.list[newIndex],
            })
        }
    }
    
    right = () => {
        if((this.state.activeContent.index+1) % this.state.matrixShape !== 0)
        {
            const newIndex = this.state.activeContent.index+1;
            this.setState({
                activeContent: this.props.list[newIndex],
            })
        }
    }

    up = () => {
        if((this.state.activeContent.index-this.state.matrixShape) >= 0)
        {
            const newIndex = this.state.activeContent.index-this.state.matrixShape;
            this.setState({
                activeContent: this.props.list[newIndex],
            })
        }
    }
    
    down = () => {
        if((this.state.activeContent.index+this.state.matrixShape) < this.props.list.length)
        {
            const newIndex = this.state.activeContent.index+this.state.matrixShape;
            this.setState({
                activeContent: this.props.list[newIndex],
            })
        }
    }

    private handleKeyDown = (event: KeyboardEvent) => {
        switch (event.keyCode) {
            case LEFT_KEY:
                this.left();
                break;
            case RIGHT_KEY:
                this.right();
                break;
            case UP_KEY:
                this.up();
                break;
            case DOWN_KEY:
                this.down();
                break;
        }
    }

    private renderContent(index:number)
    {
        const columns = this.state.matrixList.slice(index-this.state.matrixShape+1,index+1);
        return (
            <section className = "column" key = {index}>
                {columns.map((column) => <Content key = {column._id} content = {column}/>)}
            </section>
        );
    };

    render() {
        const {matrixList, activeContent} = this.state;
        const locationX = Math.floor(activeContent.index%this.state.matrixShape);
        const locationY = Math.floor(activeContent.index/this.state.matrixShape);
        const moveFocusBox = {
            'transform': `translate(${(locationX*100)}%, ${locationY*100}%)`
        }
        return (
          <div className="contents-row" id={`active-content-${activeContent.index}`}>
            <div className="focus-box" style={moveFocusBox}/>
            <div className="contents-wrapper">
              {
                // list 렌더링 
                matrixList.map((content, index) => {
                  return (index % this.state.matrixShape === this.state.matrixShape-1 ? this.renderContent(index) : null);
                })
              }
            </div>
          </div>
        );
      }
};

export default MatrixView;