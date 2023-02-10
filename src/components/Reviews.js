import AllReviews from "../data/reviews.json";
import Star from "../images/EstrelaUnica.png"
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


export function Reviews() {
  var ReviewsArea = [];
 

  AllReviews.reviews.forEach((review, i) => { 
    let Stars = []  
    for (let index = 0; index < review.rating; index++) {
        Stars.push(<img src={Star} className="starReview" key={`${i}-${index}`}/>)
    }
    let text = ""
    if (review.text == "") {
        text = "O usuário não escreveu uma resenha."
    }else{
        text = review.text
    }

    ReviewsArea.push(
            <div className="containerReview" key={i}>
                <div className="authorArea">
                    <img src={review.profile_photo_url} className="IconAuthor" />
                    <p className="NameAuthor">{review.author_name}</p>
                    <div className="StarsArea">{Stars}</div>
                </div>
                <div>
                <p className="textAuthor">{text}</p>
                <p className="TimeAgoArea">{review.relative_time_description}</p>
                </div>        
            </div>
            );
  });

  return <Carousel id="googleReviews" showThumbs={false}>{ReviewsArea}</Carousel>;
}
