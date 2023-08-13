import { useParams } from "react-router-dom";

function AlbumMusic() {
  let { album } = useParams();
  return (
    <div>
      <div className="containerMusic">{album}</div>
    </div>
  );
}

export default AlbumMusic;
