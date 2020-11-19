import React, { useEffect, useState } from "react";
import http from "./common/httpService";
import config from "./common/config.json";
import Hotel from "./hotel";
import ImageComponent from "./imageComponent";
import { useParams } from "react-router-dom";

function HotelImages() {
  const [imageList, setImageList] = useState([]);
  const [imageSize, setImageSize] = useState(["d"]);

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
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Hotel</th>
          </tr>
        </thead>
        <tbody>
          {imageList.map((img) => (
            <tr key={img.id}>
              <td>
                <ImageComponent url={img.url} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HotelImages;
