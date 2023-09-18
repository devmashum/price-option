import PropTypes from 'prop-types'
import { ImDiamonds } from "react-icons/im";
const Feature = ({ feature }) => {
    return (
        <div>
            <p className=' mt-5 flex gap-2'><ImDiamonds className='text-white text-xl'></ImDiamonds>{feature}</p>
        </div>
    );
};
Feature.propTypes = {
    feature: PropTypes.string
}
export default Feature;