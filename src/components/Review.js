import React from 'react'
import './reviewCss.css'
function Review() {
  return (
    <>
    
<div className="review-container">
    <div className="mgb-40 padb-30 auto-invert line-b-4 align-center">
        <h1 className="font-cond-b fg-text-d lts-md fs-300 fs-300-xs no-mg" contenteditable="false" id="heading-review">Read Customer Reviews</h1>
    </div>
    <ul className="hash-list cols-3 cols-1-xs pad-30-all align-center text-sm">
        <li>
          <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="wpx-100 img-round mgb-20" title="" alt="" data-edit="false" data-editor="field" data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]"/>
          <p className="fs-110 font-cond-l" contenteditable="false">"This Shoreline website is a gem! The detailed information about various ghats, along with stunning visuals, made my virtual exploration an enriching experience."</p>
          <h5 className="font-cond mgb-5 fg-text-d fs-130" contenteditable="false">Amit_Explorer</h5>
          <small className="font-cond case-u lts-sm fs-80 fg-text-l" contenteditable="false">Business Men - Chennai</small>
        </li>
        <li>
          <img src="https://images.pexels.com/photos/61100/pexels-photo-61100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="wpx-100 img-round mgb-20" title="" alt="" data-edit="false" data-editor="field" data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]"/>
          <p className="fs-110 font-cond-l" contenteditable="false">" The Shoreline website is a great starting point for anyone interested in understanding the beauty and spirituality of India's ghats. The visuals are breathtaking, and the site provides valuable insights into the rituals and traditions associated with each ghat. "</p>
          <h5 className="font-cond mgb-5 fg-text-d fs-130" contenteditable="false">Radhika_Wanderlust</h5>
          <small className="font-cond case-u lts-sm fs-80 fg-text-l" contenteditable="false">Recording Artist - Mumbai</small>
        </li>
        <li>
          <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=1" className="wpx-100 img-round mgb-20" title="" alt="" data-edit="false" data-editor="field" data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]"/>
          <p className="fs-110 font-cond-l" contenteditable="false">"As a history enthusiast, I was impressed by the depth of historical information presented on this Shoreline website. The narratives accompanying each ghat's description are well-researched and captivating."</p>
          <h5 className="font-cond mgb-5 fg-text-d fs-130" contenteditable="false">Deepak_HistoryBuff</h5>
          <small className="font-cond case-u lts-sm fs-80 fg-text-l" contenteditable="false">Fund Manager - Delhi</small>
        </li>
      </ul>
</div>
    
    
    </>
  )
}
export default Review;