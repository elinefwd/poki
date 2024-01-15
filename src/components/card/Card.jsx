import axios from "axios";
import {useEffect} from "react";
import {useState} from "react";



    const [info, setInfo] = useState([]);

    useEffect( () => {

        async function fetchData() {


            try {
                const response = await axios.get(
                    "https://pokeapi.co/api/v2/ability/Ditto/"
                );
                console.log(response.data);
                setInfo(response.data);
            } catch (e) {
                console.error(e);
            }
        }

        return (
            <>
                {Object.keys(info).length > 0 && (
                    <p> {info.name}</p>
                )
                }
            </>
        )


        export default fetchData();








