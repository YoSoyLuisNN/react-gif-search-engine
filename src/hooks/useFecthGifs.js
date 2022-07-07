import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

// Podemos mandar la category como prop, tambien podemos mandar un objeto y usar los argumentos posicionales
export const useFecthGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true );

    const getImages = async() => {
        const newImages = await getGifs(category);
        setImages( newImages );
        setIsLoading(false);
    }

    useEffect( () => {
        getImages();
        // Si dejamos las dependencias vacias solo se ejecuta el componente
    }, [])

    // Pesima practica, no evita que se vuelva a disparar y se ejecuta el request 2 veces
    getGifs( category );

  return {
    images,
    isLoading,
  }
}
