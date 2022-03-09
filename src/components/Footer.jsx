import React from 'react'

function Footer() {
    return (
        <div className='footer row d-flex'>
            <div className="my-5">
                <footer className="bg-dark text-center text-white">
                    <div className="container p-4">
                        <section className="mb-4">
                            <p>
                                This is a movie project created by the students below within the scope of Re:Coded's React Bootcamp in Turkey.
                            </p>
                        </section>

                        <section className="">
                            <div className="row d-flex">
                                <div className="col-lg col-md mb mb-md-0 p-3">
                                    <h5>Contributors</h5>

                                    <ul className="list-unstyled mb-0">
                                        <li>
                                            <a href="#!" className="text-white text-decoration-none contact--hover">Hazar Nas</a>
                                        </li>
                                        <li>
                                            <a href="#!" className="text-white text-decoration-none contact--hover">Oğuz Yılmaz</a>
                                        </li>
                                        <li>
                                            <a href="#!" className="text-white text-decoration-none contact--hover">Mustafa Durmaz</a>
                                        </li>
                                        <li>
                                            <a href="#!" className="text-white text-decoration-none contact--hover">Muhammed Yusuf Adıyaman</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className="text-center p-3">
                        © 2022 Copyright:
                        <a className="text-white text-decoration-none" href="https://github.com/MUHAMMED-YUSUF-ADIYAMAN/react-redux-moive-project"> Movie Project | Re:coded</a>
                    </div>
                </footer>

            </div>
        </div>
    )
}

export default Footer