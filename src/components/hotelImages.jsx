import React, { useEffect, useState } from "react";
import http from "./common/httpService";
import config from "./common/config.json";
import ImageComponent from "./imageComponent";
import { useParams } from "react-router-dom";

function HotelImages(props) {
  const [imageList, setImageList] = useState([]);
  const [imageSize, setImageSize] = useState(["s"]);

  let params = useParams();

  useEffect(() => {
    let data = {
      headers: config.headers.headers,
    };

    async function getImageList() {
      const result = await http.get(
        config.apiEndpoint + "/nice/image-catalog/v2/hotels/" + params.id,
        data
      );
      let obj = await result;
      obj = obj.data.hotelImages.map((i) => ({
        id: i.imageId,
        url: i.baseUrl.replace(/^(.+?)_.+(\.jpg)/gi, `$1_${imageSize}$2`),
      }));
      setImageList(obj);
    }

    getImageList();
  }, [imageList, imageSize]);

  return (
    <div className="jumbotron">
      <div className="row">
        {imageList.map((img) => (
          <div className="col-sm-3" key={img.id}>
            <ImageComponent url={img.url} {...props} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HotelImages;
