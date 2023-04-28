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

import shining_star from "../assets/images/shining-stars-.png";
import shining_star500 from "../assets/images/shining-stars--p-500.png";
import v1_small from "../assets/images/02-v1-small.png";
import png1 from "../assets/images/1.png";
import png1_800 from "../assets/images/1-p-800.png";
import png3 from "../assets/images/3.png";
import png3_800 from "../assets/images/3-p-800.png";

import ki_facer from "../assets/images/ki-facer-1.png";
import ki_face_800 from "../assets/images/ki-facer-1-p-800.png";
import shape3 from "../assets/images/Shape-3-p-500.png";
import shape3_500 from "../assets/images/Shape-3-p-500.png";
import frisbee from "../assets/images/frisbee.png";
import frisbee_800 from "../assets/images/frisbee-p-800.png";
import frisbee_1080 from "../assets/images/frisbee-p-1080.png";
import shape4 from "../assets/images/Shape-4.png";
import htb_shape from "../assets/images/htb-shape-behind-number.png";

import eyeglasses from "../assets/images/eyeglasses-kishu.png";
import eyeglasses_500 from "../assets/images/eyeglasses-kishu-p-500.png";
import eyeglasses_800 from "../assets/images/eyeglasses-kishu-p-800.png";
import eyeglasses_1080 from "../assets/images/eyeglasses-kishu-p-1080.png";
import floating from "../assets/images/floating-elements.png";
import floating_500 from "../assets/images/floating-elements-p-500.png";
import floating_800 from "../assets/images/floating-elements-p-800.png";

import purple_paw from "../assets/images/purple-paw-2.png";
import purple_paw_500 from "../assets/images/purple-paw-2-p-500.png";
import purple_paw_800 from "../assets/images/purple-paw-2-p-800.png";
import purple_screenshot from "../assets/images/screnshot.png";

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

import dog_faq  from "../assets/images/dog-FAQ.png";
import dog_faq_500 from "../assets/images/dog-FAQ-p-500.png";

import background_shape from "../assets/images/background-shape.png";
import background_shape_500 from "../assets/images/background-shape-p-500.png";
import background_shape_800 from "../assets/images/background-shape-p-800.png";
import v2_big from "../assets/images/08-v2-big.png";

import donate_qr_code from "../assets/images/donate-qr-code.png";
import donate_qr_code_500 from "../assets/images/donate-qr-code-p-500.png";
import big_09 from "../assets/images/09-big.gif";
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
                    <h1 class="display">Bring your dream to the moon.</h1>
                    <p class="is--hero-text">Shipoo CEO ($SHIPOO) is a community-focused, decentralized cryptocurrency with instant rewards thanks to active users!🐶<br/></p>
                    <div class="hero-buttons">
                        <a href="https://kishu.com/get" target="_blank" class="cta-button red-button w-button">GET $SHIPOO</a>
                        <a href="https://kishu.com/whitepaper" target="_blank" class="cta-button w-button">WHITEPAPER</a>
                    </div>
                    <div class="hero-buttons">
                        <a href="https://exchange.kishu.com/#/swap?inputCurrency=ETH&amp;outputCurrency=0x52662717e448be36Cb54588499D5A8328BD95292" target="_blank" class="cta-button tenshi w-button">GET $TENSHI</a>
                        <a href="https://www.tenshicoin.io/" target="_blank" class="cta-button tenshi w-button">$TENSHI&nbsp;WEB</a>
                    </div>
                    <div class="social-icons is--hero">
                    <a href="https://t.me/kishuinucommunity" target="_blank" class="social-icon-item is--hero w-inline-block">
                        <div class="fa-social-icon is--hero"></div>
                    </a>
                    <a href="https://www.reddit.com/r/KishuInu/" target="_blank" class="social-icon-item is--hero w-inline-block">
                        <div class="fa-social-icon is--hero"></div>
                    </a>
                    <a href="https://twitter.com/inukishu" target="_blank" class="social-icon-item is--hero w-inline-block">
                        <div class="fa-social-icon is--hero"></div>
                    </a>
                    <a href="https://www.instagram.com/inukishu" target="_blank" class="social-icon-item is--hero w-inline-block">
                        <div class="fa-social-icon is--hero"></div>
                    </a>
                    <a href="https://www.youtube.com/channel/UCBp7_9zm3yCnkT1JK76zF9A" target="_blank" class="social-icon-item is--hero w-inline-block">
                        <div class="fa-social-icon is--hero"></div>
                    </a>
                    <a href="https://kishuinu.medium.com/" target="_blank" class="social-icon-item is--hero w-inline-block">
                        <div class="fa-social-icon is--hero"></div>
                    </a>
                    <a href="https://github.com/Shipoo-Inu/Shipoo-Inu-Contracts" target="_blank" class="social-icon-item is--hero w-inline-block">
                        <div class="fa-social-icon is--hero"></div>
                    </a>
                    <a href="https://discord.com/invite/vJJQ5whs7e" target="_blank" class="social-icon-item is--hero w-inline-block">
                        <div class="fa-social-icon is--hero"></div>
                    </a>
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

