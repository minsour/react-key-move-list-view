import * as React from 'react';
import Content from '../../../molecules/Content';
import { IContent, VIEW_TYPE } from '../../../../types';
import './style.scss'
import {useListView} from '../../../../hooks';
//import { useCurrentContent } from '../../../../hooks';
import FocusBox from '../../../molecules/FocusBox';
import ViewTitle from '../../../molecules/ViewTitle';

interface IMatrixViewProps {
    list: IContent[];
    width?: number;
    widthNum: number;
    height?: number;
    heightNum?: number;
    contentCol?: number;
    contentRow?: number;
    index?: number;
    title?: string;
    focusedTitle?: string;
    theme?: "light" | "dark";
    action?: boolean;
};

const MatrixView = (props: IMatrixViewProps) => {
    const matrixView = useListView("matrix", 3, props.index!);
    const contentWidth = props.width! / (props.widthNum! + 0.4) - 10;
    const contentHeight = props.height! / (props.heightNum! + 0.5) - 10;
    const renderRow = (index:number) => {
        const rows = props.list.slice(index-props.contentCol!+1, index+1);
        return (
            <div className = "row">
                {rows.map((row) => <Content key = {row._id} content = {row} currentIndex = {matrixView.currentContent.x + matrixView.currentContent.y * props.contentCol!} width = {`${contentWidth}`} height = {`${contentHeight!}`}/>)}
            </div>
        );
    };

    const renderContents = () => (
        props.list.map((content, index) => {
            return (index % props.contentCol! === props.contentCol!-1 ? renderRow(index) : null);
        })
    );
    
    const moveMatrixWrapper = {
        'transform' : `translate(${(matrixView.currentContent.x/props.widthNum!)>=1? (props.widthNum!-(matrixView.currentContent.x+1))*(100/props.contentCol!) : 0}%, ${(matrixView.currentContent.y/props.heightNum!) >= 1 ? (props.heightNum! - (matrixView.currentContent.y+1)) * (100/props.contentRow!) : 0}%)`,
    };

    return (
        <div
            className="matrix-view"
            style = {{
                position: 'relative',
                overflow: 'hidden',
                width: `${props.width}px`,
                height: `calc(${props.height}px + 50px)`
            }}
        >
            {!(props.index === void 0) &&
            <ViewTitle
              action = {matrixView.action}
              focus = {matrixView.focus}
              title={props.title}
            />}
            <div className="matrix-row" style={{width: `${props.width}px`, height : `${props.height}px`}}>
                <FocusBox
                    width = {`${contentWidth}`}
                    height = {`${contentHeight}`}
                    pageCol={props.widthNum}
                    pageRow={props.heightNum}
                    contentCol={props.contentCol}
                    current={matrixView.currentContent}
                    type={VIEW_TYPE.MATRIX}
                    focus={(props.index === void 0) ? true : matrixView.focus}
                    action = {(props.index === void 0) ? true : matrixView.action}
                />
                <div className="matrix-wrapper" style = {moveMatrixWrapper}>
                    {renderContents()}
                </div>
            </div>
        </div>
    );
};

export default MatrixView;
