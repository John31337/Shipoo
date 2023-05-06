import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router';
import { Wallet } from '../providers/WalletProvider';
import { useToast } from "@chakra-ui/react";
import useVisibiltyPercentage from 'use-visibility-percentage';
import 'swiper/css';

import Ellipse1 from "../assets/images/Ellipse-1-copy-5.png";
import Ellipse2 from "../assets/images/Ellipse-1-copy-6.png";
import big01 from "../assets/images/01-big.png";
import bowl2x from "../assets/images/bowl2x-p-500.png";
import dream12 from "../assets/images/dream2x.png";

import ki_facer from "../assets/images/ki-facer-1.png";
import ki_face_800 from "../assets/images/ki-facer-1-p-800.png";
import shape3 from "../assets/images/Shape-3-p-500.png";
import shape3_500 from "../assets/images/Shape-3-p-500.png";
import htb_shape from "../assets/images/htb-shape-behind-number.png";

import eyeglasses from "../assets/images/eyeglasses-kishu.png";
import eyeglasses_500 from "../assets/images/eyeglasses-kishu-p-500.png";
import eyeglasses_800 from "../assets/images/eyeglasses-kishu-p-800.png";
import eyeglasses_1080 from "../assets/images/eyeglasses-kishu-p-1080.png";
import floating from "../assets/images/floating-elements.png";
import floating_500 from "../assets/images/floating-elements-p-500.png";
import floating_800 from "../assets/images/floating-elements-p-800.png";

import kishu_rocket_alone from "../assets/images/kishu-rocket-alone.png";
import kishu_rocket_alone_500 from "../assets/images/kishu-rocket-alone-p-500.png";
import kishu_rocket_smoke from "../assets/images/kishu-rocket-smoke.png";
import kishu_rocket_space from "../assets/images/kishu-rocket-space.png";
import kishu_rocket_space_500 from "../assets/images/kishu-rocket-space-p-500.png";
import kishu_rocket_stars from "../assets/images/kishu-rocket-stars.png";
import kishu_rocket_stars_500 from "../assets/images/kishu-rocket-stars-p-500.png";
import kishu_rocket_stars_800 from "../assets/images/kishu-rocket-stars-p-800.png";
import kishu_rocket_trail from "../assets/images/kishu-rocket-trail.png";
import kishu_rocket_trail_500 from "../assets/images/kishu-rocket-trail-p-500.png";
import kishu_rocket_trail_800 from "../assets/images/kishu-rocket-trail-p-800.png";
import check_mark_green from "../assets/images/checkmark-green.svg";

import background_shape from "../assets/images/background-shape.png";
import background_shape_500 from "../assets/images/background-shape-p-500.png";
import background_shape_800 from "../assets/images/background-shape-p-800.png";
import v2_big from "../assets/images/08-v2-big.png";

import donate_qr_code from "../assets/images/donate-qr-code.png";
import donate_qr_code_500 from "../assets/images/donate-qr-code-p-500.png";
import binance from "../assets/images/binance.png"
import binance_500 from "../assets/images/binance-p-500.png";
import binance_800 from "../assets/images/binance-p-800.png";
import binance_1080 from "../assets/images/binance-p-1080.png";
import binance_2000 from "../assets/images/binance-p-2000.png";
import binance_2600 from "../assets/images/binance-p-2600.png";
import binance_3200 from "../assets/images/binance-p-3200.png";
import newsweek_logo from "../assets/images/newsweek-logo-vector2x.png";
import newsweek_logo_500 from "../assets/images/newsweek-logo-vector2x-p-500.png";
import sunmasthead2x from "../assets/images/sunmasthead2x.png";
import goth_cover_white2x from "../assets/images/GOTH_cover_white2x.png";
import mensbook_black2x from "../assets/images/MENSBOOK_black2x.png";
import mensbook_black2x_500 from "../assets/images/MENSBOOK_black2x-p-500.png";
import benzinga from "../assets/images/benzinga.png"
import benzinga_500 from "../assets/images/benzinga-p-500.png";
import benzinga_800 from "../assets/images/benzinga-p-800.png";
import benzinga_1600 from "../assets/images/benzinga-p-1600.png";
import benzinga_2000 from "../assets/images/benzinga-p-2000.png";

import vector_smart from "../assets/images/Vector-Smart-Object2x.png";
import vector_smart_500 from "../assets/images/Vector-Smart-Object2x-p-500.png";
import poop from "../assets/images/poop.png";

