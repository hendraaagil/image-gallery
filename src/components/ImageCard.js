import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const ImageCard = ({ image }) => {
  const tags = image.tags.split(', ');

  return (
    <div className="m-5 bg-gray-200 max-w-sm max-h-full rounded overflow-hidden shadow-lg transition-all duration-300 transform hover:scale-105">
      <a href={image.largeImageURL} target="_blank" rel="noopener noreferrer">
        <img src={image.webformatURL} alt={image.pageURL} className="w-full" />
      </a>
      <div className="px-6 py-4">
        <div className="font-bold text-blue-500 text-xl mb-2">
          Photo by {image.user}
        </div>
        <ul className="text-gray-800">
          <li>
            <strong>Views: </strong>
            {image.views}
          </li>
          <li>
            <strong>Downloads: </strong>
            {image.downloads}
          </li>
          <li>
            <strong>Likes: </strong>
            {image.likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {tags.map((tag) => (
          <span
            key={uuidv4()}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
