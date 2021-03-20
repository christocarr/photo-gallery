import Layout from '../components/Layout';
import PhotoGallery from '../components/PhotoGallery';
import { animalPhotos } from '../images/animals';
function Animals() {
  return (
    <Layout>
      <PhotoGallery photos={animalPhotos} direction="row" />
    </Layout>
  );
}

export default Animals;
