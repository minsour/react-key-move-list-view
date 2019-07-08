import * as React from 'react';
import { IContent } from 'types';
import './style.scss';

interface IContentProps {
  content: IContent
}

const Content = (props: IContentProps) => {
  const {index, image, title} = props.content;
  return (
    <div id={`content-${index}`} className="content">
      <div className="image-wrapper">
        <img src={image} alt={title} />
      </div>
    </div>
  );
};

export default Content;