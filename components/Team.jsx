// // components/TeamSection.jsx

// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBolt, faChargingStation, faBroadcastTower } from "@fortawesome/free-solid-svg-icons";


// const TeamSection = () => {
//   return (
//     // Team Start
//     <div className="container-fluid team pb-5">
//       <div className="container pb-5">
//         <div
//           className="d-flex flex-column mx-auto text-center mb-5 wow fadeInUp"
//           data-wow-delay="0.2s"
//           style={{ maxWidth: "800px" }}
//         >
//           <h4 className="text-primary">Our Team</h4>
//           <h1 className="display-4 mb-4">Electricity Service offerings</h1>
//           <p className="mb-0">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
//             deserunt provident ab voluptates rerum eaque eum magni autem atque
//             in minus laboriosam corrupti deleniti voluptatibus rem reiciendis
//             modi veniam animi?
//           </p>
//         </div>
//         <div className="row g-4">
//           {[
//             "team-1.jpg",
//             "team-2.jpg",
//             "team-3.jpg",
//             "team-4.jpg",
//           ].map((img, index) => (
//             <div
//               key={index}
//               className="col-md-6 col-lg-3 wow fadeInUp"
//               data-wow-delay={`${0.2 + index * 0.2}s`}
//             >
//               <div className="team-item">
//                 <div className="team-img">
//                   <img
//                     src={`img/${img}`}
//                     className="img-fluid w-100"
//                     alt=""
//                   />
//                   <div className="team-icon">
//                     <a className="btn btn-square btn-primary mb-2" href="">
//                       <i className="fab fa-facebook-f"></i>
//                     </a>
//                     <a className="btn btn-square btn-primary mb-2" href="">
//                       <i className="fab fa-twitter"></i>
//                     </a>
//                     <a className="btn btn-square btn-primary mb-2" href="">
//                       <i className="fab fa-instagram"></i>
//                     </a>
//                     <a className="btn btn-square btn-primary mb-2" href="">
//                       <i className="fab fa-linkedin-in"></i>
//                     </a>
//                   </div>
//                 </div>
//                 <div className="team-content bg-light text-center p-4">
//                   <h4>Shoaib Bashir</h4>
//                   <p className="mb-0">Profession</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//     // Team End
//   );
// };

// export default TeamSection;



// components/TeamSection.jsx

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const TeamSection = () => {
  return (
    // Team Start
    <div className="container-fluid team pb-5">
      <div className="container pb-5">
        <div
          className="d-flex flex-column mx-auto text-center mb-5 wow fadeInUp"
          data-wow-delay="0.2s"
          style={{ maxWidth: "800px" }}
        >
          <h4 className="text-primary">Our Team</h4>
          <h1 className="display-4 mb-4">Electricity Service offerings</h1>
          <p className="mb-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
            deserunt provident ab voluptates rerum eaque eum magni autem atque
            in minus laboriosam corrupti deleniti voluptatibus rem reiciendis
            modi veniam animi?
          </p>
        </div>
        <div className="row g-4">
          {["team-1.jpg", "team-2.jpg", "team-3.jpg", "team-4.jpg"].map(
            (img, index) => (
              <div
                key={index}
                className="col-md-6 col-lg-3 wow fadeInUp"
                data-wow-delay={`${0.2 + index * 0.2}s`}
              >
                <div className="team-item">
                  <div className="team-img">
                    <img
                      src={`img/${img}`}
                      className="img-fluid w-100"
                      alt=""
                    />
                    <div className="team-icon">
                      <a className="btn btn-square btn-primary mb-2" href="#">
                        <FontAwesomeIcon icon={faFacebookF} />
                      </a>
                      <a className="btn btn-square btn-primary mb-2" href="#">
                        <FontAwesomeIcon icon={faTwitter} />
                      </a>
                      <a className="btn btn-square btn-primary mb-2" href="#">
                        <FontAwesomeIcon icon={faInstagram} />
                      </a>
                      <a className="btn btn-square btn-primary mb-2" href="#">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                      </a>
                    </div>
                  </div>
                  <div className="team-content bg-light text-center p-4">
                    <h4>Shoaib Bashir</h4>
                    <p className="mb-0">Profession</p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
    // Team End
  );
};

export default TeamSection;