function Home() {
  const [hover, setHover] = useState(-1);
  return (
  <section id="home" class="hero wf-section">
    <div class="background-image is--hero"/>
    <div class="floating-elements-container">
        <div class="fl-element v1"><img src={Ellipse1} loading="lazy" alt=""/></div>
        <div class="fl-element v2"><img src={Ellipse2} loading="lazy" alt=""/></div>
    </div>
    <div class="container-1800">
        <div class="hero-content-wrapper">
            <div class="_2-col-grid is--hero">
                <div id="w-node-_151b762e-3975-8bd9-09a6-b15858026423-52018772" class="hero-text">
                    <h1 class="display">Bring your PEPE to the moon.</h1>
                    <p class="is--hero-text">Shipoo CEO ($PEPE) is a community-focused, decentralized cryptocurrency with instant rewards thanks to active users!🐶<br/></p>
                    <div class="hero-buttons">
                        <a href="https://kishu.com/get" target="_blank" class="cta-button red-button w-button">GET $PEPE</a>
                        <div class="hero-buttons-social">
                            <a href="https://t.me/kishuinucommunity" target="_blank" class="social-icon-item is--hero w-inline-block">
                                <div class="fa-social-icon is--hero"></div>
                            </a>
                            <a href="https://twitter.com/inukishu" target="_blank" class="social-icon-item is--hero w-inline-block">
                                <div class="fa-social-icon is--hero"></div>
                            </a>
                            <a href="https://kishuinu.medium.com/" target="_blank" class="social-icon-item is--hero w-inline-block">
                                <div class="fa-social-icon is--hero"></div>
                            </a>
                        </div>
                    </div>
                </div>
                <div id="w-node-c5f9f19b-7168-f059-943c-ccb78b848fa7-52018772" class="hero-graphics-wrapper">
                    <img src={big01} loading="lazy" alt="" class="kishu-tailwag is-full-height"/>
                    <img src={bowl2x} loading="lazy" sizes="(max-width: 479px) 96px, (max-width: 991px) 163.1875px, (max-width: 1919px) 176px, 257px" width="257" srcset={bowl2x} alt="" class="dog-bowl"/>
                    <img src={dream12} loading="lazy" width="193" alt="" class="kishu-dreambubble"/>
                </div>
            </div>
        </div>
    </div>
  </section>
  );
}

