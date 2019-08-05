const Utils = {
    localStorageKeys: {
        ACTIVEMENU : 'ACTIVEMENU',
        NAVPOSITION:  'NAVPOSITION'
    },
    checkMenuIsOPen: (obj) => {
        const {activeMenu, item} = obj;
        return activeMenu.findIndex((menu) => menu === item.name) !== -1 ? true : false;
    },
    pagesForGithubLink: ['Source Repository']
};

export default Utils;
