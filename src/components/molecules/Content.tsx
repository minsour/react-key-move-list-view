import * as React from 'react';
import { IContent } from 'types';
import './style.scss';
import { Div } from '../atoms/Div';
import { Image } from '../atoms/Image';
import { P } from '..//atoms/P';
import { Span } from '..//atoms/Span';

interface IContentProps {
  content: IContent
  translateX?: number
}

const Content = (props: IContentProps) => {
  const {index, image, title, description} = props.content;
  return (
    <div id = {`content-${index}`} className = "content" style={{left: index*189, transform: `translateX(-${props.translateX}%)`}}>
      {/* <div className = "image-wrapper"> */}
      <Div
        position="relative"
      >
        <Image
          src={image}
          alt={title}
          border="0"
          width="13vw"
          height="10vw"
        />
        <P
          padding="0"
          margin="0"
          lineHeight={1}
          position="absolute"
          bottom="5px"
          background="rgba(0,0,0,0.5)"
          width="13vw"
          height="50px"
        >
          <Span
            padding="0"
            margin="0 0 5px 0"
            lineHeight={1}
            position="absolute"
            zIndex={1}
            top="5px"
            left="5px"
            fontSize="18px"
            fontWeight="bold"
            color="#fff"
          >
            {title}
          </Span>
          <Span
            position="absolute"
            fontSize="11px"
            color="#fff"
            left="5px"
            top="25px"
          >
            {description}
          </Span>
        </P>
        </Div>
      </div>
    // </div>
  );
};

export default Content;