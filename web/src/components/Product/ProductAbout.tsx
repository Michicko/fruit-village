import React from "react";

interface SectionProps {
  id: string;
  title: string;
  text: string;
}

interface ProductAboutPropsTypes {
  sections: SectionProps[];
}

export default function ProductAbout({ sections }: ProductAboutPropsTypes) {
  return (
    <div className="about-product">
      {sections.map((sect) => {
        return (
          <section className="section section-page" key={sect.id}>
            <h3 className="sm-heading">{sect.title}</h3>
            <p>{sect.text}</p>
          </section>
        );
      })}
    </div>
  );
}
