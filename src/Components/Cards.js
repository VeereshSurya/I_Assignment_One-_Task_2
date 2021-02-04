import React from "react";

const Cards = ({ data }) => {
  return (
    <div className="m-4">
      <h2 className="text-center"> Rai Techintro Private Limited </h2>

      <div className="wrapper">
        {data.map((elem) => (
          <div className="card">
            <div className="card-body">
              <p>
                AlbumId : {elem.albumId} , Id : {elem.id}
              </p>
              <p className="card-title">Title : {elem.title}</p>
              <h6 className="card-subtitle mb-2 text-muted">
                URL : <a href={elem.url}> {elem.url} </a>
              </h6>
              <p class="card-text">
                ThumbnailUrl :
                <a href={elem.thumbnailUrl}> {elem.thumbnailUrl} </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
