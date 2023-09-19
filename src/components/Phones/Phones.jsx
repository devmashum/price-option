import axios, { Axios } from "axios";
import { useEffect, useState } from "react";
import React, { PureComponent } from 'react';
import { Dna } from "react-loader-spinner";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Phones = () => {
    const [phones, setPhones] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const phoneData = data.data.data;
                const phonesWithFakeData = phoneData.map(phone => {
                    const obj = {
                        name: phone.phone_name,
                        price: parseInt(phone.slug.split('-')[1])
                    }
                    return obj;
                })

                setPhones(phonesWithFakeData);
                setLoading(false);
            })
    }, [])

    return (
        <div>
            {loading && <Dna visible={true}
                height="80"
                width="80"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper" />}
            <h2>Phones: {phones.length}</h2>
            <BarChart width={1300} height={400} data={phones}>
                <Bar dataKey="price" fill="blue" />
                <XAxis dataKey="name"></XAxis>
                <YAxis dataKey="price"></YAxis>
                <Tooltip></Tooltip>
            </BarChart>
        </div >
    );
};

export default Phones;