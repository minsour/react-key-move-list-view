import * as React from 'react';
import { IContent } from 'types';
import './style.scss';

interface IContentProps {
  content: IContent
}

const Content = (props: IContentProps) => {
  const {index, image, title, description} = props.content;
  return (
    <div id = {`content-${index}`} className = "content">
      <div className = "image-wrapper">
        <img src={image} alt={title} />
        <p className="details">
          <span className="title">
            {title}
          </span>
          <span className="description">
            {description}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Content;