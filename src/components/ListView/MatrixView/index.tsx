import * as React from 'react';
import Content from '../Content';
import { IContent } from 'types';
import './style.scss';
import { KEY_DOWN, LEFT_KEY, RIGHT_KEY, UP_KEY, DOWN_KEY} from '../../../constants';

interface IMatrixViewProps {
    contentWidth?: number | string;
    contentHeight?: number | string;
    list: IContent[];
}

interface IMatrixViewState {
    matrixList : IContent[];
    activeContent: IContent;
}

class MatrixView extends React.Component<IMatrixViewProps, IMatrixViewState> {
    constructor(props: IMatrixViewProps){
        super(props);
        this.state = {
            matrixList: this.props.list,
            activeContent: this.props.list[0],
        }
    }

    componentDidMount = () => {
        document.addEventListener(KEY_DOWN, this.handleKeyDown);
    }

    componentWillUnmount = () => {
        document.addEventListener(KEY_DOWN, this.handleKeyDown);
    }

    left = () => {
        if((this.state.activeContent.index-1) % 2 >= 0)
        {
            const newIndex = this.state.activeContent.index-1;
            this.setState({
                activeContent: this.props.list[newIndex]
            })
        }
    }
    
    right = () => {
        if((this.state.activeContent.index+1) % 2 !== 0)
        {
            const newIndex = this.state.activeContent.index+1;
            this.setState({
                activeContent: this.props.list[newIndex]
            })
        }
    }

    up = () => {
        if((this.state.activeContent.index-2) >= 0)
        {
            const newIndex = this.state.activeContent.index-2;
            this.setState({
                activeContent: this.props.list[newIndex]
            })
        }
    }
    
    down = () => {
        if((this.state.activeContent.index+2) < this.props.list.length)
        {
            const newIndex = this.state.activeContent.index+2;
            this.setState({
                activeContent: this.props.list[newIndex]
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
        const columns = [this.state.matrixList[index-1], this.state.matrixList[index]];
        return (
            <div className = "column" key = {index}>
                {columns.map((column) => {
                    return (
                        <Content key = {column._id} content = {column}/>
                    );
            })}
            </div>
        );
    };

    render() {
        const {matrixList, activeContent} = this.state;
        return (
          <div className="contents-row" id={`active-content-${activeContent.index}`}>
            <div className="focus-box" style={{
              // 화면 크기에 유동적일 수 있도록 수정 필요할 듯(7이 아니라 수학적인 수식으로)
              'transform': `translateX(${activeContent.index>=matrixList.length-7 && 
              (activeContent.index-(matrixList.length-7))*100}%)`
            }}/>
            <div className="contents-wrapper" style={{
              // 화면 크기에 유동적일 수 있도록 수정 필요할 듯(6이 아니라 수학적인 수식으로)
              'transform': `translateX(-${activeContent.index<matrixList.length-6 && 
              activeContent.index*(100/matrixList.length)}%)`
            }}>
              {
                // list 렌더링 
                matrixList.map((content, index) => {
                  return index % 2 ? this.renderContent(index) : '';
                })
              }
            </div>
          </div>
        );
      }
};

export default MatrixView;