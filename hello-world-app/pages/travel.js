import Layout from '../components/Layout';
import PhotoGallery from '../components/PhotoGallery';
import { travelPhotos } from '../images/travel';
function Travel() {
  return (
    <Layout>
      <PhotoGallery photos={travelPhotos} direction="row" />
    </Layout>
  );
}

export default Travel;
