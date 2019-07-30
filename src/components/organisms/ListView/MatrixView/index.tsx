import * as React from 'react';
import Content from '../../../molecules/Content';
import { IContent, VIEW_TYPE } from '../../../../types';
import './style.scss'
import { useCurrentContent } from '../../../../hooks';
import FocusBox from '../../../molecules/FocusBox';

interface IMatrixViewProps {
    list: IContent[];
    width?: number;
    widthNum?: number;
    height?: number;
    heightNum?: number;
    index?: number;
    title?: string;
    focusedTitle?: string;
    theme?: "light" | "dark";
    action?: boolean;
};

const MatrixView = (props: IMatrixViewProps) => {
    const current = useCurrentContent(props.widthNum!, Math.floor(props.list.length / props.widthNum!), props.action && props.action);
    // const windowDimensions = useWindowDimensions();
    // const focus = useFocusBox();
    // console.log((pageRow - (current.y+1)) * (100/contentRow))
    const contentWidth = props.width! / (props.widthNum! + 0.5) - 10;
    const contentHeight = props.height! / (props.heightNum! + 0.5) - 10;
    const renderRow = (index:number) => {
        const rows = props.list.slice(index-props.widthNum!+1, index+1);
        return (
            <div className = "row">
                {rows.map((row) => <Content key = {row._id} content = {row} currentIndex = {current.x + current.y * props.widthNum!} width = {`${contentWidth}`} height = {`${contentHeight!}`}/>)}
            </div>
        );
    };

    const renderContents = () => (
        props.list.map((content, index) => {
            return (index % props.widthNum! === props.widthNum!-1 ? renderRow(index) : null);
        })
    );

    const moveMatrixWrapper = {
        // 'transform' : `translate(${(current.x/props.widthNum!)>=1? (props.widthNum!-(current.x+1))*(100/props.widthNum!) : 0}%, ${(current.y/props.heightNum!) >= 1 ? (props.heightNum! - (current.y+1)) * (focus.offsetHeight) : 0}px)`,
    };

    return (
            <div className="matrix-row" style={{height : `${props.height}`}}>
                <FocusBox
                    width = {`${contentWidth}`}
                    height = {`${contentHeight}`}
                    pageCol={props.widthNum}
                    pageRow={props.heightNum}
                    contentCol={props.widthNum}
                    current={current}
                    type={VIEW_TYPE.MATRIX}
                />
                <div className="matrix-wrapper" style={moveMatrixWrapper}>
                    {renderContents()}
                </div>
            </div>
    );
};

export default MatrixView;
