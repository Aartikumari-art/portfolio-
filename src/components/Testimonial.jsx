import React from 'react'

export const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>Testimonial</h2>

      <section>
        <TestimonialCard
          name={"Aarti"}
          feedback={
            "MERN Stack Web Developer | Expertise in Three.js GLB Rendering, Angular, TypeScript & More."
          }
        />

        <TestimonialCard
          name={"Chandan Kumar"}
          feedback={
            " Lead Software Engineer at Mindtree, specializes in cybersecurity solutions. delivering secure and scalable web solutions."
          }
        />

        <TestimonialCard
          name={"Krishna kumar"}
          feedback={
            "2.5 years of experience in .NET development. Together, we bring expertise across MERN stack, Three.js, Angular, TypeScript."
          }
        />
      </section>
    </div>
  );
}

const TestimonialCard = ({name , feedback}) => {
    return(

        <article>
            <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="User" />
            <h4>{name}</h4>
            <p>{feedback}</p>
        </article>
    )

}
