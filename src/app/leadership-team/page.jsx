import Link from 'next/link'
import React from 'react'
import LeaderShipTeam from '../Components/LeaderShipTeam'

const page = () => {
  return (
    <>
          <section className='service_bnr'>
              <div className="container height100per">
                  <div className='row alignItem_center height100per' >
                      <div className='col-lg-6'>
                          <div className='innerpage_bnrContent mobspaceMb_24'>
                              <ul className='page_breadcrumb'>
                                  <li><Link href={"/"}> Home</Link></li>
                                  <li><img src="/assets/img/rightIcon.svg" alt='right icon' /> </li>
                                  <li> About Us</li>
                                  <li><img src="/assets/img/rightIcon.svg" alt='right icon' /> </li>
                                  <li><Link href={'/leadership-team'}>Leadership Team</Link></li>
                              </ul>
                              <h1>Leadership Team</h1>
                              {/* <p className='fontSize16 fontWeight400 blackText_Clr mb_24'>{page.subTitle}</p> */}
                              <p className='fontSize16 fontWeight400 blackText_Clr mb_24'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quod fugiat corrupti, aut accusamus, porro esse, corporis nisi qui excepturi nostrum in? Maxime maiores nostrum eius cumque velit architecto ullam.</p>
                              <button className='mainbtn'>Contact Us</button>
                          </div>
                      </div>
                      <div className='col-lg-5 offset-lg-1'>
                          <div className="aboutbnr_img" >
                              <img src="/assets/img/company.jpeg"
                                  alt="company" />


                          </div>
                      </div>
                  </div>
              </div>
          </section>
    <LeaderShipTeam />
    </>
  )
}

export default page
