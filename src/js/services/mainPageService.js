import { root } from "../..";
import ListItems from "../components/ListItems";
import MainPage from "../components/MainPage";


export function backToMain(){
    root.render(<MainPage element={<ListItems/>}/>)
}