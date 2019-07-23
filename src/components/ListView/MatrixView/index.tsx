import {useCallback, useState} from 'react';
import * as React from 'react';
import Content from '../Content';
import {IContent} from 'types';
import './style.scss'
import {useCurrentContent, useWindowDimensions} from '../../../hooks';

interface IMatrixViewProps {
    contentWidth?: number | string;
    contentHeight?: number | string;
    list: IContent[];
    column: number;
}

const MatrixView = (props: IMatrixViewProps) => {
    const current = useCurrentContent(props.column, Math.floor(props.list.length / props.column));
    const windowDimensions = useWindowDimensions();
    const [focusBoxDimensions, setFocusBoxDimensions] = useState({width:0, height:0});
    const focusBoxRef = useCallback(ref => {
        if(ref !== null){
            setFocusBoxDimensions({width:ref.offsetWidth, height:ref.offsetHeight});
            window.addEventListener('resize',()=>setFocusBoxDimensions({width:ref.offsetWidth, height:ref.offsetHeight}));
        }
    },[]);
    const [pageRow,pageCol] = [Math.floor(windowDimensions.height/focusBoxDimensions.height),Math.floor(windowDimensions.width/focusBoxDimensions.width)];
    const [contentRow, contentCol] = [Math.floor(props.list.length/props.column), props.column];
    const renderContent = (index:number) => {
        const rows = props.list.slice(index-props.column+1, index+1);
        return (
            <section className = "row" key = {index}>
                {rows.map((row) => <Content key = {row._id} content = {row}/>)}
            </section>
        );
    }
    const moveFocusBox = {
        'transform': `translate(${current.x  < pageCol ? (current.x*100):((pageCol-1)*100)}%, ${current.y< pageRow ? (current.y*100):((pageRow-1)*100)}%)`
    }

    const moveMatrixWrapper = {
        'transform' : `translate(${(current.x/pageCol)>=1? (pageCol-(current.x+1))*(100/contentCol) : 0}%, ${(current.y/pageRow) >= 1 ? (pageRow - (current.y+1)) * (100/contentRow) : 0}%)`
    }
    return (
        <div className="matrix-row" id={`active-content-${current.x + current.y * props.column }`}>
            <div className="focus-box" ref = {focusBoxRef} style = {moveFocusBox}/>
                <div className="matrix-wrapper" style={moveMatrixWrapper}>
                    {
                        props.list.map((content,index) => {
                            return (index % props.column === props.column-1 ? renderContent(index) : null);
                        })
                    }
            </div>
        </div>
    );
}

export default MatrixView;