function How() {
  const [step, setStep] = useState(0);

  return (
    <section id="how-to-buy" class="how-to-get wf-section" >
        <div class="container-1800">
            <div class="section-heading">
                <h2 class="h2-what-is-kishu">How to get $PEPE</h2>
                <div class="accent-large">Add</div>
            </div>
            <div class="steps-container" style={{display: 'flex'}}>
              <div class="htbs-wrapper">
                  <div data-duration-in="300" data-duration-out="100" data-current="Tab 1" data-easing="ease" class="tabs w-tabs">
                      <div class="tabs-menu w-tab-menu" role="tablist">
                        <a data-w-tab="Tab 1" class={`htb-tab w-inline-block w-tab-link ${step == 0 ? 'w--current' : ''} `} id="w-tabs-0-data-w-tab-0" onClick={() => {setStep(0)}}>
                            <h6 class="htb-tab">STEP 1</h6>
                        </a>
                        <a data-w-tab="Tab 2" class={`htb-tab w-inline-block w-tab-link ${step == 1 ? 'w--current' : ''} `} id="w-tabs-0-data-w-tab-1" onClick={()=> {setStep(1)}}>
                            <h6 class="htb-tab">STEP 2</h6>
                        </a>
                        <a data-w-tab="Tab 4" class={`htb-tab w-inline-block w-tab-link ${step == 2 ? 'w--current' : ''} `} id="w-tabs-0-data-w-tab-3"  onClick={()=> {setStep(2)}}>
                            <h6 class="htb-tab">STEP 3</h6>
                        </a>
                      </div>
                      <div class="tabs-content w-tab-content">
                          <div data-w-tab="Tab 1" class={`w-tab-pane ${step == 0 ? 'w--tab-active' : ''}`} id="w-tabs-0-data-w-pane-0" role="tabpanel" aria-labelledby="w-tabs-0-data-w-tab-0">
                              <div class="htb-item">
                                  <div class="htb-number">
                                      <img src={htb_shape} loading="lazy" alt="" class="htb-shape"/>
                                      <div class="htb-number-text">01</div>
                                  </div>
                                  <div class="htb-text">
                                      <h4>Create a MetaMask Wallet</h4>
                                      <p>$PEPE token is available on the Ethereum blockchain. MetaMask is a third party ERC20 (Ethereum) browser wallet, and the very best at that! On Google Chrome, visit 
                                        <a href="https://metamask.io/" target="_blank"><strong> metamask.io</strong></a> to download the extension and set up a wallet. On mobile? Get MetaMask's app for <a href="https://metamask.app.link/skAH3BaF99" target="_blank"><strong>iPhone</strong></a> or <a href="https://metamask.app.link/bxwkE8oF99" target="_blank"><strong>Android</strong></a>.</p>
                                  </div>
                              </div>
                          </div>
                          <div data-w-tab="Tab 2" class={`tab-pane-tab-2 w-tab-pane ${step == 1 ? 'w--tab-active' : ''}`} role="tabpanel" aria-labelledby="w-tabs-0-data-w-tab-1">
                              <div class="htb-item">
                                  <div class="htb-number">
                                      <img src={htb_shape} loading="lazy" alt="" class="htb-shape"/>
                                      <div class="htb-number-text">02</div>
                                  </div>
                                  <div class="htb-text">
                                      <h4 class="heading-3">Send $ETH to MetaMask<br/></h4>
                                      <p>Acquire Ethereum through MetaMask itself or transfer it to your MetaMask wallet address from another wallet (e.g. Coinbase or Binance).<br/></p>
                                  </div>
                              </div>
                          </div>
                          <div data-w-tab="Tab 3" class={`w-tab-pane ${step == 2 ? 'w--tab-active' : ''}`} id="w-tabs-0-data-w-pane-3" role="tabpanel" aria-labelledby="w-tabs-0-data-w-tab-3">
                              <div class="htb-item">
                                  <div class="htb-number">
                                      <img src={htb_shape} loading="lazy" alt="" class="htb-shape"/>
                                      <div class="htb-number-text">03</div>
                                  </div>
                                  <div class="htb-text">
                                      <h4 class="heading-3">Swap $ETH for $PEPE<br/></h4>
                                      <p>Enter the amount of $ETH you would like to swap for $PEPE. Click <strong>Connect Wallet</strong> then <strong>Swap</strong><br/></p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>              
              {/* <div class="dog-frisbee-wrapper">
                  <div id="w-node-_82d26454-4b9c-a99d-09e5-0cacf9e7004a-52018772" class="frisbee-wrapper">
                    <img src={ki_facer} loading="lazy" width="515" sizes="100vw" srcset={`${ki_face_800} 800w, ${ki_facer} 1030w`} alt="" class="image-5"/>
                  </div>
              </div> */}
              <div style={{width: '100%', height: '100%', display: 'flex', flexDirection: 'column'}}><iframe src="https://app.uniswap.org/#/swap?outputCurrency=0x7345577Fc896952426922dd886dB641A4Fe13387" height="660px" width="100%">
                </iframe></div>
            </div>

        </div>
    </section>
  );
}

