import { InfoOutlined, PlayArrow } from "@mui/icons-material"
import "./featured.scss";

export default function Featured({type}){
    return(
    
            
        <div className="featured">
            {type && (
                <div className="category">
                    <span>{type==="movie"?"Movies":"Series"}</span>
                    <select name="genre" id="genre">
                        <option>Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">comedy</option>
                        <option value="crime">crime</option>
                        <option value="fantasy">fantasy</option>
                        <option value="horror">horror</option>
                        <option value="romance">romance</option>
                        <option value="sci-fi">Sci-Fi</option>
                        <option value="Thriller">Thriller</option>
                        <option value="Western">Western</option>
                        <option value="Drama">Drama</option>
                    </select>
                </div>
            )}
        
            <img  src="https://wallpaperaccess.com/full/2040920.jpg"/>
            <div className="info">
                <img src="https://www.edinburghnews.scotsman.com/webimg/b25lY21zOjI1ZTNiY2I5LTI2NjktNDE3Yy04Yjk0LWQ1MmI3MDU4OWQ5NTpkNDU4MzJmMy1lZDA0LTQ4NGQtYmJlZS01NWJjNWI4YjY4Zjk=.jpg?width=1200&enable=upscale"/>
            </div>
            <span className="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis unde odit at nulla molestias numquam mollitia, quia corporis, quis veritatis dolorem iste maxime ad sunt eligendi? Expedita minima explicabo alias.
            </span>
            <div className="buttons">
                <button className="play">
                    <PlayArrow/>
                    <span>Play</span>
                </button>
                <button className="more">
                    <InfoOutlined/>
                    <span>More Info</span>
                </button>
            </div>
        </div>
    )
}