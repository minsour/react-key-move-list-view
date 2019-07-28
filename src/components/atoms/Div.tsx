import * as React from "react";
import styled from "styled-components";
import { IComponentProps } from "../../types/Component";

export interface IDivProps extends IComponentProps {
  width?: string;
  height?: string;
  position?: string;
  padding?: string;
  margin?: string;
  zIndex?: number;
  transition?: string;
  opacity?: number;
  display?: string;
  transform?: string | any;
  ref?: any;
}

const StyledDiv = styled.div`
  width: ${(props:IDivProps) => props.width} !important;
  height: ${props => props.height} !important;
  position: ${props => props.position} !important;
  padding: ${props => props.padding} !important;
  margin: ${props => props.margin} !important;
  z-index: ${props => props.zIndex} !important;
  transition: ${props => props.transition} !important;
  opacity: ${props => props.opacity} !important;
  display: ${props => props.display} !important;
  transform: ${props => props.transform} !important;
  ref: ${props => props.ref} !important;
`;

export const Div = (props: IDivProps) => (
  <StyledDiv {...props}>
    {props.children}
  </StyledDiv>
);
