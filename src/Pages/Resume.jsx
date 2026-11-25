import { Profile } from "../Components/Profile";
import { Academic } from "../Components/Academic";
import { Skills } from "../Components/Skills";
import { Proyects } from "../Components/Proyects";
import { Works } from "../Components/Works";
import { AboutMe } from "../Components/AboutMe";
import { Menu } from "../Components/Menu";
import { SEO } from "../Components/SEO";
import { Research } from "../Components/Research";

import { Data as dataSchema } from '../Schemas/Data';
import { Menu as menuSchema } from '../Schemas/Menu';

export const Resume = () => {
  const { profile, aboutMe, skills, socialMedia, experience } = dataSchema;
  return (
    <>
      <SEO  {...profile} {...aboutMe} />
      <Menu {...menuSchema} />
      <main className='l-main bd-container' id='bd-container'>
        <div className='resume' id='area-cv'>
          <div className='resume__left'>
            <Profile {...profile} {...socialMedia} />
            <AboutMe {...aboutMe} />
            <Skills {...skills} />
          </div>
          <div className='resume__right'>
            <Works {...experience} />
            <Proyects {...experience} />
            <Academic {...experience} />
            <Research paragraphs={dataSchema.research} />
          </div>
        </div>
      </main>
    </>
  );
};
