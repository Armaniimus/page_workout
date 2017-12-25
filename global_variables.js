/*****************
 Program Settings
*****************/
const programSettings = {

    // linkColourer
    linkColourer: {
        methodEnabled: true,

        red: true,
        orange: false,
        yellow: false
    },

    arrayToString: {
        addDot: false
    },

    smokeTest: {
        methodEnabled: false
    },

    removeOnCode: {
        methodEnabled: true,
        colorAffectedElements: false,
        testlog0: false,
        testlog1: false
    },

    urlRemover: {
        functionEnabled: true,
        ajaxEnabled: true,
        testColoring: false,
        clearVisibleContent: false,
        removeListWrap: {
            shortIcons: [
                "≥",
                "º",
                "▷",
                "ᐅ",
                "»",
                "«",
                "√",
                "ʘ",
                "•",
                "·",
                "'",
                "::",
                ",",
                ".",
                "→",
                "@",
                "~",
                "®",
                "›",
            ],

            longIcons: [
                "--",
                "&gt;",
                "&gt;&gt;",
            ],

            words: [
                "home",
                "homepagina",
                "homepage,",
                "homepage",
                "startpagina:",
                "homepages®",
                "page",
                "links",
                "blog",
            ],

            isBetweenDots: [
                "startpagina",
                "wikipedia",
                "facebook",
                "twitter",
                "linkedin",
            ],

            urls: [
                "com",
                "eu",
                "infonu",
                "net",
                "nl",
                "nl:",
                "org",
                "www",
                "be",
                "nu",
                "info",
                "gov",
                "biz",
            ],

            contains: [
                "facebook",
                "twitter",
                "linkedin",
            ],
        }
    },
};
