const HeaderPaths = [
    {
        path:"#",
        className: "header__icon search material-symbols-outlined",
        name: "search"
    },
    {
        path:"#",
        className: "header__icon account material-symbols-outlined",
        name: "person"
    },
    {
        path:"/favorites",
        className: "header__icon heart material-symbols-outlined",
        name: "favorite"
    },
    {
        path:"/cart",
        className: "header__icon bag material-symbols-outlined",
        name: "local_mall"
    }
];

const HeaderStickyLeftPaths = [
    {
        path:"#",
        className: "headerSticky__icon account material-symbols-outlined",
        name: "person"
    },
    {
        path:"/favorites",
        className: "headerSticky__icon heart material-symbols-outlined",
        name: "favorite"
    },
    {
        path:"/cart",
        className: "headerSticky__icon bag material-symbols-outlined",
        name: "local_mall"
    }
];

const HeaderStickyRightPaths = [
    {
        path:"#",
        className: "headerSticky__icon search material-symbols-outlined",
        name: "search"
    }
];

export {HeaderPaths, HeaderStickyLeftPaths, HeaderStickyRightPaths};