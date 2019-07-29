import * as React from 'react';
import Content from '../Content/index';
import { IContent, VIEW_TYPE } from '../../../types/index';
import './style.scss'
import { useCurrentContent, useWindowDimensions, useFocusBox } from '../../../hooks/index';
import FocusBox from '../FocusBox/index';

interface IMatrixViewProps {
    height: string;
    contentWidth?: string;
    contentHeight: string;
    list: IContent[];
    column: number;
    action?: boolean
};

const MatrixView = (props: IMatrixViewProps) => {
    const current = useCurrentContent(props.column, Math.floor(props.list.length / props.column), props.action && props.action);
    const windowDimensions = useWindowDimensions();
    const focus = useFocusBox();
    const [pageRow,pageCol] = [Math.floor((Number(props.height.replace(/[^0-9]/g,"")) * (windowDimensions.width/100))/focus.offsetHeight),Math.floor(windowDimensions.width/focus.offsetWidth)];
    console.log(pageRow)
    const [contentRow, contentCol] = [Math.floor(props.list.length/props.column), props.column];
    console.log((pageRow - (current.y+1)) * (100/contentRow))
    const renderRow = (index:number) => {
        const rows = props.list.slice(index-props.column+1, index+1);
        return (
            <div className = "row">
                {rows.map((row) => <Content key = {row._id} content = {row} currentIndex = {current.x + current.y * props.column} width = {props.contentWidth} height = {props.contentHeight}/>)}
            </div>
        );
    };

    const renderContents = () => (
        props.list.map((content, index) => {
            return (index % props.column === props.column-1 ? renderRow(index) : null);
        })
    );

    const moveMatrixWrapper = {
        //${current.y< pageRow! ? (current.y*100):((pageRow!-1)*100)}%
        'transform' : `translate(${(current.x/pageCol)>=1? (pageCol-(current.x+1))*(100/contentCol) : 0}%, ${(current.y/pageRow) >= 1 ? (pageRow - (current.y+1)) * (focus.offsetHeight) : 0}px)`,
    };

    return (
            <div className="matrix-row" style={{height : `${props.height}`}}>
                <FocusBox
                    width = {`${props.contentWidth}`}
                    height = {`${props.contentHeight}`}
                    pageCol={pageCol}
                    pageRow={pageRow}
                    contentCol={contentCol}
                    current={current}
                    focusBox={focus}
                    type={VIEW_TYPE.MATRIX}
                />
                <div className="matrix-wrapper" style={moveMatrixWrapper}>
                    {renderContents()}
                </div>
            </div>
    );
};

export default MatrixView;
