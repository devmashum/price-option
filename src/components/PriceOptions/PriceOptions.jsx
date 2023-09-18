import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {

    const priceOptions = [
        {
            "id": 1,
            "name": "Basic Membership",
            "price": 29.99,
            "features": [
                "Access to cardio equipment",
                "Access to weightlifting area",
                "Locker room access",
                "Open during regular hours",
                "Access to sauna and steam room",
                "Discounts on personal training sessions"
            ]
        },
        {
            "id": 2,
            "name": "Premium Membership",
            "price": 49.99,
            "features": [
                "Access to all gym facilities",
                "Free group fitness classes",
                "Personal trainer consultation",
                "24/7 access",
                "Access to swimming pool",
                "Complimentary towel service"
            ]
        },
        {
            "id": 3,
            "name": "Student Membership",
            "price": 19.99,
            "features": [
                "Access to cardio equipment",

                "Discounts on group fitness classes",
                "Access to outdoor fitness area"
            ]
        },

    ]

    return (
        <div>
            <h2 className="m-16 text-6xl">Best Prices in the town</h2>
            <div className="grid md:grid-cols-3 p-5 m-5 gap-6">
                {
                    priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;