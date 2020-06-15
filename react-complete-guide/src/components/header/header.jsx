import React from 'react';
import './header.css';

const Header = () => {
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

    const addApps = () => {
        let app = document.getElementById("app");
        // var group_data = require('./apps.json');
        // var group_1_data = app_group["group_1"];
        // var group_2_data = app_group["group_2"];
        let group_1_data = apps_1;
        let group_2_data = apps_2;

        let group_1_apps = document.createElement("section");
        group_1_apps.setAttribute("class", "icon-group");
        add_app_group(group_1_apps, group_1_data);
        app.appendChild(group_1_apps);

        let hr = document.createElement("hr");
        app.appendChild(hr);

        let group_2_apps = document.createElement("section");
        group_2_apps.setAttribute("class", "icon-group");
        add_app_group(group_2_apps, group_2_data);
        app.appendChild(group_2_apps);

        let button = document.createElement("a");
        button.setAttribute("class", "app-manage-button");
        button.setAttribute("href", "https://about.google/intl/en/products/?tab=wh&tip=parking-reminder");
        button.innerHTML = "More from Google";
        app.appendChild(button);

    }

    const add_app_group = (app, group) => {
        for(let idx = 0; idx < group.length; idx ++){
            let item = document.createElement("a");
            item.setAttribute("class", "app-item");
            item.setAttribute("href", group[idx]["link"]);

            let item_img = document.createElement("img");
            item_img.setAttribute("src", group[idx]["icon_link"]);
            if(idx === 0){
                item_img.style = "border-radius: 50%";
            }
            item.appendChild(item_img);

            let item_span = document.createElement("span");
            item_span.innerHTML = group[idx]["name"];
            item.appendChild(item_span);

            app.appendChild(item);
        }
    }

    // add mask layer
    const display_hidden_all = () => {
        console.log("display_hidden_all");
        for(let idx = 0; idx < eles_id.length; idx ++){
            let ele = document.getElementById(eles_id[idx]);
                ele.style.display = "none";
        }
    }

    const mask_layer = () => {
        console.log("mask_layer");
        let mask = document.getElementById("mask");
        mask.style.display = "none";
        display_hidden_all();
    }
    
    // display element
    let eles_id = ["app", "user", "setting"];
    const header_a_html = document.getElementById("header").getElementsByTagName("a");
    const header_a = new Array(4);
    for(let idx = 0; idx < 4; idx ++){
        header_a[idx] = header_a_html[idx];
    }
    const footer_a_html = document.getElementById("footer").getElementsByTagName("a");
    const footer_a = new Array(5);
    for(let idx = 0; idx < 5; idx ++){
        footer_a[idx] = footer_a_html[idx];
    }
    const search_group_input = document.getElementById("search-button-group")
        .getElementsByTagName("input");
    const search_text = document.getElementById("search-text");
    let items = [...header_a, ...footer_a, ...search_group_input, search_text];
    for(let idx = 0; idx < items.length; idx ++){
        items[idx].addEventListener("mousedown",display_hidden_all, true);
    }

    const initial_hide_elements = () => {
        for(let idx = 0; idx < eles_id.length; idx ++){
            let ele = document.getElementById(eles_id[idx]);
            ele.style.display = "none";
        }
    }

    const display_element = (ele_id) => {
        let ele = document.getElementById(ele_id);
        for(let idx = 0; idx < eles_id.length; idx ++){
            if(eles_id[idx] === ele_id){
                if(ele.style.display === "none"){
                    if(ele_id === 'setting')
                        ele.style.display = "flex";
                    else ele.style.display = "block";
                    let mask = document.getElementById("mask");
                    mask.style.width = window.innerwidth + 'px';
                    mask.style.height = window.innerHeight + 'px';
                    mask.style.display = "block";
                    mask.style.zIndex = 1;
                    mask.addEventListener("mousedown", mask_layer, true );
                }
                else{
                    ele.style.display = "none";
                }
            }
            else{
                let ele_other = document.getElementById(eles_id[idx]);
                ele_other.style.display = "none";
            }
        }
        ele.scrollTo(0, 0);
    }

    

    return (
        <header>
            <a href="https://about.google/?fg=1&amp;utm_source=google-US&amp;utm_medium=referral&amp;utm_campaign=hp-header">About</a>
            <a href="https://store.google.com/US?utm_source=hp_header&amp;utm_medium=google_ooo&amp;utm_campaign=GS100042&amp;hl=en-US">Store</a>
            <a class="header-right auto-left" href="https://mail.google.com/mail/?tab=wm&amp;authuser=0&amp;ogbl">Gmail</a>
            <a class="header-right" href="https://www.google.com/imghp?hl=en&amp;tab=wi&amp;authuser=0&amp;ogbl">Images</a>
            <a href="# " onClick={this.display_element('app')}>
                <img class="google-app-search" src="https://api.iconify.design/foundation:thumbnails.svg?color=%23404040" alt="app-group-icon"/>
            </a>
            <a href="# ">
                <img class="login" src="http://geniusvets.s3.amazonaws.com/gv-dog-breeds/siberian-husky-1.jpg" alt="login-icon"/> 
            </a>
        </header>
    )

};

export default Header;