function Stats1() {
  const domRef = React.useRef();
  const [percentage, position] = useVisibiltyPercentage(domRef, {throttle: 64});

  const getScrollValue = (item) => {
    var value = 0;
    switch(item) {
      case 1:
        if(position == "bottom")
          if(percentage > 0 && percentage <= 0.2) 
            value = percentage * 20;
          else if(percentage > 0.2 && percentage < 0.4)
            value = 1;
          else if(percentage >= 0.4 && percentage < 0.5)
            value = 1 - (percentage - 0.4) * 10;
          else value = 0;
        break;
      case 2:
        if(position == "top")
          value = 1;
        else
          if(percentage > 0.55 && percentage <= 0.65)
            value = (percentage - 0.55) * 10;
          else if(percentage > 0.65)
            value = 1;
          else value = 0;
        break;
    }
    return value;
  }

  return (
    <section id="stats" class="stats wf-section" ref={domRef}>
        <div class="container-1800">
            <div class="section-heading is--stats">
                <div class="accent-large">Stats</div>
                <h2 class="h2-what-is-kishu">Tokenomics &amp; Stats</h2>
            </div>
            <div data-w-id="b83854f4-0edc-97bf-60d8-a3002264f569" class="stats-scrolling-container">
                <div class="_2-col-grid bottom-padding is--sticky">
                    <div id="w-node-b83854f4-0edc-97bf-60d8-a3002264f56b-52018772" class="left-col">
                        <div data-w-id="bbec4ffd-9457-b4fd-d633-2fb6ea1e88f5" class="tokenomics-image">
                          <img src={eyeglasses} loading="lazy" sizes="(max-width: 479px) 100vw, (max-width: 767px) 45vw, 46vw" srcset={`${eyeglasses_500} 500w, ${eyeglasses_800} 800w, ${eyeglasses_1080} 1080, ${eyeglasses} 1516w` } alt="" class="eyeglasses-kishu"/>
                        <div class="floating-elements-container"></div>
                          <img src={floating} loading="lazy" sizes="(max-width: 479px) 100vw, (max-width: 767px) 45vw, 46vw" srcset={`${floating_500} 500w, ${floating_800} 800w, ${floating} 895w`} alt="" class="image-20"/>
                        </div>
                        <div class="tokenomics-image _2">
                          <img src={eyeglasses} loading="lazy" sizes="(max-width: 479px) 100vw, (max-width: 767px) 45vw, 46vw" srcset={`${eyeglasses_500} 500w, ${eyeglasses_800} 800w, ${eyeglasses_1080} 1080, ${eyeglasses} 1516w` } alt="" class="eyeglasses-kishu"/>
                        </div>
                    </div>
                    <div id="w-node-b83854f4-0edc-97bf-60d8-a3002264f576-52018772" class="right-col">
                        <div data-w-id="f260eb35-8ea4-0380-4a92-2422d676718f" class="tokenomics-text-item" style={{willChange: 'opacity, transform', opacity: getScrollValue(1), transform: `translate3d(0px, 40px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`, transformStyle: 'preserve-3d'}}>
                            <div class="flex-vertical">
                                <h3 class="red is--tokenomics">$PEPE</h3>
                                <h5 class="gray">TOKEN SYMBOL</h5>
                            </div>
                            <div class="flex-vertical centered">
                                <h3 class="red is--tokenomics">20% Usage Reward</h3>
                                <h5 class="gray">Thanks to user transactions (DeFi wallets only!)</h5>
                            </div>
                            <div class="flex-vertical">
                                <h3 class="red is--tokenomics">420,690,000,000,000</h3>
                                <h5 class="gray">TOTAL SUPPLY</h5>
                            </div>
                        </div>
                        <div id="price-chart" data-w-id="911dc789-cd8c-3157-6ceb-b918bd87e7db" class="tokenomics-text-item" style={{willChange: 'opacity, transform', opacity: getScrollValue(2), transform: `translate3d(0px, 40px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`, transformStyle: 'preserve-3d'}}>
                            <div class="flex-vertical">
                                <h3 id="holders" class="red is--tokenomics" style={{paddingBottom: 100}}>No taxes, no fees - it's that crap-tivatingly simple!</h3>
                                <h5 class="gray" style={{textTransform: 'none'}}>80% of the tokens plunged right into the porcelain pool of liquidity, LP tokens were flushed away, and the contract is pooperly renounced. The remaining 20% of the supply is nestled in a multi-poo-g wallet, destined to fertilize future centralized exchange listings, dungy bridges, and liquid-poo pools. You can sniff out this wallet with the ENS name "pepepoowallet.eth"</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>    
    );
}
function Moonmap() {
    const domRef = React.useRef();
    const [percentage, position] = useVisibiltyPercentage(domRef, {throttle: 64});
    console.log('position', percentage, position);
  
    const getScrollValue = (item) => {
      var value = 0;
      switch(item) {
        case 1:
          if(position == "bottom" && percentage > 0.3)
            value = (percentage - 0.3) * 300;
          else if(position == "top") value = 210;
          break;
        case 2:
          if(position == "bottom" && percentage > 0.3 && percentage <= 0.5)
            value = (percentage - 0.3) * 100;
          else if(position == "top") value = 20;
          break;
        case 3:
          if(position == "bottom" && percentage > 0.3 && percentage <= 0.5)
            value = (percentage - 0.3) * 20;
          else if(position == "top") value = 4;
          break;
      }
      return value;
    }
  
    return(
      <div id="moonmap" class="moonmap wf-section">
          <div class="container-1800">
              <div class="section-heading">
                  <div class="accent-large">Liftoff</div>
                  <h2 class="h2-moonmap">Moonmap</h2>
                  <p class="_w-660 centered">PEPEPOO launched on April 17, 2023 and quickly became one of the most popular cryptocurrencies of 2023. This Moonmap is a breathing document that lays out key milestones the community aims to hit to continue rapid and decentralized development and moonlike features!<br/></p>
              </div>
          </div>
          <div class="moonmap-scrolling-wrapper"  ref={domRef}>
              <div class="moonmap-horiztonal-scrolling-container">
                  <div class="sticky-container horizontal">
                      <div class="flex-horizontal" style={{willChange: 'transform', transform: `translate3d(-${getScrollValue(1)}em, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`, transformStyle: 'preserve-3d'}}>
                          <div class="kishu-rocket-wrapper">
                              <img src={kishu_rocket_alone} loading="lazy" sizes="(max-width: 479px) 336px, (max-width: 1919px) 593.828125px, 37vw" srcset={`${kishu_rocket_alone_500} 500w, ${kishu_rocket_alone} 791w`} alt="" class="kishu-rocket" style={{willChange: 'transform', transform: `translate3d(-${getScrollValue(2)}em, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`, transformStyle: 'preserve-3d'}}/>
                              <img src={kishu_rocket_stars} loading="lazy" sizes="(max-width: 479px) 336px, (max-width: 1919px) 672px, 42vw" srcset={`${kishu_rocket_stars_500} 500w, ${kishu_rocket_stars_800} 800w, ${kishu_rocket_stars} 915w`} alt="" class="rocket-stars" style={{willChange: 'transform', transform: `translate3d(-${getScrollValue(3)}em, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`, transformStyle: 'preserve-3d'}}/>
                              <img src={kishu_rocket_trail} loading="lazy" srcset={`${kishu_rocket_trail_500} 500w, ${kishu_rocket_trail_800} 800w, ${kishu_rocket_trail} 805w`} sizes="(max-width: 479px) 100vw, (max-width: 1919px) 672px, 805px" alt="" class="rocket-trail" style={{willChange: 'width, height, opacity, transform', transform: `translate3d(-${getScrollValue(2)}em, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`, transformStyle: 'preserve-3d', opacity: getScrollValue(2) / 20, width: `${getScrollValue(2) * 5}%`}}/>
                              <img src={kishu_rocket_smoke} loading="lazy" width="164.5" alt="" class="rocket-smoke" style={{willChange: 'transform, opacity', transform: `translate3d(${getScrollValue(2) * 0.9}em, -3em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`, transformStyle: 'preserve-3d', opacity: getScrollValue(2) / 20}}/>
                              <img src={kishu_rocket_space} loading="lazy" data-w-id="b901c4bf-ff2e-dbae-ab88-d6aa4c2268f2" sizes="(max-width: 479px) 336px, (max-width: 1919px) 672px, 710px" srcset={`${kishu_rocket_space_500} 500w, ${kishu_rocket_space} 710w`} alt="" class="space" style={{willChange: 'transform', transform: `translate3d(0em, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`, transformStyle: 'preserve-3d'}}/>
                          </div>
                          <div class="moonmap-phase-wrapper">
                              <div class="phase">
                                  <div class="accent-small centered">PHASE 1</div>
                              </div>
                              <div class="phase-details">
                                  <h6 class="phase-status">PHASE COMPLETE</h6>
                                  <h3 class="phase-name">Launch</h3>
                                  <div class="phase-activities">
                                      <div class="phase-activity-item">
                                          <img src={check_mark_green} loading="lazy" alt="" class="green-checkmark"/>
                                          <p class="no-bottom-padding">1,000 Holders</p>
                                      </div>
                                      <div class="phase-activity-item">
                                          <img src={check_mark_green} loading="lazy" alt="" class="green-checkmark"/>
                                          <p class="no-bottom-padding">Website Launch</p>
                                      </div>
                                      <div class="phase-activity-item">
                                          <img src={check_mark_green} loading="lazy" alt="" class="green-checkmark"/>
                                          <p class="no-bottom-padding">CoinGecko Listing</p>
                                      </div>
                                      <div class="phase-activity-item">
                                          <img src={check_mark_green} loading="lazy" alt="" class="green-checkmark"/>
                                          <p class="no-bottom-padding">2,000 Telegram Members </p>
                                      </div>
                                      <div class="phase-activity-item">
                                          <img src={check_mark_green} loading="lazy" alt="" class="green-checkmark"/>
                                          <p class="no-bottom-padding">Community Marketing Fund</p>
                                      </div>
                                      <div class="phase-activity-item">
                                          <img src={check_mark_green} loading="lazy" alt="" class="green-checkmark"/>
                                          <p class="no-bottom-padding">Marketing Campaign</p>
                                      </div>
                                      <div class="phase-activity-item">
                                          <img src={check_mark_green} loading="lazy" alt="" class="green-checkmark"/>
                                          <p class="no-bottom-padding">CoinMarketCap Listing</p>
                                      </div>
                                      <div class="phase-activity-item">
                                          <img src={check_mark_green} loading="lazy" alt="" class="green-checkmark"/>
                                          <p class="no-bottom-padding">5,000 Holders</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="moonmap-phase-wrapper">
                              <div class="phase">
                                  <div class="accent-small centered">PHASE 2</div>
                              </div>
                              <div class="phase-details">
                                  <h6 class="phase-status">PHASE COMPLETE</h6>
                                  <h3 class="phase-name">Growth</h3>
                                  <div class="phase-activities">
                                      <div class="phase-activity-item">
                                          <img src={check_mark_green} loading="lazy" alt="" class="green-checkmark"/>
                                          <p class="no-bottom-padding">5,000 Telegram Members</p>
                                      </div>
                                      <div class="phase-activity-item">
                                          <img src={check_mark_green} loading="lazy" alt="" class="green-checkmark"/>
                                          <p class="no-bottom-padding">Website Redesign</p>
                                      </div>
                                      <div class="phase-activity-item">
                                          <img src={check_mark_green} loading="lazy" alt="" class="green-checkmark"/>
                                          <p class="no-bottom-padding">10,000 Holders</p>
                                      </div>
                                      <div class="phase-activity-item">
                                          <img src={check_mark_green} loading="lazy" alt="" class="green-checkmark"/>
                                          <p class="no-bottom-padding">10,000 Telegram Members</p>
                                      </div>
                                      <div class="phase-activity-item">
                                          <img src={check_mark_green} loading="lazy" alt="" class="green-checkmark"/>
                                          <p class="no-bottom-padding">20,000 Holders</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="moonmap-phase-wrapper">
                              <div class="phase">
                                  <div class="accent-small centered">PHASE 3</div>
                              </div>
                              <div class="phase-details">
                                  <h6 class="phase-status">PHASE COMPLETE</h6>
                                  <h3 class="phase-name">Expansion</h3>
                                  <div class="phase-activities">
                                      <div class="phase-activity-item">
                                          <img src={check_mark_green} loading="lazy" alt="" class="green-checkmark"/>
                                          <p class="no-bottom-padding">PEPEPOO Swap (Decentralize Exchange)<br/></p>
                                      </div>
                                      <div class="phase-activity-item">
                                          <img src={check_mark_green} loading="lazy" alt="" class="green-checkmark"/>
                                          <p class="no-bottom-padding">Initial CEX Listings (Hotbit, Bilaxy, CoinTiger)<br/></p>
                                      </div>
                                      <div class="phase-activity-item">
                                          <img src={check_mark_green} loading="lazy" alt="" class="green-checkmark"/>
                                          <p class="no-bottom-padding">15,000 Telegram Members<br/></p>
                                      </div>
                                      <div class="phase-activity-item">
                                          <img src={check_mark_green} loading="lazy" alt="" class="green-checkmark"/>
                                          <p class="no-bottom-padding">30,000 Holders<br/></p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="moonmap-phase-wrapper">
                              <div class="phase">
                                  <div class="accent-small centered">PHASE 4</div>
                              </div>
                              <div class="phase-details">
                                  <h6 class="phase-status">PHASE COMPLETE</h6>
                                  <h3 class="phase-name">Utility<br/></h3>
                                  <div class="phase-activities">
                                      <div class="phase-activity-item">
                                          <img src={check_mark_green} loading="lazy" alt="" class="green-checkmark"/>
                                      <p class="no-bottom-padding">100,000 Holders<br/></p>
                                      </div>
                                      <div class="phase-activity-item">
                                          <img src={check_mark_green} loading="lazy" alt="" class="green-checkmark"/>
                                          <p class="no-bottom-padding">PEPEPOO Crate (NFT Marketplace)<br/></p>
                                      </div>
                                      <div class="phase-activity-item">
                                          <img src={check_mark_green} loading="lazy" alt="" class="green-checkmark"/>
                                          <p class="no-bottom-padding">PEPEPOO Paw Print (Wallet Tracker)<br/></p>
                                      </div>
                                      <div class="phase-activity-item">
                                          <img src={check_mark_green} loading="lazy" alt="" class="green-checkmark"/>
                                          <p class="no-bottom-padding">PEPEPOO sWag (Merchandise Store)<br/></p>
                                      </div>
                                      <div class="phase-activity-item">
                                          <img src={check_mark_green} loading="lazy" alt="" class="green-checkmark"/>
                                          <p class="no-bottom-padding">More CEX Listings<br/></p>
                                      </div>
                                      <div class="phase-activity-item">
                                          <img src={check_mark_green} loading="lazy" alt="" class="green-checkmark"/>
                                          <p class="no-bottom-padding">50,000 Telegram Members<br/></p>
                                      </div>
                                      <div class="phase-activity-item">
                                          <img src={check_mark_green} loading="lazy" alt="" class="green-checkmark"/>
                                          <p class="no-bottom-padding">Influencer Awareness Partnerships<br/></p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="moonmap-phase-wrapper">
                              <div class="phase">
                                  <div class="accent-small centered">PHASE 5</div>
                              </div>
                              <div class="phase-details">
                                  <h6 class="phase-status in-progress">IN PROGRESS</h6>
                                  <h3 class="phase-name">Prosperity<br/></h3>
                                  <div class="phase-activities">
                                      <div class="phase-activity-item">
                                          <img src={check_mark_green} loading="lazy" alt="" class="green-checkmark off"/>
                                          <p class="no-bottom-padding">500,000 Holders<br/></p>
                                      </div>
                                      <div class="phase-activity-item">
                                          <img src={check_mark_green} loading="lazy" alt="" class="green-checkmark"/>
                                          <p class="no-bottom-padding">Shipoo NFT Collection<br/></p>
                                      </div>
                                      <div class="phase-activity-item">
                                          <img src={check_mark_green} loading="lazy" alt="" class="green-checkmark off"/>
                                          <p class="no-bottom-padding">Shipoo CEO Charity Foundation<br/></p>
                                      </div>
                                      <div class="phase-activity-item">
                                          <img src={check_mark_green} loading="lazy" alt="" class="green-checkmark off"/>
                                          <p class="no-bottom-padding">Tier 1 CEX Listings<br/></p>
                                      </div>
                                      <div class="phase-activity-item">
                                          <img src={check_mark_green} loading="lazy" alt="" class="green-checkmark off"/>
                                          <p class="no-bottom-padding">More Revealed Soon...<br/></p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>    
    )
  }
  
  function Team() {
    return (
      <div id="team" class="community wf-section">
          <div class="container-1800">
              <div class="section-heading is--team">
                  <div class="accent-large">Team</div>
              </div>
              <div class="_2-col-grid offset-up">
                  <div id="w-node-_391e2546-a76a-347f-e976-6f8a9a5ab3a6-52018772" class="team-img-wrapper">
                      <img src={background_shape} loading="lazy" width="884" sizes="(max-width: 767px) 100vw, (max-width: 991px) 34vw, (max-width: 1919px) 46vw, 100vw" srcset={`${background_shape_500} 500w, ${background_shape_800} 800w, ${background_shape} 857w`} alt="" class="team-img"/>
                      <img src={v2_big} loading="lazy" alt="" class="image-21"/>
                  </div>
                  <div class="team-text-wrapper">
                      <h2 class="h2-team">Join us</h2>
                      <p class="_w-660">PEPEPOO is a decentralized group of 20+ volunteers community managers with expertise in development, moderation and group coordination. Feel free to say "Hi!".<br/></p>
                      <div class="hero-buttons">
                          <a href="mailto:woof@kishu.com?subject=Volunteer%20Application" class="cta-button red-button w-button">join US</a>
                          <a href="mailto:woof@kishu.com?subject=Partnership%20Proposal" class="cta-button w-button">PARTNER WITH US</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    )
  }
