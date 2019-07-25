import * as React from 'react';
import Content from '../Content';
import { IContent, VIEW_TYPE } from '../../../types';
import './style.scss'
import { useCurrentContent, useWindowDimensions, useFocusbox } from '../../../hooks';
import FocusBox from '../FocusBox';

interface IMatrixViewProps {
    contentWidth?: number | string;
    contentHeight?: number | string;
    list: IContent[];
    column: number;
    action?: boolean
};

const MatrixView = (props: IMatrixViewProps) => {
    const current = useCurrentContent(props.column, Math.floor(props.list.length / props.column), props.action && props.action);
    const windowDimensions = useWindowDimensions();
    const focus = useFocusbox();
    const [pageRow,pageCol] = [Math.floor(windowDimensions.height/focus.offsetHeight),Math.floor(windowDimensions.width/focus.offsetWidth)];
    const [contentRow, contentCol] = [Math.floor(props.list.length/props.column), props.column];
    
    const renderRow = (index:number) => {
        const rows = props.list.slice(index-props.column+1, index+1);
        return (
            <section className = "row" key = {index}>
                {rows.map((row) => <Content key = {row._id} content = {row}/>)}
            </section>
        );
    };

    const renderContents = () => (
        props.list.map((content, index) => {
            return (index % props.column === props.column-1 ? renderRow(index) : null);
        })
    );

    const moveMatrixWrapper = {
        'transform' : `translate(${(current.x/pageCol)>=1? (pageCol-(current.x+1))*(100/contentCol) : 0}%, ${(current.y/pageRow) >= 1 ? (pageRow - (current.y+1)) * (100/contentRow) : 0}%)`
    };

    return (
        <div className="matrix-row" id={`active-content-${current.x + current.y * props.column }`}>
            <FocusBox
                pageCol={pageCol}
                pageRow={pageRow}
                contentCol={contentCol}
                current={current}
                focus={focus}
                type={VIEW_TYPE.MATRIX}
            />
            <div className="matrix-wrapper" style={moveMatrixWrapper}>
                {renderContents()}
            </div>
        </div>
    );
};

export default MatrixView;