function Why() {
  const domRef = React.useRef();
  const [percentage, position] = useVisibiltyPercentage(domRef, {throttle: 64});
  
  const getScrollValue = (item) => {
    var value = 0;
    switch(item) {
      case 1:
        if(position == "bottom")
          if(percentage < 0.25) 
            value = 1;
          else if(percentage > 0.2 && percentage <= 0.3) 
            value = 1 - (percentage - 0.2) * 10;
          else value = 0;
        break;
      case 2:
        if(position == "bottom")
          if(percentage > 0.25 && percentage <= 0.35)
            value = (percentage - 0.25) * 10;
          else if(percentage > 0.35 && percentage < 0.6)
            value = 1;
          else if(percentage > 0.6 && percentage < 0.7)
            value = 1 - (percentage - 0.6) * 10;
        break;
      case 3:
        if(position == "top")
          value = 1;
        else
          if(percentage > 0.65 && percentage <= 0.75)
            value = (percentage - 0.65) * 10;
          else if(percentage > 0.75)
            value = 1;
          else value = 0;
        break;
    }
    return value;
  }

  return (
  <section id="why-kishu" class="why-kishu wf-section">
    <div class="container-1800">
        <div class="section-heading is--why-kishu">
            <div class="accent-large">$Shipoo</div>
            <h2 class="h2-what-is-kishu">Why Shipoo?</h2>
        </div>
        <div data-w-id="87ebf16d-1406-997c-c236-81e39756dba7" class="why-kishu-scrolling-container" ref={domRef}>
            <div class="_2-col-grid bottom-padding is--sticky">
                <div id="w-node-_4d01e470-0316-6366-bff1-e94ed46148b2-52018772" class="left-col">
                    <div data-w-id="33305f40-759f-5b1c-d56f-046096d6bea0" class="why-kishu-image" style={{willChange: "transform, opacity", transform: "translate3d(0px, 40px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle:"preserve-3d", opacity: getScrollValue(1)}}>
                      <img src={shining_star} loading="lazy" sizes="(max-width: 479px) 100vw, (max-width: 767px) 45vw, (max-width: 1919px) 46vw, 32vw" srcset={`${shining_star500} 500w, ${shining_star} 618w`} alt="" class="shining-stars"/>
                      <img src={v1_small} loading="lazy" width="1038" alt="" class="image-19"/>
                    </div>
                    <div data-w-id="33305f40-759f-5b1c-d56f-046096d6bea2" class="why-kishu-image _2" style={{willChange: "transform, opacity", transform: "translate3d(0px, 40px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle:"preserve-3d", opacity: getScrollValue(2)}}>
                      <img src={png1} loading="lazy" width="440.5" sizes="(max-width: 479px) 100vw, (max-width: 767px) 45vw, 46vw" srcset={`${png1_800} 800w, ${png1} 887w`} alt="" class="what-is-kishu-img"/>
                    </div>
                    <div data-w-id="33305f40-759f-5b1c-d56f-046096d6bea4" class="why-kishu-image _3" style={{willChange: "transform, opacity", transform: "translate3d(0px, 40px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle:"preserve-3d", opacity: getScrollValue(3)}}>
                      <img src={png3} loading="lazy" width="440.5" sizes="(max-width: 479px) 100vw, (max-width: 767px) 45vw, 46vw" srcset={`${png3_800} 800w, ${png3} 887w`} alt="" class="what-is-kishu-img"/>
                    </div>
                </div>
                <div id="w-node-bc539372-19b1-6802-b824-1e8e8666fcb6-52018772" class="right-col">
                    <div data-w-id="5c6a93ce-3cd4-9d9a-119c-37c503aa87d6" class="why-kishu-text-item _1" style={{willChange: "transform, opacity", transform: "translate3d(0px, 40px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle:"preserve-3d", opacity: getScrollValue(1)}}>
                        <h3>Instant<br/>Usage<br/>Rewards</h3>
                        <p class="_w-414">For every active user transaction a 2% SHIPOO reward is granted to holders'; decentralized wallets only, fostering a healthy distributed network and community usage. The more SHIPOO is actively used, the more rewards are granted!</p>
                    </div>
                    <div id="telegram" data-w-id="cd9039a0-2dd2-5175-0451-9e43e496cf63" class="why-kishu-text-item _2" style={{willChange: "transform, opacity", transform: "translate3d(0px, 40px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle:"preserve-3d", opacity: getScrollValue(2)}}>
                        <h3>Community <br/>Powered</h3>
                        <p class="_w-414">SHIPOO is fully decentralized and owned by its fun, vibrant community. Our enthusiast volunteers welcome and embrace diverse perspectives to build SHIPOO into the best community in crypto.</p>
                    </div>
                    <div data-w-id="050d4163-cfce-5ea7-6bb8-c24dc4660203" class="why-kishu-text-item _3" style={{willChange: "transform, opacity", transform: "translate3d(0px, 40px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle:"preserve-3d", opacity: getScrollValue(3)}}>
                        <h3>Secure &amp; Safe</h3>
                        <p class="_w-414">The $SHIPOO smart contract has been fully audited by a top specialized team and its LP (Liquidity Pool) tokens have been burnt. That means next to zero risk to our users and community from potential bad actors.</p>
                        <a href="https://kishu.com/audit" target="_blank" class="link">See our security audit</a>
                    </div>
                </div>
            </div>
        </div>
    </div>    
  </section>
  );  
}

function How() {
  const domRef = React.useRef();
  const [percentage, position] = useVisibiltyPercentage(domRef);
  const [step, setStep] = useState(0);

  const getScrollValue = (item) => {
    var value = 0;
    switch(item) {
      case 1:
        if(position == "top" || percentage >= 0.6) value = 30;
        else if(percentage > 0 && percentage <0.6) 
          value = percentage * 50;
        break;
      case 2:
        if(position == "top" || percentage >= 0.6) value = 30;
        else if(percentage > 0 && percentage <0.6) 
          value += percentage * 50;
        break;
    }
    return value;
  }

  return (
    <section id="how-to-buy" class="how-to-get wf-section" ref={domRef} >
        <div class="container-1800">
            <div class="section-heading">
                <h2 class="h2-what-is-kishu">How to get $SHIPOO</h2>
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
                        <a data-w-tab="Tab 3" class={`htb-tab w-inline-block w-tab-link ${step == 2 ? 'w--current' : ''} `} id="w-tabs-0-data-w-tab-2" onClick={()=> {setStep(2)}} >
                            <h6 class="htb-tab">STEP 3</h6>
                        </a>
                        <a data-w-tab="Tab 4" class={`htb-tab w-inline-block w-tab-link ${step == 3 ? 'w--current' : ''} `} id="w-tabs-0-data-w-tab-3"  onClick={()=> {setStep(3)}}>
                            <h6 class="htb-tab">STEP 4</h6>
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
                                      <p>$SHIPOO token is available on the Ethereum blockchain. MetaMask is a third party ERC20 (Ethereum) browser wallet, and the very best at that! On Google Chrome, visit 
                                        <a href="https://metamask.io/" target="_blank"><strong>metamask.io</strong></a> to download the extension and set up a wallet. On mobile? Get MetaMask's app for <a href="https://metamask.app.link/skAH3BaF99" target="_blank"><strong>iPhone</strong></a> or <a href="https://metamask.app.link/bxwkE8oF99" target="_blank"><strong>Android</strong></a>.</p>
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
                          <div data-w-tab="Tab 3" class={`w-tab-pane ${step == 2 ? 'w--tab-active' : ''}`} id="w-tabs-0-data-w-pane-2" role="tabpanel" aria-labelledby="w-tabs-0-data-w-tab-2">
                              <div class="htb-item">
                                  <div class="htb-number">
                                      <img src={htb_shape} loading="lazy" alt="" class="htb-shape"/>
                                      <div class="htb-number-text">03</div>
                                  </div>
                                  <div class="htb-text">
                                      <h4 class="heading-3">Visit SHIPOO Swap<br/></h4>
                                      <p>You can currently swap ETH and other tokens for $SHIPOO on <a href="https://kishu.com/get" target="_blank"><strong>SHIPOO Swap</strong></a>, SHIPOO's official decentralized exchange! SHIPOO Swap supports any ERC20 token.<br/></p>
                                  </div>
                              </div>
                          </div>
                          <div data-w-tab="Tab 4" class={`w-tab-pane ${step == 3 ? 'w--tab-active' : ''}`} id="w-tabs-0-data-w-pane-3" role="tabpanel" aria-labelledby="w-tabs-0-data-w-tab-3">
                              <div class="htb-item">
                                  <div class="htb-number">
                                      <img src={htb_shape} loading="lazy" alt="" class="htb-shape"/>
                                      <div class="htb-number-text">04</div>
                                  </div>
                                  <div class="htb-text">
                                      <h4 class="heading-3">Swap $ETH for $SHIPOO<br/></h4>
                                      <p>Enter the amount of $ETH you would like to swap for $SHIPOO. Click <strong>Connect Wallet</strong> then <strong>Swap</strong><br/></p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>              
              <div class="dog-frisbee-wrapper">
                  <div id="w-node-_82d26454-4b9c-a99d-09e5-0cacf9e7004a-52018772" class="frisbee-wrapper">
                    <img src={ki_facer} loading="lazy" width="515" sizes="100vw" srcset={`${ki_face_800} 800w, ${ki_facer} 1030w`} alt="" class="image-5"/>
                    <img src={shape3} loading="lazy" sizes="100vw" srcset={`${shape3_500} 500w, ${shape3} 1024w`} alt="" class="image-6"/>
                  </div>
              </div>
            </div>

        </div>
    </section>
  );
}

function Swap() {
  return (
    <section id="kishu-swap" class="where-to-get wf-section">
        <div class="container-1800">
            <div class="section-heading is--buy">
                <div class="accent-large left-justify">Partners</div>
            </div>
            <div class="_2-col-grid is--buy">
                <div id="w-node-_49e2061a-72b7-4e31-7b4d-5724e9708007-52018772" class="buy-kishu-text-container">
                    <h5>Shipoo partners</h5>
                    <h2>Where to <br/>get $SHIPOO</h2>
                    <p class="_w-520">The $SHIPOO token is currently available on 20+ different exchanges. We continuously look for new partners to join us in offering you new ways to acquire $SHIPOO.</p>
                </div>
                <div id="w-node-d911480a-3aee-85d0-f973-28b1421d5cbb-52018772" class="collection-list-2">
                    <a id="w-node-_4e015e1b-e647-47a8-319d-1f996cb549c6-52018772" href="https://www.mexc.com/exchange/KISHU_USDT" target="_blank" class="logo-container-1 w-inline-block"></a>
                    <a id="w-node-f6f544f7-78b4-31fc-a921-27f9a6961ecb-52018772" href="https://www.bkex.com/trade/KISHU_USDT" target="_blank" class="logo-container-2 w-inline-block"></a>
                    <a id="w-node-_2e8c0ae8-afd5-a942-ab83-424785b5946c-52018772" href="https://www.bitmart.com/trade/en?symbol=KISHU_USDT" target="_blank" class="logo-container-3 w-inline-block"></a>
                    <a id="w-node-_0196c513-ed99-a77c-3ee7-760192f23494-52018772" href="https://www.okex.com/en/trade-spot/kishu-usdt" target="_blank" class="logo-container-4 w-inline-block"></a>
                    <a id="w-node-ed78daab-b1e8-4921-0416-3b89f395064e-52018772" href="https://www.gate.io/trade/kishu_usdt" target="_blank" class="logo-container-5 w-inline-block"></a>
                    <a id="w-node-_505fff65-6dbe-7638-6130-d64480945b24-52018772" href="https://www.hotbit.io/exchange?symbol=KISHU_nUSD" target="_blank" class="logo-container-6 w-inline-block"></a>
                    <a id="w-node-_54f613c2-9c27-c124-82c7-f9643769f9ca-52018772" href="https://poloniex.com/exchange/TRX_KISHU" target="_blank" class="logo-container-7 w-inline-block"></a>
                    <a id="w-node-_22080d73-a823-896f-57e5-6dc4131e3d19-52018772" href="https://kishu.com/get" target="_blank" class="logo-container-8 w-inline-block"></a>
                    <a id="w-node-e97677aa-6ecb-24e3-4484-46c1c31e1ef2-52018772" href="https://guardarian.com/buy-kishu" target="_blank" class="logo-container-9 w-inline-block"></a>
                </div>
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
                                <h3 class="red is--tokenomics">$SHIPOO</h3>
                                <h5 class="gray">TOKEN SYMBOL</h5>
                            </div>
                            <div class="flex-vertical centered">
                                <h3 class="red is--tokenomics">2% Usage Reward</h3>
                                <h5 class="gray">Thanks to user transactions (DeFi wallets only!)</h5>
                            </div>
                            <div class="flex-vertical">
                                <h3 class="red is--tokenomics">100 Quadrillion</h3>
                                <h5 class="gray">TOTAL SUPPLY</h5>
                            </div>
                        </div>
                        <div id="price-chart" data-w-id="911dc789-cd8c-3157-6ceb-b918bd87e7db" class="tokenomics-text-item" style={{willChange: 'opacity, transform', opacity: getScrollValue(2), transform: `translate3d(0px, 40px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`, transformStyle: 'preserve-3d'}}>
                            <div class="flex-vertical">
                                <h3 id="holders" class="red is--tokenomics">200,000+</h3>
                                <h5 class="gray">HOLDERS</h5>
                            </div>
                            <div class="flex-vertical centered">
                                <h3 id="marketcap" class="red is--tokenomics">Loading</h3>
                                <h5 class="gray">MARKET CAP</h5>
                            </div>
                            <div class="flex-vertical">
                                <h3 id="price" class="red is--tokenomics">Loading<br/></h3>
                                <h5 class="gray">CURRENT PRICE</h5>
                                <a href="https://www.coingecko.com/en/coins/kishu-inu" target="_blank" class="link">Price Chart</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>    
    );
}

function Swap1() {
  return (
    <section id="kishu-swap" class="kishu-swap wf-section">
        <div class="container-1800">
            <div class="section-heading is--swap">
                <div class="accent-large">Swap</div>
            </div>
            <div class="_2-col-grid is--swap">
                <div id="w-node-_88bfb55d-1e28-bbc5-88fe-35f39f0986a2-52018772" class="kishu-swap---text-container">
                    <h5>DECENTRALIZED EXCHANGE</h5>
                    <h2>Shipoo Swap</h2>
                    <p class="_w-520">
                    <a href="https://kishu.com/get" target="_blank">SHIPOO Swap</a> is the official decentralized exchange (DEX) of our community. It gives holders the ability to swap independently among each other any ERC20 token for<br/>another one.<br/><br/>It is powered by <a href="https://uniswap.org/" target="_blank">Uniswap</a>, the safest and most trusted DEX in the world. Furthermore, it acts as the foundation upon which many of SHIPOO's ongoing community development efforts will build additional features and functionality exclusive to SHIPOO holders.
                    </p>
                    <a href="https://kishu.com/get" target="_blank" class="cta-button red-button w-button">OPEN SHIPOO SWAP</a>
                </div>
                <div class="purple-paw-wrapper">
                  <img src={purple_paw} loading="lazy" width="837" sizes="(max-width: 479px) 100vw, (max-width: 767px) 45vw, (max-width: 1919px) 46vw, 100vw" srcset={`${purple_paw_500} 500w, ${purple_paw_800} 800w, ${purple_paw} 837w`} alt="" class="purple-paw"/>
                  <img src={purple_screenshot} loading="lazy" alt="" class="kishu-swap-screenshot"/>
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
                <p class="_w-660 centered">SHIPOO launched on April 17, 2023 and quickly became one of the most popular cryptocurrencies of 2023. This Moonmap is a breathing document that lays out key milestones the community aims to hit to continue rapid and decentralized development and moonlike features!<br/></p>
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
                                        <p class="no-bottom-padding">SHIPOO Swap (Decentralize Exchange)<br/></p>
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
                                        <p class="no-bottom-padding">SHIPOO Crate (NFT Marketplace)<br/></p>
                                    </div>
                                    <div class="phase-activity-item">
                                        <img src={check_mark_green} loading="lazy" alt="" class="green-checkmark"/>
                                        <p class="no-bottom-padding">SHIPOO Paw Print (Wallet Tracker)<br/></p>
                                    </div>
                                    <div class="phase-activity-item">
                                        <img src={check_mark_green} loading="lazy" alt="" class="green-checkmark"/>
                                        <p class="no-bottom-padding">SHIPOO sWag (Merchandise Store)<br/></p>
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
                                        <p class="no-bottom-padding">Kishuverse NFT Collection<br/></p>
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

function Swap2() {
  return (
    <section id="kishu-swap" class="faqs wf-section">
        <div class="container-1800">
            <div class="section-heading is--stats">
                <div class="accent-large">FAQ</div>
                <h2 class="h2-what-is-kishu">Frequently Asked Questions</h2>
            </div>
            <div class="_2-col-grid _75-25">
                <div class="left-col">
                    <div class="faqs-wrapper">
                        <div data-hover="false" data-delay="0" id="w-node-b644311c-3765-421e-8642-ff0721da0d05-52018772" data-w-id="b644311c-3765-421e-8642-ff0721da0d05" class="faq-accordion-item w-dropdown" style={{height: '70px'}}>
                            <div class="faq-toggle w-dropdown-toggle" id="w-dropdown-toggle-4" aria-controls="w-dropdown-list-4" aria-haspopup="menu" aria-expanded="false" role="button" tabindex="0">
                                <h4 class="heading-6">What does Shipoo aim to achieve?</h4>
                                <div data-w-id="b644311c-3765-421e-8642-ff0721da0d09" class="accordion-arrow" style={{transform: `translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(180deg) skew(0deg, 0deg)`, transformStyle: 'preserve-3d'}}>
                                  <img src="https://uploads-ssl.webflow.com/6101679fa72b5557f012bb3c/610176cddafe845d888dde10_arrow%20up.png" loading="lazy" width="18" alt="" class="image-27"/>
                                </div>
                            </div>
                                <nav class="dropdown-list-2 w-dropdown-list" id="w-dropdown-list-4" aria-labelledby="w-dropdown-toggle-4">
                                <a href="#" class="dropdown-link-2 w-dropdown-link" tabindex="0">As stated in our Whitepaper; Shipoo aims to bring popular cryptocurrency concepts to the mainstream with ease.<br/>&zwj;<br/>That being said, we aim for Shipoo to be turned into a global brand which will have as many real world use cases as possible through partnering up with the biggest companies in various industries, while also helping those in need through charities.</a>
                            </nav>
                        </div>
                        <div data-hover="false" data-delay="0" data-w-id="42acb64e-3944-ad00-333f-91e5f2e95911" class="faq-accordion-item w-dropdown" style={{height: '70px'}}>
                            <div class="faq-toggle w-dropdown-toggle" id="w-dropdown-toggle-5" aria-controls="w-dropdown-list-5" aria-haspopup="menu" aria-expanded="false" role="button" tabindex="0">
                                <h4 class="heading-6">How does the Shipoo reward system work? Where do I get the rewards?</h4>
                                <div data-w-id="42acb64e-3944-ad00-333f-91e5f2e95915" class="accordion-arrow" style={{transform: `translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(180deg) skew(0deg, 0deg)`, transformStyle: 'preserve-3d'}}>
                                  <img src="https://uploads-ssl.webflow.com/6101679fa72b5557f012bb3c/610176cddafe845d888dde10_arrow%20up.png" loading="lazy" width="18" alt="" class="image-27"/>
                                </div>
                            </div>
                                <nav class="dropdown-list-2 w-dropdown-list" id="w-dropdown-list-5" aria-labelledby="w-dropdown-toggle-5">
                                <a href="#" class="dropdown-link-2 w-dropdown-link" tabindex="0">For every active user's transaction a 2% $SHIPOO reward is granted to holders’ decentralized wallets only, fostering a healthy distributed network and community usage. <br/><br/><em>The more $SHIPOO is actively used, the more rewards are granted!</em></a>
                            </nav>
                        </div>
                        <div data-hover="false" data-delay="0" data-w-id="38f42a2a-bd19-6de6-cdae-4b233222fc0c" class="faq-accordion-item w-dropdown" style={{height: '70px'}}>
                            <div class="faq-toggle w-dropdown-toggle" id="w-dropdown-toggle-6" aria-controls="w-dropdown-list-6" aria-haspopup="menu" aria-expanded="false" role="button" tabindex="0">
                                <h4 class="heading-6">What is "burning" and why does it matter? Does Shipoo burn automatically?</h4>
                                <div data-w-id="38f42a2a-bd19-6de6-cdae-4b233222fc10" class="accordion-arrow" style={{transform: `translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(180deg) skew(0deg, 0deg)`, transformStyle: 'preserve-3d'}}>
                                  <img src="https://uploads-ssl.webflow.com/6101679fa72b5557f012bb3c/610176cddafe845d888dde10_arrow%20up.png" loading="lazy" width="18" alt="" class="image-27"/>
                                </div>
                            </div>
                                <nav class="dropdown-list-2 w-dropdown-list" id="w-dropdown-list-6" aria-labelledby="w-dropdown-toggle-6">
                                <a href="#" class="dropdown-link-2 w-dropdown-link" tabindex="0">Token burning is the process of permanently removing a portion of tokens from circulation, reducing the total supply.<br/>&zwj;<br/>We have made the burn wallet (<em>0x00...00dEaD</em>) into one of the biggest holders through buy-backs and manually burning most of the founders tokens. Taking into consideration how the reward system works; the more Shipoo a wallet holds, the more rewards will be granted; in this case, the more $SHIPOO&nbsp;in the burn wallet, the more Shipoo will be burned with every transaction.</a>
                            </nav>
                        </div>
                    </div>
                </div>
                <div id="w-node-b644311c-3765-421e-8642-ff0721da0d39-52018772" class="right-col">
                  <img src={dog_faq} loading="lazy" width="315.5" sizes="(max-width: 479px) 100vw, (max-width: 767px) 29vw, 30vw" srcset={`${dog_faq_500} 500w, ${dog_faq} 631w`} alt="" class="image-28"/>
                </div>
            </div>
        </div>
    </section>   
  );  
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
                    <p class="_w-660">SHIPOO is a decentralized group of 20+ volunteers community managers with expertise in development, moderation and group coordination. Feel free to say "Hi!".<br/></p>
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
                  <p class="_w-520 is--token-code">As a community-powered project, SHIPOO runs thanks to its amazing volunteers and generous donors. If you would like to pitch in, use the official ERC20 donation wallet here:<br/><br/>0xB7852D285f31B740318CAb51B<br/>d0E5E7936073725<br/><strong class="bold-text"><br/>Accepted: </strong>Any ERC20 token<strong class="bold-text"><br/>Preferred: </strong>$ETH, $USDC, $SHIPOO</p>
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
          <img src={vector_smart} loading="lazy" width="380" sizes="(max-width: 479px) 100vw, 380px" srcset={`${vector_smart_500} 500w, ${vector_smart} 760w`} alt="" class="unicorn-kishu"/>
          </div>
            <div class="logo-and-social-wrapper">
                <div class="logo-white"></div>
                <div class="social-icons">
                    <a href="https://t.me/kishuinucommunity" target="_blank" class="social-icon-item w-inline-block">
                        <div class="fa-social-icon"></div>
                    </a>
                    <a href="https://www.reddit.com/r/KishuInu/" target="_blank" class="social-icon-item w-inline-block">
                        <div class="fa-social-icon"></div>
                    </a>
                    <a href="https://twitter.com/inukishu" target="_blank" class="social-icon-item w-inline-block">
                        <div class="fa-social-icon"></div>
                    </a>
                    <a href="https://www.instagram.com/inukishu" target="_blank" class="social-icon-item w-inline-block">
                        <div class="fa-social-icon"></div>
                    </a>
                    <a href="https://www.youtube.com/channel/UCBp7_9zm3yCnkT1JK76zF9A" target="_blank" class="social-icon-item w-inline-block">
                        <div class="fa-social-icon"></div>
                    </a>
                    <a href="https://kishuinu.medium.com/" target="_blank" class="social-icon-item w-inline-block">
                        <div class="fa-social-icon"></div>
                    </a>
                    <a href="https://github.com/Shipoo-Inu/Shipoo-Inu-Contracts" target="_blank" class="social-icon-item w-inline-block">
                        <div class="fa-social-icon"></div>
                    </a>
                    <a href="https://discord.com/invite/vJJQ5whs7e" target="_blank" class="social-icon-item w-inline-block">
                        <div class="fa-social-icon"></div>
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
      <Why/>
      <How/>
      <Swap/>
      <Stats1/>
      <Swap1/>
      <Moonmap/>
      <Swap2/>
      <Team/>
      <Donate/>
      <Follow/>
    </div>
  )
}
