import { Link } from "react-router-dom";


function Homepage() { 
  return (
    <>
      {/* HEADER SECTION */}
    <section class="teamheader">
        <div class="text-box">
            <h1>Powerful websites for growing companies.</h1>
            <p>
                The goal isn’t to build a website. The goal is to build and ignite your business.
            </p>
            <Link to="#" className="mainBtn">Visit us to know more</Link>
        </div>
    </section>
  
    {/* SERVICES SECTION */}
    <section className="services">
        <h1>What we can do?</h1>

        <div className="row">
            <div className="services-col">
                <h3>Front-End Development</h3>
                <p>We are programmers with a keen eye for design, alignment of web design, user experiences, optimizing web pages for maximum efficiency, and maintaining brand consistency across all web pages.</p>
            </div>

            <div className="services-col">
                <h3>Back-End Development</h3>
                <p>We work alongside front end developers, full stack developers, programmers or UX specialists to create comprehensive digital solutions for business needs. We make sure the website is scalable and that it can still function when hit by large loads—be that traffic or demanding scripts. We are also tasked with maintaining and testing existing back end elements to ensure they’re as fast and efficient as possible. Data storage also comes under their remit, which requires them to have a good knowledge of data security and compliance.</p>
            </div>

            <div className="services-col">
                <h3>Full-Stack Development</h3>
                <p>We are also a Full Stack Developer to produce scalable software solutions. We can work on both the back-end and front-end of systems. This means that we can develop fully fledged platforms (with databases, servers and clients) which don’t need other applications to function.</p>
            </div>

        </div>
    </section>

    {/* OUR TEAM SECTION */}
    <section className="team" id="ourTeam">
        <h1>Our Team</h1>

        <div className="row">
            <div className="team-col">
                <img src="assets/Gabriel.png" alt="Gabriel's Avatar"/>
                <div className="img-layer">
                <h3>Gabriel Abiera</h3>
                </div>
            </div>

            <div className="team-col">
                <img src="assets/Lolife.png" alt="Lolife's Avatar"/>
                <div className="img-layer">
                    <h3>Lolife Cabrera</h3>
                </div>
            </div>

            <div className="team-col">
                <img src="assets/Kevin.png" alt="Kevin's Avatar"/>
                <div className="img-layer">
                    <h3>Kevin Ebio</h3>
                </div>
            </div>
        </div>
    </section>

    {/* PERKS SECTION */}
    <section className="perks">
        <h5>YOUR CAREER SHOULD GIVE YOU</h5>
        <h1>The Life You Want</h1>
        <p>You’re more than a job title and 40-hour work week. We get it.<br />Come be part of the Koders family and fuel your passion for work and life.</p>
        <div className="row">
            <div className="perks-col">
                <img src="assets/LevelUp.jpg" alt="Level Up" />
                <h3>Level Up</h3>
                <p>Professional development courses</p>
            </div>
            <div className="perks-col">
                <img src="assets/TakeTimeForYou.jpg" alt="Take Time for You" />
                <h3>Take Time for You</h3>
                <p>“Use What You Need” time away from work policy</p>
            </div>
            <div className="perks-col">
                <img src="assets/FindBalance.jpg" alt="Find Balance" />
                <h3>Find Balance</h3>
                <p>On-site gym &amp; wellness classNames</p>
            </div>
            <div className="perks-col">
                <img src="assets/StayHealthy.jpg" alt="Stay Healthy" />
                <h3>Stay Healthy</h3>
                <p>Health, dental, vision, disability &amp; life insurance</p>
            </div>
            <div className="perks-col">
                <img src="assets/FamilyMatters.jpg" alt="Family Matters" />
                <h3>Family Matters</h3>
                <p>Birthing parents will be paid up 100% for up to 22 weeks, Non-birthing parents will be paid 100% for up to 12 weeks</p>
            </div>
        </div>
    </section>

    {/* CONTACT SECTION */}
    <section className="contact">
        <h1>Connect with us. We'd love to hear from you!</h1>
         <Link to="/contact" className="mainBtn">Contact Us</Link>
    </section>
    </>
  );
}

export default Homepage