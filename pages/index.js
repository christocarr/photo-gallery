import Layout from '../components/Layout';
import PhotoGallery from '../components/PhotoGallery';
import { tigerHero } from '../images/hero';

export default function IndexPage() {
  return (
    <Layout>
      <div className="max-w-lg m-auto relative">
        <PhotoGallery photos={tigerHero} />

        <figure className="absolute z-50 w-48 -mt-16 -right-2 py-2 px-2 border shadow-lg bg-white sm:-mt-24 sm:-right-8 lg:-mt-28 lg:-right-12">
          <blockquote className="bg-yellow-100 p-4 text-gray-700 font-bold">
            <p>
              "Great photography is about depth of feeling, not depth of field."
            </p>
          </blockquote>
          <figcaption className="text-right text-sm">- Peter Adams</figcaption>
        </figure>
      </div>
    </Layout>
  );
}
