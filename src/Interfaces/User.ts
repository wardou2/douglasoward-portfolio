export type User = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    imgUrl: string;
    bio: string;
    intro: string;
    title: string;
    colorTheme: colorTheme;
};

type colorTheme =
    | "theme-default"
    | "theme-autumn"
    | "theme-ice"
    | "theme-berries";
