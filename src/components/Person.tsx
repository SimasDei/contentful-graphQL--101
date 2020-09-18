import React from 'react';

import SocialLink from './SocialLink';

interface PersonProps {
  person: Person;
}

export const Person: React.FC<PersonProps> = ({ person }) => {
  return (
    <section className="bg-gray-800">
      <div className="container mx-auto px-6 py-8">
        <div className="lg:flex items-center">
          <div className="lg:w-1/2">
            <h2 className="text-gray-100 text-3xl font-bold">{person.name}</h2>

            <div className="flex items-center -mx-2 mt-6">
              <SocialLink socialNetwork="Twitter" url={person.socialTwitter} />
              <SocialLink socialNetwork="Github" url={person.socialGithub} />
              <SocialLink socialNetwork="Linkedin" url={person.socialLinkedin} />
            </div>
          </div>

          <div className="mt-8 lg:mt-0 lg:w-1/2">
            <div className="flex items-center justify-center lg:justify-end">
              <div className="max-w-lg">
                <img
                  className="w-full h-64 object-cover object-center rounded-md"
                  src="https://images.unsplash.com/photo-1484627147104-f5197bcd6651?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Person;
