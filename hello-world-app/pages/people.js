import Layout from '../components/Layout';
import PhotoGallery from '../components/PhotoGallery';
import { peoplePhotos } from '../images/people';
function People() {
  return (
    <Layout>
      <PhotoGallery photos={peoplePhotos} direction="row" />
    </Layout>
  );
}

export default People;
