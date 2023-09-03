import './Body.scss';
import HeroImage from '../../icons_assets/restauranfood.jpg';
import GreekSalad from '../../icons_assets/greek salad.jpg';
import Bruchetta from '../../icons_assets/bruchetta.svg';
import GrilledFish from '../../icons_assets/lemon dessert.jpg';
import { Link } from 'react-router-dom';

const Body = () => {
    return (
        <>
            <div className="hero">
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <div className="heroFlex">
                    <p>
                        We are a family owned Mediterranean Restaurant,
                        focused on traditional recipes served
                        with a mordern twist.
                    </p>
                    <img src={HeroImage} alt=''/>
                </div>
                <Link to='/details'><button>Reserve a table</button></Link>
            </div>
            <div className='menuScroll'>
                <h1>ORDER FOR DELIVERY!</h1>
                <ul>
                    <li><button>Lunch</button></li>
                    <li><button>Mains</button></li>
                    <li><button>Desserts</button></li>
                    <li><button>A La Carte</button></li>
                    <li><button>Chef's</button></li>
                    <li><button>Dairy</button></li>
                    <li><button>Brunch</button></li>
                </ul>
            </div>
            <div className='food'>
                <hr />
                <h2>Greek Salad</h2>
                <div className='foodFlex'>
                <p>
                    The famound green salad of crispy lettuce,
                    peppers, olives and our Chicago chillies
                    our Chicago chillies our Chicago chillies
                    our Chicago chillies <br/>
                    <h4>$12.99</h4>
                </p>
                <img src={GreekSalad} alt=''/>
                </div>
            </div>
            <div className='food'>
                <hr />
                <h2>Greek Salad</h2>
                <div className='foodFlex'>
                <p>
                    The famound green salad of crispy lettuce,
                    peppers, olives and our Chicago chillies 
                    our Chicago chillies our Chicago chillies
                    our Chicago chillies <br/>
                    <h4>$12.99</h4>
                </p>
                <img src={Bruchetta} alt='' />
                </div>
            </div>
            <div className='food'>
                <hr />
                <h2>Tiramisu</h2>
                <div className='foodFlex'>
                <p>
                    The famound green salad of crispy lettuce,
                    peppers, olives and our Chicago chillies 
                    our Chicago chillies our Chicago chillies
                    our Chicago chillies <br/>
                    <h4>$12.99</h4>
                </p>
                <img src={GrilledFish} alt=''/>
                </div>
            </div>
        </>
    )
}

export default Body;