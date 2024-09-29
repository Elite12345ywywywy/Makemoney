(function (window) {
    const themeConfig = {
        images: {
            logo: '/static/theme/logo.png',
            tabbarIcon: '/static/theme/tabbar_icon.png',
            userImg: '/static/theme/user_img.png',
            fh5: '/static/theme/fh5.png',
            platform: '/static/theme/platform.png',
            settingIconBackground: "/static/theme/setting_icon.png",
            defaultServiceImage:'/static/theme/service-1445afb4.png',
            downloadTitleImage:'/static/theme/txt1.png',
            downloadContentImage:'/static/theme/content1.png',
            downloadLogoImage:'/static/theme/download-logo.png',
            defaultLotteryDrawImage:'/static/theme/20231207122903644.png',
            defaultFreePlanImage:'/static/theme/20231207123017366.png',
            defaultIconMenuImage:'/static/theme/kj-icon-menu.png',
            defaultNavIconImage:'/static/theme/nav_icon.png',
            btnAct:'/static/theme/btn-act.png',
            dialogR:'/static/theme/dialog_r.png',
            dialogWare:'/static/theme/dialog_ware.svg',

            telegram:"/static/common/share/telegram.png",
            whatsapp:"/static/common/share/whatsapp.png",
            twitter:"/static/common/share/twitter.png",
            facebook:"/static/common/share/facebook.png",
            linkedin:"/static/common/share/linkedin.png",
            line:"/static/common/share/line.png",
            reddit:"/static/common/share/reddit.png",
            pinterest:"/static/common/share/Pinterest.png",
            skype:"/static/common/share/skype.png",
            tumblr:"/static/common/share/Tumblr.png",
            VK:"/static/common/share/VK.png",
        },
        defaultPage:{
            defaultAllBackground: '#f2f3f5',
            vanNavBarBackgroundImage: '#fff',
            cusNavBarLoginBtnBackground: 'linear-gradient(90deg,#227FFD,#489EFF)',
            defaultTotalColor:"#69d6ef",
            defaultBalanceColor:"#4363f5",
            defaultGiftColor:"#de4d3c",
            defaultInviteColor:"#884ff5",
            defaultVanCellColor: '#f8f8f8',
            defaultBorder: "1px solid #3b45681f",
            defaultColor: '#23262f',
            defaultBoxShadow: "0px 0px 20px 0px #3b45681f",
            defaultEmailVanCellColor: '#f4f9ff',
            defaultEmailBoxShadow: "0px 0px 20px 0px #f4f9ff",
            defaultBtnBackground:"",
            borderBottom: "1px solid #dbdbdb",
            defaultBackground: '#fff',
            vanTabbarItemBackground: "url('/static/theme/tabbar_icon.jpg') no-repeat",
            downloadBackground: "url('/static/theme/download-bg.jpg') no-repeat",
            newDownloadBackgroundImage: "url('/static/theme/20240514144431058.jpeg') no-repeat",

        },
        loginPage:{
            savePasswordColor: "#ee0a24",
            submitBtnBackground: "#ee0a24",
            signUpNowColor: "",
        },
        registerPage:{
            mainBackground: '#fff',
        },
        minePage:{
            mineTopBgBackground: "url('/static/theme/my-bg.jpg') no-repeat",
        },
        homePage:{
            vanNoticeBarColor: '#333333',
            vanNoticeBarBackground: "#f0f5fe",
        },
        stockPage:{
            upColor: '#45ca4a',
            downColor: "#c7302c",
        },
        rechargePage:{
        },
    };
    window.webConfig = {
        title: 'Wingo Predict',
        themeConfig: themeConfig,
        socketPath: location.host + '/api/websocket',
        websiteUptime: 1643760000,//初始运行时间戳
    };
})(window);
