import * as React from 'react';
import Content from '../Content';
import { IContent } from 'types';
import './style.scss';
import { KEY_EVENT, LEFT_KEY, RIGHT_KEY, UP_KEY, DOWN_KEY} from '../../../constants';

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
    windowWidth: number;
    windowHeight: number;
    focusBoxWidth: number;
    focusBoxHeight: number;
}

class MatrixView extends React.Component<IMatrixViewProps, IMatrixViewState> {
    private focusBox = React.createRef<HTMLDivElement>();
    constructor(props: IMatrixViewProps){
        super(props);
        this.focusBox = React.createRef();
        this.state = {
            matrixList: this.props.list,
            activeContent: this.props.list[0],
            matrixShape: this.props.shape,
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight,
            focusBoxHeight: 0,
            focusBoxWidth: 0,
        }
        const checkFocusBox = setInterval(() => {
            if(this.focusBox.current!= null){
                this.setState({
                    focusBoxHeight: this.focusBox.current.offsetHeight,
                    focusBoxWidth: this.focusBox.current.offsetWidth,
                });
                clearInterval(checkFocusBox);
            }
        })
    }

    componentDidMount = () => {
        window.addEventListener('resize', this.updateWindowDimensions);
        document.addEventListener(KEY_EVENT.down, this.handleKeyDown);
    }

    componentWillUnmount = () => {
        window.removeEventListener('resize', this.updateWindowDimensions);
        document.removeEventListener(KEY_EVENT.down, this.handleKeyDown);
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

    private updateWindowDimensions = () => {
        const box = this.focusBox.current;
        if(box != null)
        {
            this.setState({
                windowWidth: window.innerWidth,
                windowHeight: window.innerHeight,
                focusBoxWidth: box.offsetWidth,
                focusBoxHeight: box.offsetHeight,
            });
            console.log("windowWidth", this.state.windowWidth);
            console.log("windowHeight", this.state.windowHeight);
            console.log("focusBoxWidth", this.state.focusBoxWidth);
            console.log("focusBoxHeight", this.state.focusBoxHeight);
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
        const {matrixList, activeContent, focusBoxWidth, focusBoxHeight, windowWidth, windowHeight} = this.state;
        const widthNum = Math.floor(windowWidth / focusBoxWidth);
        const heightNum = Math.floor(windowHeight / focusBoxHeight);
        const locationX = Math.floor(activeContent.index%this.state.matrixShape);
        const locationY = Math.floor(activeContent.index/this.state.matrixShape);
        const maxY = Math.floor(matrixList.length / this.state.matrixShape);
        const maxX = Math.floor((matrixList.length)/maxY);
        console.log("widthNum:",widthNum);
        console.log("heightNum:", heightNum);
        console.log("maxX:",maxX);
        console.log("maxY:",maxY);
        console.log("locationX:",locationX);
        console.log("locationY:",locationY);

        const moveFocusBox = {
            'transform': `translate(${locationX < widthNum &&(locationX*100)}%, ${locationY < heightNum && (locationY*100)}%)`
        }
        const moveContentsWrapper = {
            'transform': `translateY(${locationY >= heightNum ? ((heightNum - (locationY+1)) * (100/maxY)) : 0}%)`
        }
        return (
          <div className="matrix-row" id={`active-content-${activeContent.index}`}>
            <div className="focus-box" style= {moveFocusBox} ref={this.focusBox}/>
              <div className="matrix-wrapper" style = {moveContentsWrapper}>
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