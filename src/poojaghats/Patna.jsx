import React from "react";
import "./patnaStyle.css";
import TypeIt from "typeit-react";
import BasicModal from "../components/Modal";
import Footer from "../components/Footer";
import Breadcrum from "../components/Breadcrum";

function Patna() {
  return (
    <>
      {/* <CustomNav /> */}
      <Breadcrum ghat="Patna"/>
      <div className="var-heading-container">
        <TypeIt>
          <h1 className="var-heading">Patna</h1>
        </TypeIt>
      </div>
      <div className="container">
        <div className="image-container">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Gandhi_Ghat2.JPG/1024px-Gandhi_Ghat2.JPG"
            alt=""
            style={{ boxShadow: "0 0 10px 10px rgba(255, 119, 0, 0.5);" }}
          />
        </div>
        <div className="text-container">
          <p>
            <h1>Gandhi Ghat</h1>
            Gandhi Ghat, situated on the banks of the Ganges River in Patna,
            holds historical and cultural significance.
            <BasicModal
              title="Gandhi Ghat"
              description=" Named after Mahatma Gandhi, the leader of the Indian independence movement, this ghat is renowned for its Evening Ganga Aarti, a ritualistic ceremony performed with 51 lamps by priests dressed in saffron robes. The Aarti commences with the blowing of a conch shell and includes intricate movements of incense sticks and circling of large burning lamps, creating a mesmerizing spectacle against the darkened sky
              
              .
              Apart from its religious practices, Gandhi Ghat is associated with the immersion of Mahatma Gandhi's ashes in the river Ganges. This adds a profound spiritual dimension to the ghat, attracting devotees and visitors seeking solace and connection to the revered leader's legacy. The location of Gandhi Ghat, behind the National Institute of Technology, Patna, around 5 kilometers northeast of Patna Junction railway station, makes it easily accessible to locals and tourists alike
              
              ."
            />
          </p>
        </div>
      </div>

      <div className="container">
        <div className="image-container-left">
          <img
            src="https://scontent.fccu11-1.fna.fbcdn.net/v/t1.6435-9/82749458_161260945216652_3415472123945156608_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=eVI7ygSTxaoAX8AYWjM&_nc_ht=scontent.fccu11-1.fna&oh=00_AfAqCyS4lE_jmDnWCR7Q_VtcUQihYYOvb95nsBF_eMtNgQ&oe=662A2DEF"
            alt=""
          />
        </div>
        <div className="text-container-left">
          <p>
            <h1> Collectorate Ghat</h1>
            Collectorate Ghat, located on the right bank of the Ganges river in
            Patna, is part of the proposed River Front Development project.
            <BasicModal
              title="Collectorate Ghat"
              description="This ghat exhibits a lower chloride value compared to other ghats in the area. It is highlighted for its modern amenities and infrastructure, attracting visitors for its cleanliness and well-organized facilities. However, safety issues at night due to inadequate lighting along the ghats pose challenges, especially for women and the general public. The ghat is part of the riverfront development plan, aiming to enhance its facilities and accessibility for various activities.              "
            />
          </p>
        </div>
      </div>
      <div className="container">
        <div className="image-container">
          <img
            src="https://www.trawell.in/admin/images/upload/555418767Kolkata_Kalighat_Temple_Main.jpg"
            alt=""
          />
        </div>
        <div className="text-container">
          <p>
            <h1>Kali Ghat</h1>
            Kali Ghat, one of the investigated ghats in Patna, stands out for
            exhibiting the highest chloride value among the studied ghats.
            <BasicModal
              title="Kali Ghat"
              description="While specific details about its cultural or historical significance are not extensively documented, Kali Ghat's water quality status is a subject of interest. This ghat's water quality status reflects the environmental conditions along the riverfront in the urban area of Patna, contributing to the overall understanding of water quality in the region."
            />
          </p>
        </div>
      </div>
      <div className="container">
        <div className="image-container-left">
          <img
            src="https://files.yappe.in/place/full/adalat-ghat-5304627.webp"
            alt=""
          />
        </div>
        <div className="text-container-left">
          <p>
            <h1>Adalat Ghat</h1>
            Adalat Ghat, another ghat along the Ganges river in Patna, is part
            of the proposed River Front Development project.
            <BasicModal
              title="Adalat Ghat"
              description="It is characterized by boulder pitching at the edges, aiming to protect the banks from erosion. The ghat's edge condition analysis is part of the environmental impact assessment study for the Ganga River Front Development in Patna. Adalat Ghat's historical importance and role in the city's heritage make it a significant site for various activities and gatherings along the riverfront"
            />
          </p>
        </div>
      </div>
      <div className="container">
        <div className="image-container">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/49/Gai_Ghat%2C_Varanasi.JPG"
            alt=""
          />
        </div>
        <div className="text-container">
          <p>
            <h1>Gai Ghat</h1>
            Gai Ghat, located near the Mahatma Gandhi Setu Bridge in Patna, is
            part of the proposed River Front Development project.
            <BasicModal
              title="Gai Ghat"
              description="This ghat plays a role in the city's cultural and religious events, hosting the Ganga Aarti and serving as a gathering place for devotees and visitors. The ghat's connection to local traditions and its potential for tourism and community engagement make it a notable spot along the Ganges river in Patna"
            />
          </p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
}

export default Patna;
