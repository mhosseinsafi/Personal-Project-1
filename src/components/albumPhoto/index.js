import axios from "axios";
import React, { useEffect, useState } from "react";
require('./style.scss');

const AlbumPhoto = (props) => {

  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetchAlbum()
  }, []);

  const fetchAlbum = () => {
    axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${props.albumId}`)
      .then((response) => {
        setPhotos(response.data)
      })
      .catch((error) => {
        console.log(error)
      });
  };


  return (
    <div className="photo-container">
      {photos.map((photo) => (
        <img key={photo.id} src={photo.thumbnailUrl} alt={photo.title} />
      ))}
    </div>
  );
};


export default AlbumPhoto;