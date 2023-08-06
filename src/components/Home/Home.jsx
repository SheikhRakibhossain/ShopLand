import React from 'react';

const Home = () => {
    return (
        <>


            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/this-is-same-shoes_329181-1769.jpg?w=1060&t=st=1691233843~exp=1691234443~hmac=84b6bab66dd63e320752100ae5b7781fbf20c8b9cb32f8e0cf277e67c75fdf97)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-success">Get Started</button>
                    </div>
                </div>
            </div>
            {/* counter 2nd section */}

            <div className="stats shadow grid-cols-3 sm:grid-cols-1">

                <div className="stat">
                    <div className="stat-figure text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    </div>
                    <div className="stat-title">Total Likes</div>
                    <div className="stat-value text-primary">25.6K</div>
                    <div className="stat-desc">21% more than last month</div>
                </div>
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div className="stat-title">Shopping </div>
                    <div className="stat-value text-secondary">2.6M</div>
                    <div className="stat-desc">21% more than last month</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <div className="avatar online">
                            <div className="w-16 rounded-full">
                                <img src="https://img.freepik.com/free-photo/beautiful-girl-stands-near-walll-with-leaves_8353-5377.jpg?w=360&t=st=1691234440~exp=1691235040~hmac=9488b6eb9fa738e3af193f0dc9fd423dfe6676fd137736a9256970984dad2309" />
                            </div>
                        </div>
                    </div>
                    <div className="stat-value">86%</div>
                    <div className="stat-title">Tasks done</div>
                    <div className="stat-desc text-secondary">31 tasks remaining</div>
                </div>
            </div>


            {/* box office here */}
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://img.freepik.com/free-vector/shopping-special-offers-discounts-promotions_24877-52225.jpg?w=740&t=st=1691234159~exp=1691234759~hmac=71a8ba943b0c73e0ca4994ca47c9f5f88862424184502160ed41c428bee365a3" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Box Office Offer News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-success">Take a ticket !</button>
                    </div>
                </div>
            </div>

            {/* stack the point */}
            <div className="stack">
                <div className="card shadow-md bg-primary text-primary-content">
                    <div className="card-body">
                        <h2 className="card-title">Notification 1</h2>
                        <p>You have 3 unread messages. Tap here to see.</p>
                    </div>
                </div>
                <div className="card shadow bg-primary text-primary-content">
                    <div className="card-body">
                        <h2 className="card-title">Notification 2</h2>
                        <p>You have 3 unread messages. Tap here to see.</p>
                    </div>
                </div>
                <div className="card shadow-sm bg-primary text-primary-content">
                    <div className="card-body">
                        <h2 className="card-title">Notification 3</h2>
                        <p>You have 3 unread messages. Tap here to see.</p>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Home;