function Donate() {
  return (
  <section id="donate" class="donate wf-section">
      <div class="container-1800">
          <div class="section-heading is--donate">
              <div class="accent-large">Donate</div>
          </div>
          <div class="_2-col-grid is--donate">
              <div id="w-node-_4cfe832b-f15b-0fee-a5f2-47da4f1898fd-52018772" class="donate-text-wrapper">
                  <h2>Feel like <br/>donating?</h2>
                  <p class="_w-520 is--token-code">As a community-powered project, PEPE runs thanks to its amazing volunteers and generous donors. If you would like to pitch in, use the official ERC20 donation wallet here:<br/><br/>0xB7852D285f31B740318CAb51B<br/>d0E5E7936073725<br/><strong class="bold-text"><br/>Accepted: </strong>Any ERC20 token<strong class="bold-text"><br/>Preferred: </strong>$ETH, $USDC, $PEPE</p>
                  <a href="https://etherscan.io/address/0xB7852D285f31B740318CAb51Bd0E5E7936073725" target="_blank" class="cta-button red-button w-button">View on etherscan</a>
              </div>
              <div id="w-node-_4cfe832b-f15b-0fee-a5f2-47da4f1898fb-52018772" class="donate-imgs">
                <img src={donate_qr_code} loading="lazy" width="884" sizes="(max-width: 479px) 100vw, (max-width: 767px) 45vw, (max-width: 1919px) 46vw, 100vw" srcset={`${donate_qr_code_500} 500w, ${donate_qr_code} 777w`} alt="" class="donate-qr-code"/>
              </div>
          </div>
          <div class="press-logos-wrapper">
              <a id="w-node-_8d5d293f-b1a7-74ff-1732-75fc22a0ef52-52018772" href="https://academy.binance.com/en/articles/what-are-meme-coins" target="_blank" class="press-logo-item w-inline-block">
                <img src={binance} loading="lazy" width="347" sizes="(max-width: 479px) 100vw, (max-width: 1919px) 30vw, 347px" srcset={`${binance_500} 500w, ${binance_800} 800w, ${binance_1080} 1080w, ${binance_2000} 2000w, ${binance_2600} 2600w, ${binance_2600} 2600w, ${binance_3200} 3200w, ${binance} 3616w`} alt="" class="press-logo"/>
              </a>
              <a id="w-node-_0bf0944c-da9d-96e5-0b3a-64471302930e-52018772" href="https://www.newsweek.com/buy-kishu-inu-new-crypto-dogecoin-big-brother-1590404" target="_blank" class="press-logo-item w-inline-block">
                <img src={newsweek_logo} loading="lazy" width="347" sizes="(max-width: 479px) 100vw, (max-width: 1919px) 30vw, 347px" srcset={`${newsweek_logo_500} 500w, ${newsweek_logo} 694w`} alt="" class="press-logo"/>
              </a>
              <a id="w-node-_5b3309ca-e69c-4f7e-afe2-342d4be4e06e-52018772" href="https://www.thesun.co.uk/money/14953721/how-risky-is-kishu-inu/" target="_blank" class="press-logo-item w-inline-block">
                <img src={sunmasthead2x} loading="lazy" width="174" alt="" class="press-logo"/>
              </a>
              <a id="w-node-_6f2d8d68-fceb-992f-b7a7-37bcffd1a88f-52018772" href="https://gothammag.com/kishu-inu-times-square" target="_blank" class="press-logo-item w-inline-block">
                <img src={goth_cover_white2x} loading="lazy" width="210" alt="" class="press-logo"/>
              </a>
              <a id="w-node-_2f860849-106d-97cf-9d22-ef4e2a2335ee-52018772" href="https://mensbook.com/kishu-in-cryptocurrency" target="_blank" class="press-logo-item w-inline-block">
                <img src={mensbook_black2x} loading="lazy" width="347" sizes="(max-width: 479px) 100vw, (max-width: 1919px) 30vw, 347px" srcset={`${mensbook_black2x_500} 500w, ${mensbook_black2x} 694w`} alt="" class="press-logo"/>
              </a>
              <a id="w-node-bfeb0d3b-e397-fefb-5370-485994f2eca9-52018772" href="https://www.benzinga.com/markets/cryptocurrency/21/11/23782788/why-is-kishu-inu-coin-price-going-up-today" target="_blank" class="press-logo-item w-inline-block">
                <img src={benzinga} loading="lazy" width="347" sizes="(max-width: 479px) 100vw, (max-width: 1919px) 30vw, 347px" srcset={`${benzinga_500} 500w, ${benzinga_800} 800w, ${benzinga_1600} 1600w, ${benzinga_2000} 2000w, ${benzinga} 2580w`} alt="" class="press-logo"/>
              </a>
          </div>
      </div>
  </section>
  );
}

