/**
 * Ключ логина user
 */
export const keyUser = "user";
/**
 * Ключ списка избранных товаров
 */
export const keyFavorites = "favorites";
/**
 * Ключ аватара пользователя
 */
export const keyAvatar = "avatar"

/**
 * Преобразование cookie в объект
 * @return объект, содержащий данные cookie
 */
export function cookieToObject(){
    let data = document.cookie.split(";");
    let user = "";
    let avatar = ""
    let favorites = [];
    for (let i = 0; i<data.length; i++){
        let localData = data[i].split("=");
        let el = localData[0];
        el = el.replace(" ", "");
        switch (el){
            case keyFavorites:
                favorites =  localData[1].split(",");
                break;
            case keyUser:
                user = localData[1];
                break;
            case keyAvatar:
                avatar = localData[1];
                break;
            default:
                break;
        }
    }
    return{
        "user": user,
        "favorites": favorites,
        "avatar": avatar
    }
    
}