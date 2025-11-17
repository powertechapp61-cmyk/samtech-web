import React from 'react'

const page = () => {
  return (
    <>
          <section className='aboutbnr'>
              <div className='container'>
                  <div className='row alignItem_center' >
                      <div className='col-lg-6'>
                          <div>
                              <h1>Brochures</h1>
                              <p>We are grateful to our clients for giving us the opportunity to work for them; it is a tremendous source of encouragement for our team when our work is recognized. Numerous business leaders from Saudi Arabia and overseas have expressed appreciation for our team thus far.</p>
                              <button className='mainbtn'>Contact Us</button>
                          </div>
                      </div>
                      <div className='col-lg-5 offset-lg-1'>
                          <div className='aboutbnr_img'>
                              <img className="img-1" src="/assets/img/industry_illu.jpg" alt="about us img" />
                          </div>
                      </div>
                  </div>
              </div>
          </section>
    </>
  )
}

export default page
