import Layout from '../components/layout';
import PhotoGallery from '../components/PhotoGallery';
import { tigerHero } from '../images/hero';

export default function IndexPage() {
  return (
    <Layout>
      <PhotoGallery photos={tigerHero} />

      <figure className="absolute z-50 w-48 -mt-8 right-2 py-4 px-6 border shadow-lg bg-white sm:-mt-32 lg:right-16 2xl:-right-4">
        <blockquote>
          <p>
            "Great photography is about depth of feeling, not depth of field."
          </p>
        </blockquote>
        <figcaption>- Peter Adams</figcaption>
      </figure>
    </Layout>
  );
}
