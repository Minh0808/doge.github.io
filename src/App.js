import './App.css';
import React,{useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  useEffect(()=> {
    AOS.init({duration:1000});
  },[] )
  return (
    <div className="Sweetdoge">  
      <div id="navigation" className="home">
        <div className="navigation">
          <div className="logo">
            <a href="http://localhost:3000/Minh0808/sweetdoge" >
              {<img src="../img/Logo.png" className="desktop" />}
            </a>
            <a href="#navigation" >
              <img src="../img/Logo.png" className="Mobile" />
            </a>
          </div>
          
          <div className="Menu">
            <div className="Menu1">
              <a href="#about">
                <div className="Menu1item">
                  About
                </div>
              </a>
              <a href="#HOW TO ENJOY">
                <div className="Menu1item">
                  How to enjoy
                </div>
              </a>
              <a href="#Policy">
                <div className="Menu1item">
                  Policy
                </div>
              </a>
              <a href="#Tokenomics">
                <div className="Menu1item">
                  Tokenomics
                </div>
              </a>
              <a href="#Roadmap">
                <div className="Menu1item">
                  Roadmap
                </div>
              </a>
            </div>
            <div className="Buy">
              <button>Buy now</button>
            </div>
          </div>
          
          <div className="pay"> 
            <div className="Connect">
              <button className="Connectt">Connect Wallet</button>
            </div>
          </div>
        </div>
        <div className="backround">
          <div className="Tab1">
            <div className="Tab1Title">
              World of sweetdoge 
            </div>
            <div class="Tab1Body">      
              <a href="https://twitter.com" target="_blank"> 
                <img height={50} width={50} src="../img/twitter.png" />
              </a>
              <a href="https://web.telegram.org/k/" target="_blank">
                <img height={50} width={50} src="../img/telegram.png" />
              </a>
              <a href="https://www.coingecko.com/vi" target="_blank">
                <img height={50} width={50} src="../img/coingecko.png" />
              </a>
              <a href="https://etherscan.io/" target="_blank">
                <img height={50} width={50} src="../img/etherscan.png" />
              </a>
              <a href="https://arbitrum.io/" target="_blank">
                <img height={50} width={50} src="../img/arbitrum.png" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="about">
        <div className="Tab2">
          <img width={560} height={549} src="../img/Rectangle 3.png"/>
          <div  className="Tabtext" data-aos="fade-right">
              <div className="about">ABOUT</div>
                <div className="aboutbody">
                  Sweet Doge offers fun and transparent meme games where each game will determine a guaranteed winner among the participants.
                  The winning player receives most of the remaining pool amount contributed by players to buy tickets for each game session within specific hourly timeframes per day.
                  Prizes are awarded instantly to the winner via smart contract.
                  All game wallet addresses and prize split structure are published and pushed onto the transparent network.
                </div>
                <div className="aboutbd">
                  Sweet Doge was born with the vision to create a transparent and fun gaming universe with rewards,
                  and share that joy with all players while only keeping a small portion of rewards for development and growth of the system,
                  as well as create a mechanism to stimulate demand and increase value for the game token.
                </div>
                <div className="aboutkb">
                  <img src="./Line 1.png" />
                    <div className="textkb">sweetdoge</div>
                  <img src="./Line 2.png" />
                </div>
            </div>
        </div> 
      </div>
      <div id="HOW TO ENJOY">
        <div className="Tab3">
          <div className="Tab3text" data-aos="fade-down">HOW TO ENJOY</div>
          <div className="Tab3item" data-aos="fade-up">
            <div className="Item1">
              <div className="Item1a">
              Buy Tickes
              </div>
              <div className="Item1b">
              Games are played by purchasing participation tickets for each corresponding game equivalent to a credit contribution to the prize pool.
              This pool comprises crypto ETH and native game tokens auto-distributed via smart contract.
              </div>
              <img src="../img/meme1.png" />
            </div>
            <div className="Item2">
              <div className="Item2a">
              Prizes
              </div>
              <div className="Item2b">
              Each game prize a player receives will comprise:
              80% value in ETH and 20% in game tokens of the
              total pool for each game session. There are many
              different game pools divided by timeframe: 15 minutes,
              30 minutes, 1 hours, 6 hours, 1 day...
              </div>
              <img src="../img/meme2.png" />
            </div>
            <div className="Item3">
              <div className="Item3a">
                Pool Funds
              </div>
              <div className="Item3b">
                To support system development, Sweetdoge will
                keep 20% of the pool funds and use 15% of the
                ETH pool to buyback tokens on exchanges. 
                Meanwhile, 80% of the token pool will be burnt
                together when prizes are handed out for each
                game session. This highlights how token price
                will be continuously and transparently supported,
                as well as showcasing all project wallets publicly.
              </div>
              <img src="../img/meme3.png" />
            </div> 
          </div>
          <div className="Tab3game">
            <div  className="gameitem">
              <div className="gameitemhead" data-aos="fade-right" >
                <img width={382} height={160} src="../img/Lucky.png" />
              </div>
              <div className="gamebody">
                <div className="bodyleft" data-aos="fade-up-right">
                  <div className="lefthead">
                    <img width={62} height={65} src="../img/iconDes.png" />
                    <div className="A">
                      Descriptions:
                    </div>
                  </div>
                  <div className="leftBody">
                    This is an extremely new type of game for us,
                    it is completely different from traditional games,
                    with this game, every time the spin ends, 
                    it will always award valuable prizes immediately.
                    The most attractive thing is that the special prize
                    will always have a winner after each spin.
                  </div>
                  <div className="Body">
                    <div className="leftBodyA">
                      <img width={62} height={65} src="../img/iconPrize.png"/>
                      <div className="BodyA">
                        Prizes:
                      </div>
                    </div>
                    <div className="leftBodyB">
                      <img width={50} height={50} src="../img/iconTop1.png"/>
                      <div className="BodyB">
                        30 % Lucky money + 12 % Crypto
                      </div>
                    </div>
                    <div className="leftBodyC">
                      <img width={50} height={50} src="../img/iconTop2.png"/>
                      <div className="BodyC">
                        20 % Lucky money + 6 % Crypto
                      </div>
                    </div>                
                    <div  className="leftBot">
                      <img width={50} height={50} src="../img/iconTop3.png"/>
                      <div className="Bot">
                        10 % Lucky money + 2 % Crypto
                      </div>
                    </div>
                  </div>
                </div>
                <img className="iconn" width={606} height={407} data-aos="fade-up-left" src="../img/Tickects.png"/>
              </div>
              <a>
                <div className="Buybt" data-aos="fade-up">
                  <div className="btText">PLAY NOW</div>
                </div>
              </a>

              <div className="gamebot">
                <div className="botA">
                </div>
                <img src="../img/Smartest.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="Policy">
        <div className="Tab4">
          <div className="Tab4title" data-aos="flip-up">
            <img width={33} height={63} src= "../img/Star 3.png" />
            <div className="titletext">POLICY</div>
            <img width={33} height={63} src="../img/Star 2.png" />
          </div>
          <div className="Tab4text" data-aos="flip-down">
            <div className="Text1">
              <div>
                <img src="../img/rec 1.png"/>
              </div>
              <div>
                Fairness and transparency are key policies for
                Sweet Doge games. All transactions and prize handouts
                are publicly verifiable on the blockchain.
              </div>
            </div>
            <div className="Text1">
              <div>
                <img src="../img/rec 1.png"/>
              </div>
              <div>
                Strict KYC policy ensures all players are eligible
                and real humans. Bots are prohibited.
              </div>
            </div>
            <div className="Text1">
              <div>
                <img src="../img/rec 1.png"/>
              </div>
              <div>
                Zero percent house edge. Sweet Doge takes no cut but
                focuses on growing the player community.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="Tokenomics">
        <div className="Tab5">
          <div className="Tab5title" data-aos="fade-down">
            $ SWD TOKENOMICS
          </div>
          <div className="Tab5body">
            <div className="body5" data-aos="zoom-in">
              <div className="bodyL5">
                ALLOCATION
                <div className="bodyL5text">
                  + Total supply: 100 billions $SWD
                </div>
                <div className="bodyL5text">
                  + Uniswap listing: 80%
                </div>
                <div className="bodyL5text">
                  + WL ambassador: 20%
                </div>
              </div>
              <div className="bodyL5">
                FAIRLAUNCH
                <div className="bodyL5text">
                  + No Presales, no Private
                </div>
                <div className="bodyL5text">
                  + No team allocation
                </div>
              </div>
              <div className="bodyL5">
                TAX STRUCTURE
                <div className="bodyL5text">
                  + Tax buy: 5%
                </div>
                <div className="bodyL5text">
                  + Tax sell: 5% ( 1%: Lp; 1% -Affiliate Ambassador;
                  3% project Dev)
                </div>
              </div>
            </div>
            <div className="bodyR5" data-aos="zoom-out-left">
              <img className="bodyR5img" src="../img/tokenomics-3 1.png"/>
            </div>
          </div>
          <div className="Tab5bot" data-aos="zoom-out-up">
            <div className="botTitle5">
              FINANCIAL GAME STRUCTURE
            </div>
            <div className="botBody5">
              <div className="columL5">
                Cash Game
                <div className="Letf5">+ 60% Cash Pool to Winners</div>
                <div className="Letf5">+ 20% Cash Pool to Marketing</div>
                <div className="Letf5">+ 20% to Buy back</div>
              </div>
              <div className="columR5">
                Token Game
                <div className="Right5">+ 75% token games's Pool to burn</div>
                <div className="Right5">+ 20% token games's Pool to Winners</div>
                <div className="Right5">+ 5% token games's Pool to Marketing</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="Roadmap">
        <div className="Tab6" data-aos="zoom-out-down">
          <div className="Tab6title">ROADMAP</div>
          <div className="Tab6Body">
            <img src="../img/roadmap3 1.png" />
          </div>
          <div className="Tab6bot">
          <div className="BotR6">
            The 2nd quarter 2024
            <div className="R6text">
              + LuckyDraw Game v3 Launch
            </div>
            <div className="R6text">
              + Expand gaming ecosystem with more games
            </div>
            <div className="R6text">
              + 100,000 Telegram members
            </div>
            <div className="R6text">
              + Transition to Community-governed DAO
            </div>
          </div>
        </div>
        </div>
        
      </div>
      <div className="Tab7">
        <div className="Tab7title">
          All content on our platform is the property of
          our company and is protected by international
          copyright laws. All rights are reserved.
        </div>
      </div>
      <div className="Tab8">
        <div className="Menu2">
          <a href="#about">
            <div className="Menu2item">
              About
            </div>
          </a>
          <a href="#HOW TO ENJOY">
            <div className="Menu2item">
              How to enjoy
            </div>
          </a>
          <a href="#Policy">
            <div className="Menu2item">
              Policy
            </div>
          </a>
          <a href="#Tokenomics">
            <div className="Menu2item">
              Tokenomics
            </div>
          </a>
          <a href="#Roadmap">
            <div className="Menu2item">
              Roadmap
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
