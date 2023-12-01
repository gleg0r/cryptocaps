import React from "react";
import style from "../styles/news-block.module.scss";
import dotsWhite from "../../img/dots_white.svg";
import solidWhite from "../../img/solid_white.svg";
import windowsWhite from "../../img/windows_white.svg";
import closeWhite from "../../img/close_white.svg";
import arrowsWhite from "../../img/arrows_white.svg";
import mascotNews from  "../../img/mascot_news.png"
import starNews from  "../../img/star_news.svg"
import arrowsBlack from "../../img/arrows_black.svg";
import dotsBlack from "../../img/dots_black.svg";
import stickerNft from "../../img/nft_sticker.png"
import caps from "../../img/caps_news.png"
import solidBlack from "../../img/solid_black.svg";
import windowsBlack from "../../img/windows_black.svg";
import closeBlack from "../../img/close_black.svg";
import questHands from "../../img/quest_hands.png";
import congrats from "../../img/congrats.svg";
import boom from "../../img/boom.svg";
import alien from "../../img/alien.svg";
import PurpleBtn from "../../buttons/purple-btn";
import closePurple from  "../../img/close_purple.svg";
import mascotMobile from "../../img/mobile_mascot.png";
import wowSticker from "../../img/wow_sticker.svg";
import loveSticker from "../../img/love_sticker.svg";
import up from "../../img/scroll_up.svg";
import down from "../../img/scroll_down.svg"

