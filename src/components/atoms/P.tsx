import * as React from "react";
import styled from "styled-components";
import { IComponentProps } from "../../types/Component";

interface IPProps extends IComponentProps {
  padding?: string;
  margin?: string;
  lineHeight: number;
  position?: string;
  bottom?: string;
  background?: string;
  width?: string;
  height?: string;
}

const StyledP = styled.p`
  width: ${(props:IPProps) => props.width} !important;
  height: ${(props:IPProps) => props.height} !important;
  margin: ${(props:IPProps) => props.margin} !important;
  line-height: ${(props:IPProps) => props.lineHeight} !important;
  position: ${(props:IPProps) => props.position} !important;
  bottom: ${(props:IPProps) => props.bottom} !important;
  background: ${(props:IPProps) => props.background} !important;
  padding: ${(props:IPProps) => props.padding} !important;
`;

export const P = (props: IPProps) => (
  <StyledP {...props}>
    {props.children}
  </StyledP>
);
