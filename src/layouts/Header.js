import React, { useState } from 'react';

export default function Header({ page }) {
    const [hover, setHover] = useState(-1);
    return (
        <div data-animation="over-right" class="navbar native w-nav" data-easing2="ease" data-easing="ease" data-collapse="medium" role="banner" data-no-scroll="1" data-duration="400" data-doc-height="1">
            <div class="container-1800 is--nav">
            <div class="navbar custom">
                <a href="#home" id="Shipoo-logo" class="brand brand-2 w-node-_6be0c6f3-5804-18a3-23b0-d24feef2e7fe-52018772 w-nav-brand w--current"></a>
                <nav role="navigation" id="w-node-_6be0c6f3-5804-18a3-23b0-d24feef2e7ff-52018772" class="nav-menu w-nav-menu">
                <div data-hover="true" data-delay="0" class="dropdown w-dropdown" style={{zIndex: hover == 0 ? 901 : 0}} onMouseEnter={() => {setHover(0)}} onMouseLeave={() => {setHover(-1)}}>
                    <div class={`dropdown-toggle w-dropdown-toggle ${hover == 0 && 'w--open'}`} id="w-dropdown-toggle-0" aria-controls="w-dropdown-list-0" aria-haspopup="menu" aria-expanded="false" role="button" tabindex="0" >
                    <div class="icon w-icon-dropdown-toggle" aria-hidden="true"></div>
                    <div class="capitals nav-link is--dropdown">APPS</div>
                    </div>
                    <nav class={`dropdown-list w-dropdown-list ${hover == 0 && 'w--open'}`} id="w-dropdown-list-0" aria-labelledby="w-dropdown-toggle-0">
                    <a href="https://exchange.kishu.com/" target="_blank" class="dropdown-link w-dropdown-link" tabindex="0">Shipoo Swap</a>
                    <a href="https://exchange.kishu.com/#/paw" target="_blank" class="dropdown-link _2 w-dropdown-link" tabindex="0">Paw Print</a>
                    <a href="https://crate.kishu.com/" target="_blank" class="dropdown-link _2 w-dropdown-link" tabindex="0">Shipoo Crate</a>
                    <a href="https://kishuverse.kishu.com/" target="_blank" class="dropdown-link _2 w-dropdown-link" tabindex="0">Kishuverse</a>
                    </nav>
                </div>
                <div data-hover="true" data-delay="0" class="dropdown w-dropdown" style={{zIndex: hover == 1 ? 901 : 0}} onMouseEnter={() => {setHover(1)}} onMouseLeave={() => {setHover(-1)}}>
                    <div class={`dropdown-toggle w-dropdown-toggle ${hover == 1 && 'w--open'}`} id="w-dropdown-toggle-1" aria-controls="w-dropdown-list-1" aria-haspopup="menu" aria-expanded="false" role="button" tabindex="0" >
                    <div class="icon w-icon-dropdown-toggle" aria-hidden="true"></div>
                    <div class="capitals nav-link is--dropdown">COMMUNITY</div>
                    </div>
                    <nav class={`dropdown-list w-dropdown-list ${hover == 1 && 'w--open'}`} id="w-dropdown-list-1" aria-labelledby="w-dropdown-toggle-1" >
                    <a href="#team" class="dropdown-link w-dropdown-link" tabindex="0">Join Us</a>
                    <a href="#donate" class="dropdown-link _2 w-dropdown-link" tabindex="0">Donate</a>
                    <a href="https://t.me/KishuInuCommunity" target="_blank" class="dropdown-link w-dropdown-link" tabindex="0">Telegram</a>
                    <a href="https://discord.com/invite/vJJQ5whs7e" target="_blank" class="w-dropdown-link" tabindex="0">Discord</a>
                    </nav>
                </div>
                <div data-hover="true" data-delay="0" class="dropdown w-dropdown" style={{zIndex: hover == 2 ? 901 : 0}} onMouseEnter={() => {setHover(2)}} onMouseLeave={() => {setHover(-1)}}>
                    <div class={`dropdown-toggle w-dropdown-toggle ${hover == 2 && 'w--open'}`} id="w-dropdown-toggle-2" aria-controls="w-dropdown-list-2" aria-haspopup="menu" aria-expanded="false" role="button" tabindex="0">
                    <div class="icon w-icon-dropdown-toggle" aria-hidden="true"></div>
                    <div class="capitals nav-link is--dropdown">price chart</div>
                    </div>
                    <nav class={`dropdown-list w-dropdown-list ${hover == 2 && 'w--open'}`} id="w-dropdown-list-2" aria-labelledby="w-dropdown-toggle-2">
                    <a href="https://www.dextools.io/app/uniswap/pair-explorer/0xf82d8ec196fb0d56c6b82a8b1870f09502a49f88" target="_blank" class="dropdown-link w-dropdown-link" tabindex="0">Dextools</a>
                    <a href="https://coinmarketcap.com/currencies/kishu-inu/" target="_blank" class="dropdown-link _2 w-dropdown-link" tabindex="0">CoinmarketCap</a>
                    <a href="https://www.coingecko.com/en/coins/kishu-inu" target="_blank" class="dropdown-link _3 w-dropdown-link" tabindex="0">CoinGecko</a>
                    </nav>
                </div>
                <div data-hover="true" data-delay="0" class="dropdown w-dropdown" style={{zIndex: hover == 3 ? 901 : 0}} onMouseEnter={() => {setHover(3)}} onMouseLeave={() => {setHover(-1)}}>
                    <div class={`dropdown-toggle w-dropdown-toggle ${hover == 3 && 'w--open'}`} id="w-dropdown-toggle-3" aria-controls="w-dropdown-list-3" aria-haspopup="menu" aria-expanded="false" role="button" tabindex="0">
                    <div class="icon w-icon-dropdown-toggle" aria-hidden="true"></div>
                    <div class="capitals nav-link is--dropdown">TOKEN DETAILS</div>
                    </div>
                    <nav class={`dropdown-list w-dropdown-list ${hover == 3 && 'w--open'}`} id="w-dropdown-list-3" aria-labelledby="w-dropdown-toggle-3">
                    <a href="#why-kishu" class="dropdown-link w-dropdown-link" tabindex="0">Why Shipoo?</a>
                    <a href="https://etherscan.io/token/0xa2b4c0af19cc16a6cfacce81f192b024d625817d" target="_blank" class="dropdown-link _2 w-dropdown-link" tabindex="0">Smart Contract</a>
                    <a href="https://www.certik.org/projects/kishuinu" target="_blank" class="w-dropdown-link" tabindex="0">Certik Security Audit</a>
                    <a href="https://kishu.com/audit" target="_blank" class="dropdown-link _3 w-dropdown-link" tabindex="0">Techrate Security Audit</a>
                    <a href="https://kishu.com/whitepaper" target="_blank" class="dropdown-link _3 w-dropdown-link" tabindex="0">Whitepaper</a>
                    </nav>
                </div>
                </nav>
                <a id="w-node-_6be0c6f3-5804-18a3-23b0-d24feef2e80c-52018772" href="https://kishu.com/get" target="_blank" class="cta-button is--nav-link w-button">GET $SHIPOO</a>
                <div class="spacer"/>
                <div class="w-nav-button" style={{WebkitUserSelect: "text", color: '#fff'}} >
                <div class="w-icon-nav-menu"/>
                </div>
            </div>
            </div>
            <div class="w-nav-overlay" data-wf-ignore="" id="w-nav-overlay-0"/>
        </div>
    )
}
