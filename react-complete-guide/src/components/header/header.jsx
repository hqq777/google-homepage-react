import React, {useState, useEffect} from 'react';
import './header.scss';

const Header = (props) => {
    // app-group
    const apps_1 = [
        {
            link: "https://www.google.com",
            icon_link: "http://geniusvets.s3.amazonaws.com/gv-dog-breeds/siberian-husky-1.jpg",
            name: "UserName"
        },
        {
            link: "https://www.google.com/search/about/:", 
            icon_link: "https://lh3.googleusercontent.com/kroer1kpwSe3j-lIfPnE7Q3MVaCoJVF8atjdh0VtGDWCz2ulLejVsDh2k6a6VUgpUFQ8qRMHMEX7bsr2jTrLXhZR_ETbqILDf-qfkk0=h120",
            name: "Search"
        },
        {
            link: "https://maps.google.com/maps?hl=en&tab=wl",
            icon_link: "https://lh3.googleusercontent.com/PoTrayfCHVcgWMLP9wryR37V2VUjVX8AQZEnGChDGu5MMHQLH2w_Fs4MlT4SsEF-Hq4Qca-J7yIpr3Q-u1mkOtnn1VoeKV7IL2ae=h120",
            name: "Map"
        },
        {
            link: "https://www.youtube.com/yt/about/",
            icon_link: "https://lh3.googleusercontent.com/I95wjYii8vhFSSx-aSYdh2hPAMjgZkA9yjarSQoOd98COwOxkAVn_dulBcTcfbsa7Limy6IKX6G95ep6OB6y2yMLMiX0YEqFx3KQHQ=h120",
            name: "Youtube"
        },
        {
            link: "https://play.google.com/store?hl=en",
            icon_link: "https://lh3.googleusercontent.com/vWJNEFxN3WY5PYAYjwZ9ycEXMCCiB8EbcFXZxfSv5xkKLw67C2J5qXJTBL9KSPldWmLpVMnucrsDBmPlrf9tMiEJpYNZNcTw_ymlxgc=h120",
            name: "Play"
        },
        {
            link: "https://news.google.com/",
            icon_link: "https://lh3.googleusercontent.com/u2XGSr0jis3w5sLeuh8UMqGHgtdqPVPi77xYhPJdMO9C41wYUue3EKPJvwp-ovAlTzt3Ux3R4Mww2HlJ31UKre8vz1Cnno-3MxvWtA=h120",
            name: "News"
        },
        {
            link: "https://www.gmail.com/intl/en_us/mail/help/about.html",
            icon_link: "https://lh3.googleusercontent.com/86N90L0IJ785jaRXwXX0UAycK5MZQ3fTJRaIjgvF2PVJqjw5NkVequXgELwIEAnJG0SRxVUSaa5_Yw1_wW3LrxAN4oNZ8VCoeQuddmI=h120",
            name: "Gmail"
        },
        {
            link: "https://gsuite.google.com/products/meet/",
            icon_link: "https://lh3.googleusercontent.com/TrxYIOpI86w4p0ax0GWCoA3r68_eoj5fE7pbO8zRREfVdg3BGbqBdzCQka2FeJJPwSMWZO7wO7X4cMDuN9dfkbWORI4aYXrBHBMpww=h120",
            name: "Meet"
        },
        {
            link: "https://classroom.google.com/?authuser=0",
            icon_link: "https://lh3.googleusercontent.com/m5HIvqrNJHr2w5VXuNapBWKSx6YZTU7lIhffkIgDQU_VbpYAfkgXt2Un2ks_wzTn7vrfkyllWMLouCcOcBwfakYylBMe_9PwYm7_=h120",
            name: "Contacts"
        },
        {
            link: "https://drive.google.com/?tab=wo&authuser=0",
            icon_link: "https://lh3.googleusercontent.com/A-jk5o_CT_ucUdRRwmchoeMx1qoKolfGKFptEBHANKZELMmeJALE7m4KOZdDu0NjFNiekH0j2T981f5N_nZ_IU1HsRehKLPRQAX0=h120",
            name: "Drive"
        },
        {
            link: "https://www.google.com/calendar/about/",
            icon_link: "https://lh3.googleusercontent.com/Wj2TC83OMCWpHPH9R-ebuLwseO5cPbsoaM8YEx3oRcakA2Ck4OG-SVv9YrYE4arZ_jC2VnImXJdr1xJognMvnmAQcZtdc54vKttQew=h120",
            name: "Calendar"
        },
        {
            link: "https://translate.google.com/about",
            icon_link: "https://lh3.googleusercontent.com/vNgpLTvnDUr6-QM8s4OuuESGDXs_brbGoPR-7vfwdxQI7M4MVFV0CC_Hil4qRDSp4P66ik85fdv09jKn89kDAJVknIbd6wkl0zGQJQ=h120",
            name: "Translate"
        },
        {
            link: "https://www.google.com/photos/about",
            icon_link: "https://lh3.googleusercontent.com/j72MTKOF_63kUJWGzmYJQcb1M-gUVXNDSQJSm-mLPARg_b_GZmA8vF6PmcZ2LaBhTJQvlKnoMQaKKIARJYfsxd-5TYnWOhhU-PDCrms=h120",
            name: "Photos"
        },
        {
            link: "https://duo.google.com/about/",
            icon_link: "https://lh3.googleusercontent.com/tWYS85wpzFKE2mcGmUj1spMgqETy8SbDrY3UFp4z2g-Y8yY2BhwmsNWHhqGyiW-N6qZd8nMB-vRDSctWy1eTKY5N8B9ethFs3czbjg=h120",
            name: "Duo" 
        },
        {
            link: "https://shopping.google.com/",
            icon_link: "https://lh3.googleusercontent.com/UqZcYFgfFclRU46MshhuCQD79idBZ8hyIe5WkQ1VLzG47w-Mgu6yGriGkL_YiYF2qau5jrufzTNwFp84tw7Lm-f9t2vQLkrECfur=h120",
            name: "Shopping"
        }
    ];

    const apps_2 = [
        {
            link: "https://www.google.com/finance",
            icon_link: "https://lh3.googleusercontent.com/v58NX5Yjsfo7e9kmvZYz-UpgxiBwecURTpNGU7dQ9CDZLnQaxf5dKsWQDUPxO91gZX-_BGEGd-HvLLXIjrzfOQw-NrQfqlxKLEFF1g=h120",
            name: "Finance"
        },
        {
            link: "https://www.google.com/docs",
            icon_link: "https://lh3.googleusercontent.com/l22K7YWz9MSYEsghfrcKBp9S-odPgCe4JWuuyiBpdaofLaDrEhyFgMJ-ya5Z8xN8wKgVQf1nUQzxSPmw5yW7YfLViVhGr03YW9jj=h120",
            name: "Docs"
        },
        {
            link: "https://www.google.com/sheets",
            icon_link: "https://lh3.googleusercontent.com/6FgRpEu6BF53yYz9IIvq9GoYtHOLZCvGtAWUbst0msFhl7UcPAw2_89xu0KNnAZmO4fNOH4z_SDAZde2P7H6bqgMeWMSW5Cr7h29=h120",
            name: "Sheets"
        },
        {
            link: "https://www.google.com/slclasses",
            icon_link: "https://lh3.googleusercontent.com/fSFLkCvdR5fGE13eF-Dn28tPOvrGa4l927bZINzyRBEIqCxHqy_aFQvnAWGUGMBQHFix4s97zmVQ7UaYxsa7ujF5uiWwPT3ux5ZjNA=h120",
            name: "Slclasses"
        },
        {
            link: "https://support.google.com/hangouts",
            icon_link: "https://lh3.googleusercontent.com/9Got_n_XDxEp29d_DNM9hL8pBcrHwaxjHasHmBZeRN7koFtye9m9aZb6LAnpyGbe8sKjvXUr1bAieve6M1Cf9cOl7londmukWiFWTA=h120",
            name: "Hangouts"
        },
        {
            link: "https://www.google.com/keep/",
            icon_link: "https://lh3.googleusercontent.com/BG7WQTW1miMA7lsBFNyWnnIlm0SBceVj5-NCYQmtU3Zmys-n7xPva5fs9loQuA75f12ZiS6C7Yh9G_X1ISsFLKplLYPz09MKbUmjew=h120",
            name: "Keep"
        },
        {
            link: "https://classroom.google.com/",
            icon_link: "https://lh3.googleusercontent.com/Qvc6rWiGG_a6LNQ7Yx5vMmve_5ku8TG7z4vmWG7VBkbcOQfOSE2BS7eBcD1NUOWTsbs9A_Vh-mJpKtsGtG_0f7sIGFy5LwhdOLRg4w=h120",
            name: "Classroom"
        },
        {
            link: "https://www.google.com/earth/",
            icon_link: "https://lh3.googleusercontent.com/HWgUyUNqdsifoczBOT-DYy-hV_ldW-cwWkz3tvlY0eQysaY1ra4D1bkfE-0BVFUlk5wComQdca8g-fwiPcOhdMHoMjqiiNh2TD2b=h120",
            name: "Earth"
        }
    ];
    const cusStyle = {
        userBorder: {
            borderRadius: '50%'
        },
        othersBorder: {
            borderRadius: 0
        }
    };
    const userInfo = [
        {
            userIcon: "H",
            userName: "Haiqi Ma",
            userEmailAddr: "haiqima@bu.edu"
        },
        {
            userIcon: "Q",
            userName: "Haiqiqi",
            userEmailAddr: "haiqiqi@idk.com"
        }
    ];
    
    const [appShow, setAppShow] = useState(false);
    const [userShow, setUserShow] = useState(false);
    const hide = () => {
        // console.log(props.maskStatus);
        // console.log(appShow);
        if((props.maskStatus === false ||  props.contentStatus === true) && appShow)
            setAppShow(false);

        if((props.maskStatus === false || props.contentStatus === true) && userShow)
            setUserShow(false);
    }

    return (
        <div> 
            {hide()}
            <header id="header">
                <a href="https://about.google/?fg=1&amp;utm_source=google-US&amp;utm_medium=referral&amp;utm_campaign=hp-header">About</a>
                <a href="https://store.google.com/US?utm_source=hp_header&amp;utm_medium=google_ooo&amp;utm_campaign=GS100042&amp;hl=en-US">Store</a>
                <a className="header-right auto-left" href="https://mail.google.com/mail/?tab=wm&amp;authuser=0&amp;ogbl">Gmail</a>
                <a className="header-right" href="https://www.google.com/imghp?hl=en&amp;tab=wi&amp;authuser=0&amp;ogbl">Images</a>
                <a href="# " onClick={() => {setAppShow(!appShow);props.maskStatusChange(!appShow);}}>
                    <img className="google-app-search" src="https://api.iconify.design/foundation:thumbnails.svg?color=%23404040" alt="app-group-icon"/>
                </a>
                <a href="# " onClick={() => {setUserShow(!userShow);props.maskStatusChange(!userShow);}}>
                    <img className="login" src="http://geniusvets.s3.amazonaws.com/gv-dog-breeds/siberian-husky-1.jpg" alt="login-icon"/> 
                </a>
            </header>
            {
                appShow &&
                <div id="app" className="app">
                    <section className="icon-group">
                        {
                            apps_1.map((app, index) => (
                                <a className="app-item" href={app.link}>
                                    <img src={app.icon_link} style={index === 0 ? {borderRadius:50 + '%'} : {borderRadius: 0}} alt="icon-img"></img>
                                    <span>{app.name}</span>
                                </a>
                            ))
                        }
                    </section>
                    <hr />
                    <section className="icon-group">
                    {
                        apps_2.map((app, index) => (
                            <a className="app-item" href={app.link}>
                                <img src={app.icon_link} style={index === 0 ? cusStyle.userBorder : cusStyle.othersBorder} alt="icon-img"></img>
                                <span>{app.name}</span>
                            </a>
                        ))
                    }
                    </section>
                    <a className="app-manage-button" href="https://about.google/intl/en/products/?tab=wh&tip=parking-reminder">
                        More from Google
                    </a>
                </div>
            }
            {
                userShow &&
                <div id="user" className="user">
                    <section className="user-logo">
                        <div className="logo-background">qq</div>
                        <span className="logo-camera-background"></span>
                        <div className="logo-camera">
                            <svg className="camera-logo" height="26" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="M20 5h-3.17L15 3H9L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 14H4V7h16v12zM12 9c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"></path></svg>
                        </div>
                    </section>
                    <section className="current-user">
                        <div className="current-user-name">qq h</div>
                        <div className="current-user-email">hqq@gmail.com</div>
                    </section>
                    <a className="user-manage-button hover-background-grey" href="# ">
                        Manage your Google Account
                    </a>
                    <section className="previous-user-group">
                        {
                            userInfo.map((user) => (
                                <div className="previous-user hover-background-grey">
                                    <div className="user-icon">{user.userIcon}</div>
                                    <div className="user-info">
                                        <div className="user-name">{user.userName}</div>
                                        <div className="user-email">
                                            <span className="user-email-addr">{user.userEmailAddr}</span>
                                            <svg height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="M0 0h20v20H0V0z" fill="none"></path><path d="M6.18 7L10 10.82 13.82 7 15 8.17l-5 5-5-5z"></path></svg>
                                        </div>
                                    </div>
                                    <div className="user-state">Signed out</div>
                                </div>
                            ))
                        }
                        <div className="add-user hover-background-grey">
                            <svg height="20" viewBox="0 0 24 24" width="20" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="M9 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 7c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4zm6 5H3v-.99C3.2 16.29 6.3 15 9 15s5.8 1.29 6 2v1zm3-4v-3h-3V9h3V6h2v3h3v2h-3v3h-2z"></path></svg>
                            <span className="add-another-user">Add another account</span>
                        </div>
                    </section>
                    <a className="sign-out-button hover-background-grey" href="# ">Sign out</a>
                    <section class="user-footer">
                        <a className="hover-background-grey" href="https://policies.google.com/privacy?hl=en&authuser=0">Privacy Policy</a>
                        <span>•</span>
                        <a className="hover-background-grey" href="https://myaccount.google.com/termsofservice?hl=en&authuser=0">Terms of Service</a>
                    </section>
                </div>
            }
        </div>
    );

}

export default Header;
