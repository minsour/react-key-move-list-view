import * as React from "react";
import styled from "styled-components";
import { IComponentProps } from "../../types/Component";

interface IImageProps extends IComponentProps {
  border?: string;
  width?: string;
  height?: string;
  src?: string;
  alt?: string;
}

const StyledImage = styled.img`
  width: ${(props:IImageProps) => props.width} !important;
  border: ${(props:IImageProps) => props.border} !important;
  height: ${(props:IImageProps) => props.height} !important;
  src: ${(props:IImageProps) => props.src} !important;
  alt: ${(props:IImageProps) => props.alt} !important;
`;

export const Image = (props: IImageProps) => (
  <StyledImage {...props}>
    {props.children}
  </StyledImage>
);
