

import Carousel from '@/components/Carousel';
import Banner from '@/components/Banner';
import Team from '@/components/Team';
import Projects from '@/components/Projects';
import Faq from '@/components/Faq';
import ModalSearch from '@/components/ModalSearch';
import Testimonial from '@/components/Testimonial';

export default function Home() {
  return (
    <>
      <Carousel />
      <Banner />
      <Projects />
      <ModalSearch />
      <Team />

      <Testimonial />
      <Faq />

    </>
  );
}