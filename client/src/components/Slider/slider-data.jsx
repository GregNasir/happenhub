import concertImage from "../../assets/images/concert.jpg";
import sportImage from "../../assets/images/basketball.jpg";
import foodImage from "../../assets/images/food3.jpg";
import artImage from "../../assets/images/art1.jpg";



const sliderData = [
    {
        image: concertImage,
        heading: "Parties and Concerts",
        desc: "This is the description of slide two Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi quos quas, voluptatum nesciunt illum exercitationem.",
        link: "/music/concerts",
    },
    {
        image: foodImage,
        heading: "Food",
        // desc: "This is the description of slide three Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi quos quas, voluptatum nesciunt illum exercitationem.",
        link: "/food",
        
    },
    {
        image: sportImage,
        heading: "Sports",
        desc: "This is the description of slide three Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi quos quas, voluptatum nesciunt illum exercitationem.",
        link: "/sports",
    },
    {
        image: artImage,
        heading: "Art",
        desc: "This is the description of slide one Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi quos quas, voluptatum nesciunt illum exercitationem.",
        link: "/art",
    },
];

export default sliderData;