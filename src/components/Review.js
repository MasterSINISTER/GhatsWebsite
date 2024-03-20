import React from 'react'
import './reviewCss.css'
import Heading from './Heading'

function Review() {
  return (
    <>
    
<div class="review-container">
    <div class="mgb-40 padb-30 auto-invert line-b-4 align-center">
        <h1 class="font-cond-b fg-text-d lts-md fs-300 fs-300-xs no-mg" contenteditable="false" id="heading-review">Read Customer Reviews</h1>
    </div>
    <ul class="hash-list cols-3 cols-1-xs pad-30-all align-center text-sm">
        <li>
          <img src="https://bootdey.com/img/Content/avatar/avatar1.png" class="wpx-100 img-round mgb-20" title="" alt="" data-edit="false" data-editor="field" data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]"/>
          <p class="fs-110 font-cond-l" contenteditable="false">"This Indian Ghats website is a gem! The detailed information about various ghats, along with stunning visuals, made my virtual exploration an enriching experience."</p>
          <h5 class="font-cond mgb-5 fg-text-d fs-130" contenteditable="false">Amit_Explorer</h5>
          <small class="font-cond case-u lts-sm fs-80 fg-text-l" contenteditable="false">Business Men - Chennai</small>
        </li>
        <li>
          <img src="https://bootdey.com/img/Content/avatar/avatar4.png" class="wpx-100 img-round mgb-20" title="" alt="" data-edit="false" data-editor="field" data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]"/>
          <p class="fs-110 font-cond-l" contenteditable="false">" The Indian Ghats website is a great starting point for anyone interested in understanding the beauty and spirituality of India's ghats. The visuals are breathtaking, and the site provides valuable insights into the rituals and traditions associated with each ghat. "</p>
          <h5 class="font-cond mgb-5 fg-text-d fs-130" contenteditable="false">Radhika_Wanderlust</h5>
          <small class="font-cond case-u lts-sm fs-80 fg-text-l" contenteditable="false">Recording Artist - Mumbai</small>
        </li>
        <li>
          <img src="https://bootdey.com/img/Content/avatar/avatar5.png" class="wpx-100 img-round mgb-20" title="" alt="" data-edit="false" data-editor="field" data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]"/>
          <p class="fs-110 font-cond-l" contenteditable="false">"As a history enthusiast, I was impressed by the depth of historical information presented on this Indian Ghats website. The narratives accompanying each ghat's description are well-researched and captivating."</p>
          <h5 class="font-cond mgb-5 fg-text-d fs-130" contenteditable="false">Deepak_HistoryBuff</h5>
          <small class="font-cond case-u lts-sm fs-80 fg-text-l" contenteditable="false">Fund Manager - Delhi</small>
        </li>
      </ul>
</div>
    
    
    </>
  )
}
export default Review;