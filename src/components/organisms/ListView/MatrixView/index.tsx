import * as React from 'react';
import Content from '../../../molecules/Content';
import { IContent, VIEW_TYPE } from '../../../../types';
import './style.scss'
import {useListView} from '../../../../hooks';
import FocusBox from '../../../molecules/FocusBox';
import ViewTitle from '../../../molecules/ViewTitle';
import { DEFAULT_PROPS } from '../../../../constants';

interface IMatrixViewProps {
    list: IContent[];
    width?: number;
    widthNum?: number;
    height?: number;
    heightNum?: number;
    totalWidthNum?: number;
    index?: number;
    title?: string;
    theme?: "light" | "dark";
};

const MatrixView = (props: IMatrixViewProps) => {
    const widthNum = (props.widthNum===void 0) ? DEFAULT_PROPS.WIDTH_NUM : props.widthNum;
    const heightNum = (props.heightNum===void 0) ? DEFAULT_PROPS.HEIGHT_NUM : props.heightNum;    
    const contentWidth = props.width! / (widthNum + 0.4) - 10;
    const contentHeight = props.height! / (heightNum + 0.4) - 40;
    const totalWidthNum = (props.totalWidthNum === void 0) ? DEFAULT_PROPS.TOTAL_WIDTH_NUM : props.totalWidthNum;
    const totalHeightNum = Math.floor(props.list.length / totalWidthNum)
    const matrixView = useListView(VIEW_TYPE.MATRIX, props.index!, totalWidthNum, totalHeightNum);
    const action = (props.index===void 0) ? true : matrixView.action;

    const startLeftPosition = contentWidth/6+1.5;
    const startTopPosition = contentHeight/6+1.5;

    const renderRow = (index:number) => {
        const rows = props.list.slice(index-totalWidthNum!+1, index+1);
        return (
            <div className = "row">
                {rows.map((row) => <Content key = {row._id} content = {row} currentIndex = {matrixView.currentContent.x + matrixView.currentContent.y * totalWidthNum!} width = {`${contentWidth}`} height = {`${contentHeight}`} widthNum = {`${widthNum}`} heightNum = {`${heightNum}`} totalWidthNum = {`${totalWidthNum}`}/>)}
            </div>
        );
    };

    const renderContents = () => (
        props.list.map((content, index) => {
            return (index % totalWidthNum! === totalWidthNum!-1 ? renderRow(index) : null);
        })
    );
    
    return (
        <div
            className="matrix-view"
            style = {{
                position: 'relative',
                overflow: 'hidden',
                paddingTop: '5px',
                width: `${props.width}px`,
                height: `${props.height}px`
            }}
        >
            {!(props.title === void 0) &&
            <ViewTitle
              action = {action}
              focus = {matrixView.focus}
              title={props.title}
              theme={props.theme}
            />}
            <FocusBox
                    width = {`${contentWidth}`}
                    height = {`${contentHeight}`}
                    widthNum={widthNum}
                    heightNum={heightNum}
                    current={matrixView.currentContent}
                    type={VIEW_TYPE.MATRIX}
                    focus={(props.index === void 0) ? true : matrixView.focus}
                    action = {(props.index === void 0) ? true : matrixView.action}
                    theme = {props.theme}
            />
            <div className="matrix-row" style={{
                position: 'relative',
                overflow: 'hidden', 
                width: `${props.width}px`, 
                height : `${props.height}px`}}
            >
                <div className="matrix-wrapper" style = {{
                    margin: `${startTopPosition}px 0 0 ${startLeftPosition}px`,
                    transform: `translate(${(matrixView.currentContent.x/widthNum)>=1?(widthNum-(matrixView.currentContent.x+1))*(100/totalWidthNum!) : 0}%, ${(matrixView.currentContent.y/heightNum) >= 1 ? (heightNum - (matrixView.currentContent.y+1)) * (100/totalHeightNum!) : 0}%)`,
                }}>
                    {renderContents()}
                </div>
            </div>
        </div>
    );
};

export default MatrixView;