function NewsBlock() {
    return(
        <div className={style.news}>
            <div className={style.sticker}></div>
            <div className={style.container}>
                <div className={style.header}>
                    <img className={style.header_dots} src={dotsWhite} alt="" />
                    <p className={style.header_title}>Наши новости</p>
                    <div>
                        <img src={solidWhite} alt="" />
                        <img src={windowsWhite} alt="" />
                        <img src={closeWhite} alt="" />
                    </div>
                </div>
                <div className={style.main}>
                    <div className={style.main_cards}>
                        <div className={style.mascot}>
                            <div className={style.mascot_header}>
                                <img className={style.mascot_dots} src={dotsWhite} alt="" />
                                <p className={style.mascot_title}>Мы изменили сайт!</p>
                                <img className={style.mascot_arrows} src={arrowsWhite} alt="" />
                            </div>
                            <div className={style.mascot_main}>
                                <div className={style.text}>
                                    <h3 className={style.text_title}>Вышло обновление - <span>редизайн сайта</span></h3>
                                    <p className={style.text_desc}>Наш сайт стал еще удобнее и интереснее,<br/> добро пожаловать!</p>
                                </div>
                                <div className={style.mascot_images}>
                                    <img className={style.mascot_star} src={starNews} alt="" />
                                    <img className={style.mascot_img} src={mascotNews} alt="" />
                                </div>
                                
                            </div>
                        </div>
                        <div className={style.nft}>
                            <div className={style.nft_header}>
                                <img className={style.nft_dots} src={dotsBlack} alt="" />
                                <p className={style.nft_title}>Новая коллекция NFT</p>
                                <img className={style.nft_arrows} src={arrowsBlack} alt="" />
                            </div>
                            <div className={style.nft_main}>
                                <div className={style.nft_text}>
                                    <h3 className={style.nft_head}>Мы пополнили ряды наших уникальных фишек!</h3>
                                    <p className={style.nft_desc}>Выберите своего игрока, соберите самую <br />мощную команду!</p>
                                    <p className={style.nft_desc}>Выполняйте квесты, ежедневные задания и<br/>получайте опыт, который сможете обменять на<br/>NFT! </p>
                                </div>
                                <div className={style.nft_images}>
                                    <img className={style.nft_sticker} src={stickerNft} alt="" />
                                    <img className={style.nft_caps} src={caps} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className={style.quests}>
                            <div className={style.quests_header}>
                                <img src={solidBlack} alt="" />
                                <img src={windowsBlack} alt="" />
                                <img src={closeBlack} alt="" />
                            </div>
                            <div className={style.quests_main}>
                                <div className={style.quests_text}>
                                    <h3 className={style.quests_title}>Новые квесты уже<br/>на странице!!</h3>
                                    <div> 
                                        <div className={style.quests_new}>
                                            <img className={style.quests_icon} src={congrats} alt="" />
                                            <h4 className={style.quests_head}>Ивент - квесты</h4>
                                        </div>
                                        <p className={style.quests_desc}>Праздничные дни вносят корректировки<br/> и в наши ивенты. Соберите уникальную<br/> ивентовую коллекцию NFT, проходите<br/> тематические квесты.</p>
                                    </div>
                                    <div className={style.quests_text_middle}> 
                                        <div className={style.quests_new}>
                                            <img className={style.quests_icon} src={boom} alt="" />
                                            <h4 className={style.quests_head}>Топ - квесты</h4>
                                        </div>
                                        <p className={style.quests_desc}>
                                            Выполняйте самые горячие и новые <br/>
                                            задания, прокачивайте свой уровень<br/>
                                            и собирайте фишки, чтобы сразиться <br/>
                                            с другими игроками в нашей мобильной <br/>
                                            игре и одержать роковую победу!
                                        </p>
                                    </div>
                                    <div> 
                                        <div className={style.quests_new}>
                                            <img className={style.quests_icon} src={alien} alt="" />
                                            <h4 className={style.quests_head}>Однодневные</h4>
                                        </div>
                                        <p className={style.quests_desc}>
                                            Короткие квесты - квесты, которые<br/>
                                            длятся всего сутки! Успейте пройти <br/>
                                            и забрать свою награду!
                                        </p>
                                    </div>
                                </div>

                            </div>
                            <div className={style.quests_footer}>
                                <img className={style.quests_hands} src={questHands} alt="" />
                            </div>
                        </div>
                        <div className={style.mobile}>
                            <div className={style.mobile_header}>
                                <div className={style.mobile_wrapper}>
                                    <img className={style.mobile_dots} src={dotsWhite} alt="" />
                                    <p className={style.mobile_title}>Мобильное  приложение</p>
                                    <img className={style.mobile_close} src={closePurple} alt="" />
                                </div>

                            </div>
                            <div className={style.mobile_main}>
                                <div className={style.mobile_text}>
                                    <h3 className={style.mobile_head}>У нас есть мобильная игра!</h3>
                                    <p className={style.mobile_desc}>
                                        Мы взяли за основу игру нашей юности <br/> 
                                        и превратили её в тайм-киллер.
                                    </p>
                                    <p className={style.mobile_desc}>
                                        Milk caps снова возвращается!<br/> 
                                        Измененная концепция, новые NFT <br/> 
                                        и захватывающие сражения - Все это <br/> 
                                        уже доступно!
                                    </p>
                                    <div className={style.mobile_btn}>
                                        <PurpleBtn
                                            text={'Начать приключение'}
                                        />
                                    </div>

                                </div>
                                <div className={style.mobile_images}>
                                    <img className={style.mobile_img} src={mascotMobile} alt="" />
                                </div>
                                
                            </div>

                        </div>
                        <div className={style.partner}>
                                <div className={style.partner_wrapper}>
                                    <img className={style.partner_wow} src={wowSticker} alt="" />
                                    <h3 className={style.partner_title}>Мы открыты для  <br/> предложений партнерства!</h3>
                                    <p className={style.partner_desc}>
                                        Свяжитесь с нами, если хотите совместно<br/>
                                        разработать уникальную <span className={style.partner_purple}>коллекцию NFT-фишек</span>,<br/>
                                        а так же <span className={style.partner_purple}>привлечь внимание</span> к своему бизнесу!
                                    </p>
                                    <img className={style.partner_love} src={loveSticker} alt="" />
                                </div>
                            </div>
                    </div>
                    <div className={style.main_scroll}>
                        <div className={style.scroll_up}>
                            <img src={up} alt="" />
                        </div>

                        <div className={style.scroll}>
                            <div className={style.scroll_bar}></div>
                        </div>
                        <div className={style.scroll_down}>
                            <img src={down} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsBlock