import React from 'react';
import Footer from './Footer';



const AboutUs = () => {
  return (

    <>
    <section id='features'>
      {/* Flex Container */}
      <div className='container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row -mb-32'>
        {/* What's Different */}
        <div className='flex flex-col mb-32 space-y-12 ml-28 md:w-1/2 gap-1'>
          <h2 className='max-w-md text-6xl font-bold text-center md:text-left'>
          Our Vision:
          </h2>
          <p className=' text-center text-darkGrayishBlue md:text-left'>
          Our mission is to revolutionize career planning by leveraging AI to provide accessible, accurate, and actionable guidance for individuals worldwide. By analyzing user data, skills, and market trends, we offer personalized career recommendations and step-by-step pathways to success. Our platform ensures equal access to unbiased, data-driven insights, breaking geographical and financial barriers. With curated resources, certified courses, and dynamic market insights, we empower users to make informed decisions and achieve their career goals. AI-driven career planning transforms aspirations into achievable realities for everyone.</p>
        </div>

        {/* Numbered List */}
        <div className='flex flex-col space-y-8 md:w-1/2'>
          {/* List Item 1 */}
          <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row'>
            {/* Heading */}
            <div className='rounded-l-full bg-brightRedSupLight md:bg-transparent'>
              <div className='flex items-center space-x-2'>
                <div className='px-4 py-2 text-black rounded-full md:py-1 bg-brightRed'>
                <i class="fa fa-circle" aria-hidden="true"></i>
                </div>
                <h3 className='text-base font-bold md:mb-4 md:hidden'>
                  Our Mission
                </h3>
              </div>
            </div>

            <div>
              <h3 className='hidden mb-4 text-lg font-bold md:block'>
              Who We Are:
              </h3>
              <p className='text-darkGrayishBlue'>
              We are a next-generation career guidance platform powered by cutting-edge AI technology. Our goal is to empower individuals to discover and achieve their ideal career paths through personalized insights and resources.
              </p>
            </div>
          </div>

          {/* List Item 2 */}
          <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row'>
            {/* Heading */}
            <div className='rounded-l-full bg-brightRedSupLight md:bg-transparent'>
              <div className='flex items-center space-x-2'>
                <div className='px-4 py-2 text-black rounded-full md:py-1 bg-brightRed'>
                <i class="fa fa-circle" aria-hidden="true"></i>
                </div>
                <h3 className='text-base font-bold md:mb-4 md:hidden'>
                  Our Mission
                </h3>
              </div>
            </div>

            <div>
              <h3 className='hidden mb-4 text-lg font-bold md:block'>
                What we do:
              </h3>
              <p className='text-darkGrayishBlue'>
              We simplify the career decision-making process by blending data-driven insights, AI tools, and personalized guidance to create a clear roadmap for users.</p>
            </div>
          </div>

          {/* List Item 3 */}
          <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row'>
            {/* Heading */}
            <div className='rounded-l-full bg-brightRedSupLight md:bg-transparent'>
              <div className='flex items-center space-x-2'>
                <div className='px-4 py-2 text-black rounded-full md:py-1 bg-brightRed'>
                <i class="fa fa-circle" aria-hidden="true"></i>
                </div>
                <h3 className='text-base font-bold md:mb-4 md:hidden'>
                  Everything you need in one place
                </h3>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </section>


<section id='testimonials'>
      
     <div className='max-w-6xl px-5 mx-auto mt-32 text-center'>
       
         <h2 className='text-4xl font-bold text-center'>
           Our Team
         </h2>
       
         <div className='flex flex-col mt-24 md:flex-row md:space-x-6'>
       
           <div className='flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3'>
           <img src="./Images/user.png" className='w-20 -mt-14 h-20' alt='' />
             <h5 className='text-lg font-bold'>Akshay Yadav</h5>
             <p className='text-sm text-darkGrayishBlue'>
               “Manage has supercharged our team's workflow. The ability to
               maintain visibility on larger milestones at all times keeps
               everyone motivated.”
             </p>
           </div>

          
          <div className='hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3'>
          <img src="./Images/user.png" className='w-20 -mt-14 h-20' alt='' />
            <h5 className='text-lg font-bold'>Anushka Mishra</h5>
            <p className='text-sm text-darkGrayishBlue'>
              “We have been able to cancel so many other subscriptions since
              using Manage. There is no more cross-channel confusion and
              everyone is much more focused.”
            </p>
          </div>

         
          <div className='hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3'>
          <img src="./Images/user.png" className='w-20 -mt-14 h-20' alt='' />
            <h5 className='text-lg font-bold'> Devansh Agrawal</h5>
            <p className='text-sm text-darkGrayishBlue'>
              “Manage has supercharged our team's workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated.”
            </p>
          </div>
          <div className='hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3'>
            <img src="./Images/user.png" className='w-20 -mt-14 h-20' alt='' />
            <h5 className='text-lg font-bold'>Rudrika Raghav</h5>
            <p className='text-sm text-darkGrayishBlue'>
              “Manage has supercharged our team's workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated.”
            </p>
          </div>
          
        </div>
        
        <div className='my-16'>
          
        </div>
      </div>
    </section>
   <Footer/>
    </>
    // 
   
  );
};

export default AboutUs;
