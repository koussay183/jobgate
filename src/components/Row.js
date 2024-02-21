import React , {useRef,useState} from 'react'
import { Link } from 'react-router-dom'
import angelRight from "../images/angelRight.png";
import angelLeft from "../images/angelLeft.png";
import Offre from './Offre';

function Row({title , genreId}) {
    const rowPosters = useRef(null);
    const [offers, setoffers] = useState([
        { id: "1aBcDeF", title: "Software Developer", image: "https://picsum.photos/200" },
        { id: "2dEfGhI", title: "Marketing Manager", image: "https://picsum.photos/200" },
        { id: "3jKlMnO", title: "Data Scientist", image: "https://picsum.photos/200" },
        { id: "4pQrStU", title: "Graphic Designer", image: "https://picsum.photos/200" },
        { id: "5vWxYzZ", title: "Sales Representative", image: "https://picsum.photos/200" },
        { id: "7DdEeFf", title: "Product Manager", image: "https://picsum.photos/200" },
        { id: "8GgHhIi", title: "Financial Analyst", image: "https://picsum.photos/200" },
        { id: "9JjKkLl", title: "Human Resources Specialist", image: "https://picsum.photos/200" },
        { id: "10MmNnOo", title: "Web Developer", image: "https://picsum.photos/200" },
        { id: "11PpQqRr", title: "Content Writer", image: "https://picsum.photos/200" },
        { id: "12SsTtUu", title: "Project Manager", image: "https://picsum.photos/200" }
      ])
  return (
    <div className="row">
      <h2>
        <Link
          className="title"
          to={{
            pathname: "/discover/genre/"+title+"/"+genreId,
          }}
        >
          {title} <span>&#8594;</span>
        </Link>
      </h2>
      <div className="all_of_the_row_holder">
        <div className="scrolOnRowHolder">
          <div
            id="scrollLeft"
            onClick={(e) => {
              rowPosters.current.scrollBy(-600, 0);
            }}
          >
            <img src={angelLeft} alt="scroll left"></img>
          </div>
          <div
            id="scrollRight"
            onClick={(e) => {
              rowPosters.current.scrollBy(600, 0);
            }}
          >
            <img src={angelRight} alt="scroll right"></img>
          </div>
        </div>
        <div className="row__posters" ref={rowPosters}>
          {offers?.map((offre, key) => {
            return (
                  <Offre
                    title={offre?.title}
                    id={offre?.id}
                    image={offre?.image}
                />
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default Row