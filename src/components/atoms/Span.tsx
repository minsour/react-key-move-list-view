import * as React from "react";
import styled from "styled-components";
import { IComponentProps } from "../../types/Component";

interface ISpanProps extends IComponentProps {
  padding?: string;
  margin?: string;
  lineHeight?: number;
  position?: string;
  fontSize?: string;
  left?: string;
  top?: string;
  width?: string;
  height?: string;
  zIndex?: number;
  fontWeight?: string;
  color?: string;
}

const StyledSpan = styled.span`
  width: ${(props:ISpanProps) => props.width} !important;
  height: ${(props:ISpanProps) => props.height} !important;
  margin: ${(props:ISpanProps) => props.margin} !important;
  line-height: ${(props:ISpanProps) => props.lineHeight} !important;
  position: ${(props:ISpanProps) => props.position} !important;
  left: ${(props:ISpanProps) => props.left} !important;
  top: ${(props:ISpanProps) => props.top} !important;
  padding: ${(props:ISpanProps) => props.padding} !important;
  font-size: ${(props:ISpanProps) => props.fontSize} !important;
  z-index: ${(props:ISpanProps) => props.zIndex} !important;
  font-weight: ${(props:ISpanProps) => props.fontWeight} !important;
  color: ${(props:ISpanProps) => props.color} !important;
`;

export const Span = (props: ISpanProps) => (
  <StyledSpan {...props}>
    {props.children}
  </StyledSpan>
);
