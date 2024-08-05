import { createContext, useEffect, useState } from "react";
import api from "../utils/api";
import { categories } from "../constants";

export const VideoContext = createContext();

export const VideoProvider = ({children}) => {
    const [videos , setVideos] = useState();
    const [error , setError] = useState(null);
    const [isLoading , setIsLoading] = useState(true);
    const [selectedCategory , setSelectedCategory] = useState(categories[0]);
    


    useEffect(() => {
        //se.ilen typeı belirle.
        const type = selectedCategory.type;
        //seçilen kategorinni typeı menü ie fonksiyonu durdur.
        if(type === "menu") return;
        //yüklemeyi trueye çek.


        setIsLoading(true);
        //*istek atacağımız url yi belirledik.
        const url =
         type === "home" 
         ? "/home" : 
         type === "trending" 
         ? "/trending" : 
         type === "category" 
         ? `/search?query=${selectedCategory.name} ` :""
        //* apiisteği at ve durumu state ye aktar.
        api
        .get(url)
        .then((res) => setVideos(res.data?.data))
        .catch((error) => setError(error.message))
        .finally(() => setIsLoading(false));
    },[selectedCategory]);
    

    return <VideoContext.Provider 
    value={{
        videos, 
        error,
        isLoading,
        selectedCategory,
        setSelectedCategory,
        }}>
        {children}
        </VideoContext.Provider>
    
}