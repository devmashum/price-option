import PropTypes from 'prop-types'
import Feature from '../Feature/Feature';

const PriceOption = ({ option }) => {
    const { name, price, features } = option;
    return (
        <div className=' bg-blue-300 p-10 rounded-2xl flex flex-col'>
            <h2>
                <span className='text-4xl'>{price}</span>
                <span className='text-2xl'>/mon</span>
            </h2>
            <h4 className='text-xl '>{name}</h4>
            <div className='flex-grow'>
                {
                    features.map((feature, index) => <Feature feature={feature} key={index}></Feature>)
                }
            </div>
            <button className=' w-full mt-5 rounded-xl p-3 btn-success'>Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}

export default PriceOption;