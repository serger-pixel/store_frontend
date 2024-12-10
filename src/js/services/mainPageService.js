import { root } from "../..";
import ListItems from "../components/ListItems";
import MainPage from "../components/MainPage";
import { typeMain } from "./itemService";


export function backToMain(){
    root.render(<MainPage element={<ListItems type={typeMain}/>}/>)
}