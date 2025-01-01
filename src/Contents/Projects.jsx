import {Link} from "react-router-dom";

function Projects (){

    return(
   <div>

<<<<<<< HEAD
            <div className="contacts-container">
                <h1>Projects</h1>

                <div className="contacts-content">
                    <p><iframe src="https://mi-calculator-gamma.vercel.app/"  width="500" height="400px"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Address"></iframe></p>
    
                    <div className="contacts-input">

                        <label htmlFor=""> MiCalculator Ver. 1.0</label>
                        <p> This Project MiCalculator is part of my practice</p>
                          </div>
                
                </div>

                </div>
=======

<div className="projects-container">
>>>>>>> d71352fcfd65c8a3ec2903572f5e8219aa5b1773

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

   <div className="projects-card">

<img src="/batteryApp.png" alt="projects.png" height="200px"/>

<h4>Battery App: Battery Life Saver</h4>

<h5> Cordova </h5>

<Link to="/project">More</Link>


</div>

<div className="projects-card">

<img src="/myportfolio1.png" alt="projects.png" height="200px"/>

<h4>My Portfolio</h4>

<h5> HTML, CSS, Javascript </h5>
<a href="https://kelsz22.github.io/My_Portfolio/?fbclid=IwY2xjawHGcV1leHRuA2FlbQIxMAABHaBSP2ilfuXb0sgglEx-Tjg2UbEMY21xq8KxdCJHlxOgDtfzVDfURhwW8g_aem__8FO_PwoYeT0DWarNCquFA" target="_blank"> MyPortfolio</a>
<Link to="/project">More</Link>


</div>


<div className="projects-card">

<img src="/wordpress.png" alt="projects.png" height="200px"/>

<h4>My Portfolio</h4>

<h5> Wordpress </h5>
<a href="https://nidali0910.wordpress.com/" target="_blank"> MyPortfolio</a>
<Link to="/project">More</Link>


</div>


</div>




</div>


    );



}
export default Projects;