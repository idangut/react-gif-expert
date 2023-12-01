export const GifItem = ({ title = "", url = "" }) => {
  return (
    <div className="card">
      <img src={url} alt="Gif-Img" />
      <p>{title === "" ? "No title available" : title}</p>
    </div>
  );
};
