async function fetchData() {

    // const [info, setInfo] = useState([]);

    try {
        const response = await axios.get(
            ''
        );
        console.log(response.data);
        // setInfo(response.data);
    } catch (e) {
        console.error(e);
    }


}


export default fetchData;
