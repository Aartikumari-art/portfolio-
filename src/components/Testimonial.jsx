import React from 'react'

export const Testimonial = () => {
  return (
    <div id= "testimonial">
        <h2>Testimonial</h2>

        <section>
            <TestimonialCard  
            name= {"Aarti"} 
            feedback= {"Discussion is well"}/>


<TestimonialCard  
            name= {"Chandan Kumar"} 
            feedback= {" I'm aware that, You are very rare !"}/>


<TestimonialCard  
            name= {"Krishna kumar"} 
            feedback= {"A good dot net developer!"}/>


        </section>
    </div>
  )
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
