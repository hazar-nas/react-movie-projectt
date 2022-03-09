import React from 'react'

function Footer() {
    return (
        <div className='footer row d-flex'>
            <div className="my-5">
                <footer className="bg-dark text-center text-white">
                    <div className="container p-4">

                        <section className="">
                            <form action="">
                                <div className="row d-flex justify-content-center">
                                    <div className="col-auto">
                                        <p className="pt-2">
                                            <strong>Sign up for our newsletter</strong>
                                        </p>
                                    </div>

                                    <div className="col-md-5 col-12">
                                        <div className="form-outline form-white mb-4">
                                            <input type="email" id="form5Example2" className="form-control" />
                                            <label className="form-label" htmlFor="form5Example2">Email address</label>
                                        </div>
                                    </div>

                                    <div className="col-auto">
                                        <button type="submit" className="btn btn-outline-light mb-4">
                                            Subscribe
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </section>

                        <section className="mb-4">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
                                repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
                                eum harum corrupti dicta, aliquam sequi voluptate quas.
                            </p>
                        </section>

                        <section className="">
                            <div className="row d-flex">
                                <div className="col-lg col-md mb mb-md-0">
                                    <h5>Contributors</h5>

                                    <ul className="list-unstyled mb-0">
                                        <li>
                                            <a href="#!" className="text-white">Hazar Nas</a>
                                        </li>
                                        <li>
                                            <a href="#!" className="text-white">Muhammed Yusuf Adıyaman</a>
                                        </li>
                                        <li>
                                            <a href="#!" className="text-white">Mustafa Durmaz</a>
                                        </li>
                                        <li>
                                            <a href="#!" className="text-white">Oğuz Yılmaz</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className="text-center p-3 footerContact">
                        © 2022 Copyright:
                        <a className="text-white" href="https://github.com/MUHAMMED-YUSUF-ADIYAMAN/react-redux-moive-project"> Movie Project | Re:coded</a>
                    </div>
                </footer>

            </div>
        </div>
    )
}

export default Footer