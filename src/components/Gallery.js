import React from "react";
import "./galleryCss.css";
import CustomNav from "./CustomNav";

export default function Gallery() {
  return (
    <>
      <CustomNav />
      <h1 className="gallery-heading">Memorable Moments</h1>
      <div className="main-container">
        <div class="card">
          <img
            src="https://images.hindustantimes.com/img/2021/04/16/550x309/eb3451cc-9e95-11eb-a9a0-55dd4cd60b71_1618565835390.jpg"
            width="24"
            height="24"
          />
          <div class="card__content">
            <p class="card__title">Varanasi</p>
            <p class="card__description">
              In Varanasi, also known as Kashi or Banaras, the ghats along the
              sacred Ganges River are integral to the city's spiritual and
              cultural identity.
            </p>
          </div>
        </div>
        <div class="card">
          <img
            src="https://www.global-gallivanting.com/wp-content/uploads/2016/12/IMG_20161020_100720-1050x759.jpg"
            width="24"
            height="24"
          />
          <div class="card__content">
            <p class="card__title">Assi Ghat</p>
            <p class="card__description">
              Frequented by pilgrims and tourists, especially during festivals
              like Shivratri and Dev Deepawali.
            </p>
          </div>
        </div>
        <div class="card">
          <img
            src="https://media.licdn.com/dms/image/D4D12AQFENYEB69gX-w/article-cover_image-shrink_720_1280/0/1683189003204?e=1717027200&v=beta&t=Sl8j2IAe-YxFpdthvPEZJQGmhghye8EKUVzdVphLZuE"
            width="24"
            height="24"
          />
          <div class="card__content">
            <p class="card__title">Panchganga Ghat</p>
            <p class="card__description">
              Said to be the confluence of five mythical rivers, offering a
              serene setting for rituals and prayers.
            </p>
          </div>
        </div>
        <div class="card">
          <img
            src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*PnZ2ZWDaGMBgchmj28s9OA.jpeg"
            width="24"
            height="24"
          />
          <div class="card__content">
            <p class="card__title">Manmandir Ghat</p>
            <p class="card__description">
              Features the historic Manmandir Palace and offers panoramic views
              of the Ganges.
            </p>
          </div>
        </div>
        <div class="card">
          <img
            src="https://static.toiimg.com/photo/65666636/mahakal1.jpg?width=748&resize=4"
            width="24"
            height="24"
          />
          <div class="card__content">
            <p class="card__title">Harsiddhi Temple</p>
            <p class="card__description">
              Built by Emperor Vikramaditya, the Harsiddhi Temple is dedicated
              to Goddess Harsiddhi, an incarnation of Goddess Parvati. The
              temple is renowned for its elaborate
            </p>
          </div>
        </div>
        <div class="card">
          <img
            src="https://cdn.guidetour.in/wp-content/uploads/2023/04/Kaal-Bhairav-Temple.jpg"
            width="24"
            height="24"
          />
          <div class="card__content">
            <p class="card__title">Mangalnath Temple</p>
            <p class="card__description">
              Situated atop the Mangalnath Hill, this temple is dedicated to
              Lord Mangal, the planet Mars. It is believed to be the birthplace
              of Mars according to Hindu mythology and is a significant
              pilgrimage site for devotees seeking astrological remedies.
            </p>
          </div>
        </div>
        <div class="card">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Vishram_Ghat.jpg/1280px-Vishram_Ghat.jpg"
            width="24"
            height="24"
          />
          <div class="card__content">
            <p class="card__title">Sandipani Ashram Temple</p>
            <p class="card__description">
              Located on the banks of the Shipra River, this temple is
              associated with the ancient Sandipani Ashram where Lord Krishna
              and Sudama received their education from Sage Sandipani. The
              temple complex also includes a gurukul and a meditation center.
            </p>
          </div>
        </div>
        <div class="card">
          <img
            src="https://timesofindia.indiatimes.com/thumb/50835672.cms?width=800&height=600"
            width="24"
            height="24"
          />
          <div class="card__content">
            <p class="card__title">Mahavir Mandir</p>
            <p class="card__description">
              Dedicated to Lord Hanuman, Mahavir Mandir is one of the most
              visited temples in Patna. It is renowned for its grand
              architecture and is believed to fulfill the wishes of devotees.
            </p>
          </div>
        </div>
        <div class="card">
          <img
            src="https://www.civitatis.com/f/india/agra/excursion-mathura-589x392.jpg"
            width="24"
            height="24"
          />
          <div class="card__content">
            <p class="card__title">Vishnupad Temple</p>
            <p class="card__description">
              Located in the vicinity of Patna, in the town of Gaya, Vishnupad
              Temple is dedicated to Lord Vishnu. It is believed to enshrine
              Lord Vishnu's footprints, making it a significant pilgrimage site
              for Hindus.
            </p>
          </div>
        </div>
        <div class="card">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Trayambakeshwar_Temple_VK.jpg/1024px-Trayambakeshwar_Temple_VK.jpg"
            width="24"
            height="24"
          />
          <div class="card__content">
            <p class="card__title">Sheetla Mata Mandir</p>
            <p class="card__description">
              This temple is dedicated to Sheetla Mata, the goddess of smallpox.
              It is believed that visiting this temple can ward off diseases and
              bring healing to devotees.
            </p>
          </div>
        </div>
        <div class="card">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Ghats_on_the_Ganges_near_Parmarth_Niketan%2C_Muni_Ki_Reti%2C_Rishikesh.jpg/1024px-Ghats_on_the_Ganges_near_Parmarth_Niketan%2C_Muni_Ki_Reti%2C_Rishikesh.jpg"
            width="24"
            height="24"
          />
          <div class="card__content">
            <p class="card__title">Daksheshwar Mahadev Temple</p>
            <p class="card__description">
              Dedicated to Lord Shiva, Daksheshwar Mahadev Temple is associated
              with the legend of Daksha Yagna. It is located near Har Ki Pauri
              and is believed to be the site where Lord Shiva's anger led to the
              destruction of Daksha's yagna.
            </p>
          </div>
        </div>
        <div class="card">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Evening_praying_time_at_Parmarth_Niketan_ghat%2C_by_the_Ganges%2C_Rishikesh.jpg"
            width="24"
            height="24"
          />
          <div class="card__content">
            <p class="card__title"> Parmarth Niketan</p>
            <p class="card__description">
              Parmarth Niketan is not only a ghat but also a renowned ashram and
              spiritual center situated along the banks of the holy Ganges
              River. Parmarth Niketan Ashram is famous for its spiritual
              ambiance, yoga and meditation programs, and various humanitarian
              activities.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
