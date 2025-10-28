import React from 'react'

const Page = () => {
    return (
        <>
            <section className='aboutbnr'>
                <div className='container'>
                    <div className='row alignItem_center' >
                        <div className='col-lg-6'>
                            <div>
                                <h1>Contact us</h1>
                                <p>There are many variations of passages available but the majority have suffered alteration in some form by injected humour randomised words which don&apos;t look even slightly believable. If you are going to use passage.

                                </p>
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


            <section className='contactus_sec'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='addressDetail'>
                                <h5>Company Locations and contacts worldwide</h5>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className="accountCreationFrame">
                                <h2 className="ruinedSmoresText_clr fontSize18 fontWeight700 mb_8">
                                    Schedule Demo
                                </h2>
                                <p className="midnightSkyText_clr fontSize14 fontWeight400 mb_34">
                                    Request a demo by filling the form
                                </p>

                                <form>

                                    <div className='row'>
                                        <div className='col-lg-6'>
                                            <div className="mb_24">
                                                <label className="labeltext">First Name</label>
                                                <input placeholder='First name'
                                                    type="text"
                                                    name="name"
                                                    className="mainInput"
                                                />
                                            </div>
                                        </div>
                                        <div className='col-lg-6'>
                                            <div className="mb_24">
                                                <label className="labeltext">Last Name</label>
                                                <input placeholder='Last name'
                                                    type="text"
                                                    name="name"
                                                    className="mainInput"
                                                />
                                            </div>
                                        </div>
                                    </div>


                                    <div className='row'>
                                        <div className='col-lg-6'>
                                            <div className="mb_24">
                                                <label className="labeltext">Company Name</label>
                                                <input placeholder='Company name'
                                                    type="text"
                                                    name="name"
                                                    className="mainInput"
                                                />
                                            </div>
                                        </div>
                                        <div className='col-lg-6'>
                                            <div className="mb_24">
                                                <label className="labeltext">Email Address</label>
                                                <input placeholder='Email Address'
                                                    type="text"
                                                    name="name"
                                                    className="mainInput"
                                                />
                                            </div>
                                        </div>
                                    </div>


                                    <div className='row'>
                                        <div className='col-lg-6'>
                                            <div className="mb_24">
                                                <label className="labeltext">Phone number</label>
                                                <input placeholder='Phone Number'
                                                    type="text"
                                                    name="name"
                                                    className="mainInput"
                                                />
                                            </div>
                                        </div>
                                        <div className='col-lg-6'>
                                            <div className="mb_24">
                                                <label className="labeltext">Job Title</label>
                                                <input placeholder='Job Title'
                                                    type="text"
                                                    name="name"
                                                    className="mainInput"
                                                />
                                            </div>
                                        </div>
                                    </div>


                                    <div className='row'>
                                        <div className='col-lg-6'>
                                            <div className="mb_24">
                                                <label className="labeltext">Country</label>
                                                <input placeholder='Country'
                                                    type="text"
                                                    name="name"
                                                    className="mainInput"
                                                />
                                            </div>
                                        </div>
                                        <div className='col-lg-6'>
                                            <div className="mb_24">
                                                <label className="labeltext">Job Title</label>
                                              
                                                <select className="mainInput">
                                            <option></option>
                                         </select>
                                            </div>
                                        </div>
                                    </div>


                                    <button style={{ width:"100%" }}
                                        type="submit"
                                        className="mainbtn"
                                    >
                                        Submit
                                    </button>
                                </form>
                            </div>

                        </div>
                    </div>

                </div>

            </section>
        </>
    )
}

export default Page;
