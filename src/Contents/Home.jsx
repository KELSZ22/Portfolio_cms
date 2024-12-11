import {Link} from "react-router-dom";
function Home(){

    return (
        <div>
            
          

            <div className="skills-container">

                <label htmlFor="">Skills</label>

        <div className="skills-wrap">
                    <div className="web-skills">
    
                        <label htmlFor="">Web App</label>
    
                        <div class="webskills-img">
        
                            <img src="/skills-images/html.png" alt="html.png" />
        
                            <img src="/skills-images/css.png" alt="css.png" />
        
                            <img src="/skills-images/js.png" alt="js.png" />
        
                            <img src="/skills-images/react.png" alt="react.png" />
        
                            <img src="/skills-images/laravel.png" alt="laravel.png" />
        
                            <img src="/skills-images/wordpress.png" alt="wordpress.png" />
        
                            <img src="/skills-images/cordova.png" alt="cordova.png" />
        
                         </div>
    
                        
                         </div>
    
    
                        <div className="web-skills">
    
                        <label htmlFor="">Programming Languages</label>
    
                        <div class="webskills-img">
    
                            <img src="/skills-images/java.png" alt="java.png" />
    
                            <img src="/skills-images/php.png" alt="php.png" />
    
                            <img src="/skills-images/cplus.png" alt="cplus.png" />
    
                            <img src="/skills-images/python.png" alt="python.png" />
    
                            
                            

                        </div>


                            <label htmlFor="">Database</label>

                            <div className="webskills-img">

        
                                <img src="/skills-images/mysql.png" alt="mysql.png" />
        
                                <img src="/skills-images/mariadb.png" alt="mariadb.png" />
        
                                <img src="/skills-images/sqlite.png" alt="sqlite.png" />
                            </div>
    
    
    
                        </div>
    
    
                        <div className="web-skills">
    
                        <label htmlFor="">Designs/Editing</label>
    
                        <div class="webskills-img">
    
                            <img src="/skills-images/ps.png" alt="ps.png" />
    
                            <img src="/skills-images/ai.png" alt="ai.png" />
    
                            <img src="/skills-images/figma.png" alt="figma.png" />
    
                            <img src="/skills-images/autodesk.png" alt="autodesk.png" />
    
                        </div>
    
    
                        </div>
    

    
                    </div>
                </div>


            <div className="home-about-container">


                <label htmlFor="">About Me</label>
                
                 <img src="/about.png" alt="about.png" height="300px" width="300px"/>

                <p>I'm Michael Z. Sabino, a recent computer engineering bachelor's degree graduate, has a strong interest in software development and programming.  I have experience as a full-stack developer from my recent OJT, having worked on a variety of projects utilizing HTML,CSS, Javascript, Java,PHP, Laravel, and other. With  dedication to problem-solving and dedication, I'm looking forward to contribute new ideas and creativity to the tech field.</p>

            </div>



            <div className="projects-container">

             <h1> Projects</h1>

             <div className="projects-card-wrap">

                <div className="projects-card">

                    <img src="/webbased.png" alt="projects.png" height="200px"/>

                    <h4>Web-based Attendance Management System using QR Code</h4>

                    <h5> HTML,CSS,Javascript </h5>


                    <Link to="/project">More</Link>

                </div>

                  <div className="projects-card">

                    <img src="/salesbilling.png" alt="projects.png" height="200px"/>

                    <h4>SunGold Sales and Billing Management System</h4>

                    <h5> Java </h5>
                    
                    <Link to="/project">More</Link>

            

                </div>

                  <div className="projects-card">

                    <img src="/udm.png" alt="projects.png" height="200px"/>

                    <h4>UDM Library Management System</h4>

                    <h5> Java </h5>

                    <Link to="/project">More</Link>


                </div>

                  <div className="projects-card">

                    <img src="inventory.png" alt="projects.png" height="200px"/>

                    <h4>Inventory Management System</h4>

                    <h5> Java </h5>
                    
                    <Link to="/project">More</Link>


                </div>

            </div>




            </div>


            <div>

            <div className="contacts-container">
                <h1>Contacts</h1>

                <div className="contacts-content">
                    <p><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d965.2050919574647!2d120.9630736695074!3d14.609306596862266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ca74b8504f5f%3A0x629564a516e4eb37!2s1319%20Abad%20Santos%20St%2C%20Tondo%2C%20Manila%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1731127033583!5m2!1sen!2sph"  width="500" height="400px"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Address"></iframe></p>
    
                    <div className="contacts-input">

                            <div className="socials">
                                <a href="https://www.facebook.com/michael.sabino.7146">
                                    <img src="/fb.png" alt="fb.png" height="50px"/>
                                </a>   
                                <a href="https://www.instagram.com/kel_sz7/">
                                    <img src="/ig.png" alt="ig.png" height="50px"/>
                                </a>
                                <a href="mailto:michaels635524@gmail.com" title="michaels6355@gmail.com">
                                    <img src="/email.png" alt="email.png" height="50px"/>
                                </a>

                                <a href="" title="09358693624">
                                    <img src="/tg.png" alt="tg.png" height="50px"/>
                                </a>

                            </div>
    
                            <label htmlFor="">First Name:</label>
                            <input type="text" />
                            <label htmlFor="">Last Name:</label>
                            <input type="text" />
                            <label htmlFor="">Email:</label>
                            <input type="email" />


                            <label htmlFor="">Message</label>
                            <textarea cols="23" rows="10"/>
    
                            <button>Submit</button>
    
                        </div>
                </div>

                </div>

            </div>


        </div>
    )

}
export default Home