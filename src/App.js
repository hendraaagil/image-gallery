import React, { useState, useEffect } from 'react';
import Footer from './components/Footer';
import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);

  return (
    <div className="mx-auto bg-gray-100">
      <h1 className="pt-4 px-4 text-center text-4xl sm:text-5xl text-gray-800 font-bold">
        Find Your Images
      </h1>

      <ImageSearch searchText={(text) => setTerm(text)} />

      {!isLoading && images.length === 0 && (
        <h1 className="text-4xl text-center text-gray-800 mx-auto mt-32">
          No Images Found...
        </h1>
      )}

      {isLoading ? (
        <h1 className="text-4xl text-center text-gray-800 mx-auto mt-32">
          Loading...
        </h1>
      ) : (
        <div className="flex flex-wrap justify-center">
          {images.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      )}

      <Footer />
    </div>
  );
}

export default App;
