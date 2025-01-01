import { useEffect,useState } from "react"
import axios from "axios";



function Attendence (){
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://thatikondaupendra.github.io/attendence5/attendence4/studentdata.html');
        const htmlWithAbsoluteUrls = convertRelativeUrlsToAbsolute(response.data);
        setData(htmlWithAbsoluteUrls);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const convertRelativeUrlsToAbsolute = (html) => {
    const baseUrl = 'https://thatikondaupendra.github.io/Attendence-Management/attendence4/';
    return html.replace(/(href|src)="(?!http)([^"]+)"/g, `$1="${baseUrl}$2"`);
  };
        return (
          <div>
            <h1></h1>
            {data ? (
        <div dangerouslySetInnerHTML={{ __html: data }} />
      ) : (
        <p>Loading...</p>
      )}
          </div>
        );
      }
      
     


export default Attendence;