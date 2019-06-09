export namespace STAR_WARS {
    export namespace CHARACTERS {
        export const LIST = () => `/characters`;
        export const ITEM = (id) => `/characters/${id}`;
    }
    export namespace SPECIES {
        export const LIST = () => `/species`;
    }
}
