import React from "react";
import "./prayagrajStyle.css";
import CustomNav from "../components/CustomNav";
import TypeIt from "typeit-react";
import BasicModal from "../components/Modal";
import Footer from "../components/Footer";
import Breadcrum from "../components/Breadcrum";

function Prayagraj() {
  return (
    <>
      {/* <CustomNav /> */}
      <Breadcrum ghat="Haridwar"/>
      <div className="var-heading-container">
        <TypeIt>
          <h1 className="var-heading">Haridwar</h1>
        </TypeIt>
      </div>
      <div className="container">
        <div className="image-container">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Evening_view_of_Har-ki-Pauri%2C_Haridwar.jpg"
            alt=""
            style={{ boxShadow: "0 0 10px 10px rgba(255, 119, 0, 0.5);" }}
          />
        </div>
        <div className="text-container">
          <p>
            <h1>Har Ki Pauri</h1>
            Har Ki Pauri is the iconic and revered ghat (riverfront steps) on
            the banks of the holy River Ganges in Haridwar, Uttarakhand.
            <BasicModal
              title="Har Ki Pauri"
              description=" It is the pre-eminent sacred site in Haridwar, where devotees congregate to take a holy dip in the Ganges and perform ritualistic activities. The name 'Har Ki Pauri' literally means 'Footsteps of the Lord'.

              This celebrated ghat is characterized by its series of steps that lead down to the waters of the Ganges, flanked by intricately carved sandstone temples and shrines. Every evening, the renowned Ganga Aarti (river worship ceremony) takes place at Har Ki Pauri, where priests perform a mesmerizing ritual with lit lamps, bells, and chants, attracting thousands of spectators. During major festivals like Kumbh Mela, millions of pilgrims throng to Har Ki Pauri to partake in the sacred rituals and take a purifying dip in the revered river.
              
              Har Ki Pauri is not just a religious site but also an iconic symbol of Haridwar's spiritual legacy and cultural heritage."
            />
          </p>
        </div>
      </div>

      <div className="container">
        <div className="image-container-left">
          <img
            src="https://gouttrakhand.com/wp-content/uploads/2023/02/kushavarta-ghat.jpg"
            alt=""
          />
        </div>
        <div className="text-container-left">
          <p>
            <h1>Kushavarta Ghat</h1>
            Kushavarta Ghat is an ancient and highly revered ghat (riverfront
            steps) located on the banks of the holy River Ganges in Haridwar.{" "}
            <BasicModal
              title="Kushavarta Ghat"
              description="It is one of the oldest and most significant ghats, believed to date back to the Vedic era. According to Hindu mythology, Lord Vishnu is said to have performed penance at this ghat, making it a sacred site for taking a purifying dip in the Ganges. During major festivals like the Kumbh Mela, millions of devotees congregate at Kushavarta Ghat to partake in religious rituals and immerse themselves in the holy waters. With its intricate stone carvings, ancient temples, and spiritual aura, Kushavarta Ghat is an integral part of Haridwar's rich cultural heritage.

              "
            />
          </p>
        </div>
      </div>
      <div className="container">
        <div className="image-container">
          <img
            src="https://www.allinharidwar.com/wp-content/uploads/2016/01/Asthi-Pravah-Ghat-Haridwar.jpg"
            alt=""
          />
        </div>
        <div className="text-container">
          <p>
            <h1>Asthi Pravah Ghat</h1>
            Asthi Pravah Ghat is a renowned riverfront ghat situated on the
            banks of the sacred River Ganges in Haridwar.{" "}
            <BasicModal
              title="Asthi Pravah Ghat"
              description=" It holds immense religious and cultural significance in the Hindu tradition. The ghat is primarily known as the site where Hindus immerse the ashes of their departed loved ones in the holy Ganges, seeking liberation (Moksha) for the deceased souls.

              Devotees from across India and worldwide visit Asthi Pravah Ghat to perform the final ritualistic rites and immerse the ashes in the revered river, as it is believed to help the soul attain salvation and break the cycle of rebirth. The ghat features a series of steps leading down to the river, adorned with intricate carvings and shrines dedicated to various deities.
              
              During major festivals like Kumbh Mela and Ganga Dussehra, Asthi Pravah Ghat witnesses a significant influx of pilgrims and mourners seeking spiritual solace and performing the sacred rituals. With its deep-rooted religious and cultural significance, Asthi Pravah Ghat is an integral part of Haridwar's spiritual heritage.
              
              "
            />
          </p>
        </div>
      </div>
      <div className="container">
        <div className="image-container-left">
          <img
            src="https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2020/07/16/Pictures/_a494de7c-c758-11ea-bb10-7020e33bb367.jpg"
            alt=""
          />
        </div>
        <div className="text-container-left">
          <p>
            <h1>Subhash Ghat</h1>
            Subhash Ghat is a historically significant ghat (riverfront steps)
            located on the banks of the holy River Ganges in Haridwar.{" "}
            <BasicModal
              title="Subhash Ghat"
              description="Named after the renowned Indian revolutionary Subhash Chandra Bose, who visited Haridwar in 1939, this ghat is known for its intricate stone carvings and architectural beauty. It serves as a popular site for performing religious rituals, taking sacred dips in the Ganges, and witnessing the captivating Ganga Aarti (river worship ceremony) in the evenings. Subhash Ghat also hosts various cultural events and festivals, showcasing Haridwar's rich heritage. With its historical importance and vibrant atmosphere, it is a must-visit destination for pilgrims and tourists alike.
              
              "
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

export default Prayagraj;
