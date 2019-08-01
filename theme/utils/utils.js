const Utils = {
    localStorageKeys: {
        ACTIVEMENU : 'ACTIVEMENU',
        NAVPOSITION:  'NAVPOSITION'
    },
    checkMenuIsOPen: (obj) => {
        const {activeMenu, item} = obj;
        return activeMenu.findIndex((menu) => menu === item.name) !== -1 ? true : false;
    }
};

export default Utils;
