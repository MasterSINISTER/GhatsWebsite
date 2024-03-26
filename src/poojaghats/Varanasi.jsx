import React from "react";
import "./varanasiStyle.css";
import CustomNav from "../components/CustomNav";
import TypeIt from "typeit-react";
import BasicModal from "../components/Modal";
import Footer from "../components/Footer";
import Breadcrum from "../components/Breadcrum";
// import { Breadcrumbs } from "@mui/material";

function Varanasi() {
  return (
    <>
      {/* <CustomNav /> */}
      <Breadcrum ghat="Varanasi"/>
      <div className="var-heading-container">
        <TypeIt>
          <h1 className="var-heading">Varanasi</h1>
        </TypeIt>
      </div>
      <div className="container">
        <div className="image-container">
          <img
            src="https://cms.patrika.com/wp-content/uploads/2019/11/12/ujj1311.jpg"
            alt=""
            style={{ boxShadow: "0 0 10px 10px rgba(255, 119, 0, 0.5);" }}
          />
        </div>
        <div className="text-container">
          <p>
            <h1>Assi Ghat</h1>
            Assi Ghat is the southernmost ghat in Varanasi. To most visitors to
            Varanasi, it is known for being a place where long-term foreign
            students, researchers, and tourists live.
            <BasicModal
              title="Assi Ghats"
              description="Assi Ghat nestled along the banks of the sacred river Ganges in Varanasi, India, is a vibrant cultural hub and a significant pilgrimage site. Named after the Assi River that meets the Ganges at this spot, the ghat attracts pilgrims, tourists, and locals alike. Its serene ambiance offers a tranquil escape from the bustling city life, inviting visitors to partake in spiritual rituals, yoga sessions, and boat rides. Assi Ghat also hosts lively cultural events, music performances, and religious ceremonies, adding to its allure. It symbolizes the spiritual essence and timeless charm of Varanasi, a city steeped in rich history and sacred traditions."
            />
          </p>
        </div>
      </div>

      <div className="container">
        <div className="image-container-left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/32/Bhonsale_Ghat_%2813535658844%29.jpg"
            alt=""
          />
        </div>
        <div className="text-container-left">
          <p>
            <h1>Bhonsale Ghat</h1>
            Bhonsale Ghat, nestled along the banks of the sacred Godavari River
            in Nashik, Maharashtra, India, stands as a timeless testament to the
            region's rich historical and cultural heritage.
            <BasicModal
              title="Bhonsale Ghat"
              description="This iconic ghat, named after the prominent Maratha ruler Shivaji Maharaj's clan, the Bhonsales, holds profound significance for locals and pilgrims alike.

At the heart of Bhonsale Ghat lies its spiritual aura. Devotees flock to this sacred spot to partake in religious rituals, ceremonies, and holy dips in the purifying waters of the Godavari. As one of the key ghats in Nashik, Bhonsale Ghat serves as a crucial venue for various religious festivals and events, drawing crowds from far and wide.

Beyond its spiritual allure, Bhonsale Ghat also carries a rich historical legacy. It is believed that the Maratha king, Shivaji Maharaj, himself once graced this very spot, leaving an indelible mark on the region's history. The ghat's architecture reflects the grandeur of Maratha design, with ornate steps leading down to the riverbank, flanked by temples and other structures.

For locals, Bhonsale Ghat is not just a place of worship but also a hub of social and cultural activity. Families often gather here for picnics, enjoying the serene ambiance and panoramic views of the Godavari. Street vendors selling traditional snacks and souvenirs add to the vibrant atmosphere, creating a lively scene that epitomizes the essence of Nashik's cultural tapestry."
            />
          </p>
        </div>
      </div>
      <div className="container">
        <div className="image-container">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Chet_Singh_Ghat_in_Varanasi.jpg/1024px-Chet_Singh_Ghat_in_Varanasi.jpg"
            alt=""
          />
        </div>
        <div className="text-container">
          <p>
            <h1>Cheet Singh Ghat</h1>
            Cheet Singh Ghat, situated along the banks of the sacred Ganges
            River in Varanasi, Uttar Pradesh, India, is a revered landmark
            steeped in history and spirituality.
            <BasicModal
              title="Cheet Singh Ghat"
              description="Named after the philanthropist and devotee, Cheet Singh, this ghat holds profound significance for pilgrims, locals, and visitors alike.

The ghat's history traces back centuries, reflecting the rich tapestry of Varanasi's cultural heritage. It is believed that Cheet Singh, a devout follower of Lord Shiva, played a pivotal role in the construction and development of the ghat, dedicating his life and resources to its upkeep and maintenance. His selfless devotion earned him a place of honor in the annals of Varanasi's history.

At the heart of Cheet Singh Ghat lies its spiritual ambiance. Devotees throng to this sacred spot to perform religious rituals, ceremonies, and ablutions in the holy waters of the Ganges, seeking spiritual purification and blessings. The ghat also serves as a venue for various religious festivals and events, resonating with the chants of prayers and hymns that fill the air."
            />
          </p>
        </div>
      </div>
      <div className="container">
        <div className="image-container-left">
          <img
            src="https://www.optimatravels.com/images/varanasi-images/darbhanga-ghat-varanasi-800x400.jpg"
            alt=""
          />
        </div>
        <div className="text-container-left">
          <p>
            <h1>Darbhanga Ghat</h1>
            Darbhanga Ghat, nestled on the western bank of the revered Ganges
            River in Varanasi, Uttar Pradesh, India, is a significant cultural
            and religious landmark steeped in history and spirituality.
            <BasicModal
              title="Darbhanga Ghat"
              description="Named after the erstwhile royal family of Darbhanga, this ghat is renowned for its architectural beauty, religious significance, and cultural vibrancy.

The history of Darbhanga Ghat dates back several centuries, reflecting the rich tapestry of Varanasi's cultural heritage. It was constructed by the Maharaja of Darbhanga, a prominent ruler in the region, who dedicated the ghat to the service of Lord Shiva, one of the principal deities in Hinduism. The ghat's architecture bears witness to the grandeur of its royal patronage, with intricately carved stone steps leading down to the sacred waters of the Ganges.

At the heart of Darbhanga Ghat lies its spiritual essence. Devotees flock to this sacred spot to perform religious rituals, ceremonies, and ablutions in the purifying waters of the Ganges, seeking spiritual solace and blessings. The ghat is also renowned for hosting various religious festivals and events throughout the year, attracting pilgrims and tourists from far and wide."
            />
          </p>
        </div>
      </div>
      <div className="container">
        <div className="image-container">
          <img
            src="https://varanasi.tourismindia.co.in/images/places-to-visit/headers/dashashwamedh-ghat-varanasi-tourism-entry-fee-timings-holidays-reviews-header.jpg"
            alt=""
          />
        </div>
        <div className="text-container">
          <p>
            <h1>Dashasvamedha Ghat</h1>
            Dashashwamedh Ghat, one of the most renowned and vibrant ghats in
            Varanasi, India, embodies a rich tapestry of religious, cultural,
            and historical significance.
            <BasicModal
              title="Dashasvamedha Ghat"
              description="Nestled along the banks of the sacred Ganges River, this ghat serves as a focal point for pilgrims, tourists, and locals alike, drawing them into its mystical allure.

              Legend has it that Lord Brahma, the creator in Hindu mythology, performed the Dashashwamedh sacrifice at this very spot, hence its name. This mythological association infuses the ghat with an aura of sanctity and reverence.
              
              Every day at dawn, Dashashwamedh Ghat comes alive with the rhythmic chants of priests performing the Ganga Aarti, a captivating ritual dedicated to the river goddess Ganga. Devotees gather in large numbers to witness this spectacle, as the priests offer prayers, light oil lamps, and swing incense burners in harmonious synchrony, creating an ethereal ambiance that is both mesmerizing and spiritually uplifting."
            />
          </p>
        </div>
      </div>
      <div className="container">
        <div className="image-container-left">
          <img
            src="https://banarastrip.com/wp-content/uploads/2022/01/Janaki-Ghat-in-Varanasi.jpg"
            alt=""
          />
        </div>
        <div className="text-container-left">
          <p>
            <h1>Janki Ghat</h1>
            Janki Ghat, situated along the sacred banks of the Ganges River in
            Varanasi, India, is a lesser-known but historically significant ghat
            in the city's extensive network of waterfront embankments.
            <BasicModal
              title="Janki Ghat"
              description="Named after the revered Hindu deity Sita, also known as Janki, this ghat holds religious and cultural significance for devotees and visitors alike.

              Unlike some of the more bustling and well-known ghats in Varanasi, Janki Ghat offers a quieter and more contemplative atmosphere, making it an ideal spot for spiritual reflection and meditation. Here, visitors can escape the hustle and bustle of the city and immerse themselves in the serene beauty of the Ganges River.
              
              Janki Ghat is also known for its scenic views of the river and the surrounding landscape, making it a popular destination for photographers and artists seeking inspiration in Varanasi's timeless charm."
            />
          </p>
        </div>
      </div>
      <div className="container">
        <div className="image-container">
          <img
            src="https://hcp.co.in/wp-content/uploads/elementor/thumbs/Feature-1-pw5504v4ksusioag9r615pryxehynqcuiqjyv3y8sg.jpg"
            alt=""
          />
        </div>
        <div className="text-container">
          <p>
            <h1>Lalita Ghat</h1>
            Lalita Ghat, nestled along the revered Ganges River in Varanasi,
            India, is a site steeped in spiritual significance and historical
            charm.
            <BasicModal
              title="Lalita Ghat"
              description="Named after the Hindu goddess Lalita, this ghat offers a serene atmosphere for devotees and visitors seeking solace and contemplation. Its ancient architecture and quiet ambiance make it an ideal spot for meditation and prayer. Pilgrims often visit Lalita Ghat to perform rituals and ceremonies, honoring both the river and the divine. With its timeless allure and tranquil beauty, Lalita Ghat remains a cherished gem along the sacred waterfront of Varanasi, inviting all to experience its mystical embrace."
            />
          </p>
        </div>
      </div>
      <div className="container">
        <div className="image-container-left">
          <img
            src="https://i0.wp.com/varanasivideos.com/wp-content/uploads/2019/01/Anandmai_Ghat.jpg?fit=1600%2C900&ssl=1"
            alt=""
          />
        </div>
        <div className="text-container-left">
          <p>
            <h1>Mata Anandmayee Ghat</h1>
            Mata Anandamayi Ghat, situated on the holy banks of the Ganges in
            Varanasi, India, is dedicated to the revered spiritual figure, Mata
            Anandamayi.
            <BasicModal
              title="Mata Anandmayee Ghat"
              description="This ghat holds profound significance for followers of Mata Anandamayi, who was known for her teachings on love, compassion, and spiritual enlightenment. Pilgrims and devotees gather at this tranquil ghat to pay homage to Mata Anandamayi and seek her blessings. With its serene ambiance and spiritual resonance, Mata Anandamayi Ghat serves as a sacred space for reflection, meditation, and connection with the divine, drawing seekers from across the world to its hallowed shores."
            />
          </p>
        </div>
      </div>
      <div className="container">
        <div className="image-container">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Manikarnika_Cremation_Ghat%2C_Varanasi.jpg/1024px-Manikarnika_Cremation_Ghat%2C_Varanasi.jpg"
            alt=""
          />
        </div>
        <div className="text-container">
          <p>
            <h1>Manikarnika Ghat</h1>
            Manikarnika Ghat, situated on the banks of the Ganges River in Varanasi, India, holds immense spiritual significance in Hindu mythology and tradition. 
            <BasicModal
              title="Manikarnika Ghat"
              description="Revered as one of the oldest and most sacred ghats in Varanasi, Manikarnika Ghat is believed to be the spot where Lord Shiva's earring (Manikarnika) fell during a cosmic dance, hence its name.

              This ghat is synonymous with the Hindu belief in the cycle of life and death, as it is considered one of the holiest places for cremation. Hindus believe that cremation at Manikarnika Ghat grants liberation from the cycle of rebirth, attaining moksha.
              
              The ghat bustles with activity day and night as funeral pyres burn continuously, accompanied by the chanting of sacred mantras. Families from all over India bring the bodies of their loved ones to Manikarnika Ghat for the final rites, believing that the divine power of Lord Shiva sanctifies the cremation process."
            />
          </p>
        </div>
      </div>
      <div className="container">
        <div className="image-container-left">
          <img
            src="https://kashibanaras.com/wp-content/uploads/2021/10/manmandir1-1536x1028.jpg"
            alt=""
          />
        </div>
        <div className="text-container-left">
          <p>
            <h1>Manmandir Ghat</h1>
            Manmandir Ghat, nestled along the sacred Ganges River in Varanasi, India, is a historical and architectural gem that reflects the city's rich cultural heritage.
            <BasicModal
              title="Manmandir Ghat"
              description="Built by Maharaja Man Singh of Amber in the 16th century, this ghat is adorned with intricate carvings and ornate balconies, showcasing exquisite Rajput architecture.

              The centerpiece of Manmandir Ghat is the magnificent Manmandir Palace, which served as a royal residence for the Maharaja. The palace is adorned with elaborately carved balconies, domes, and latticed windows, reminiscent of a bygone era of grandeur and opulence.
              
              Today, Manmandir Ghat remains a popular destination for tourists and history enthusiasts, offering panoramic views of the Ganges River and the bustling waterfront of Varanasi. Visitors can explore the palace's architectural marvels and soak in the serene ambiance of the ghat, which is also a popular spot for spiritual practices such as meditation and yoga."
            />
          </p>
        </div>
      </div>
      <br/><br/><br/><br/>
      <Footer/>
    </>
  );
}

export default Varanasi;
