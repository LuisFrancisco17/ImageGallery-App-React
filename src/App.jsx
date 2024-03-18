import ImageGallery from "react-image-gallery"
import "react-image-gallery/styles/css/image-gallery.css";

function App() {

  const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600',
      thumbnail: 'https://picsum.photos/id/1018/250',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600',
      thumbnail: 'https://picsum.photos/id/1015/250',
    },
    {
      original: 'https://picsum.photos/id/1016/1000/600',
      thumbnail: 'https://picsum.photos/id/1016/250',
    }
  ]

  return (
    <>
      <h1>Image Gallery</h1>
      <ImageGallery items={images}/>
    </>
  )
}

export default App