function Follow() {
  return (
    <div id="follow" class="footer wf-section">
        <div class="footer-relative-wrapper">
        <div class="footer-bg-imgs">
          <img src={v2_big} loading="lazy" width="380" sizes="(max-width: 479px) 100vw, 380px" alt="" class="unicorn-kishu"/>
          <img src={poop} loading="lazy" width="240" alt="" class="unicorn-poop"/>
          </div>
            <div class="logo-and-social-wrapper">
                <div class="social-icons">
                    <a href="https://t.me/kishuinucommunity" target="_blank" class="social-icon-item w-inline-block">
                        <div class="fa-social-icon"></div>
                    </a>
                    <a href="https://twitter.com/inukishu" target="_blank" class="social-icon-item w-inline-block">
                        <div class="fa-social-icon"></div>
                    </a>
                    <a href="https://kishuinu.medium.com/" target="_blank" class="social-icon-item w-inline-block">
                        <div class="fa-social-icon"></div>
                    </a>
                </div>
            </div>
        </div>
        <div class="copyright">
            <p class="white">Copyright © 2023, Shipoo CEO</p>
        </div>
    </div>
  );
}

export default function Main() {
  const { networkId, isConnected } = useContext(Wallet);
  const toast = useToast();
  const navigate = useNavigate();
  return (
    <div>
      <div class="back-to-top">
        <a href="#home" class="capitals nav-link is--back-to-top w--current">BACK TO TOP</a>
      </div>
      <Home/>
      <How/>
      <Stats1/>
      <Moonmap/>
      <Donate/>
      <Follow/>
    </div>
  )
}
