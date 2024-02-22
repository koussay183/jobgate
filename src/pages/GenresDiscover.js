import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Offre from '../components/Offre';

function GenresDiscover() {
    const {id , name} = useParams();
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
    <div>
        <nav >
            <div className="innerNav">
                <Link className="logo" to="/">JobGate.</Link>
                <div className="menu">
                    <input type='search' placeholder="Search For a Job"></input>
                    <div className="links">
                        <Link to="/signup">SignUp</Link>
                        <Link to="/login/c">Login</Link>
                    </div>
                </div>
            </div>
        </nav>
        <div className="genresDiscoverHolder">
            <h1>{name}</h1>
            <div className="innerGenreDiscoverHolder">
                {offers.map(offer => <Offre title={offer.title} image={offer.image} id={offer.id}/>)}
            </div>
        </div>
    </div>
  )
}

export default GenresDiscover