// /components/Globe.js
"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Globe.module.css';

const Globe = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('http://localhost:8800/api/globe-data');
            const responseData = result.data[0];
            const formattedData = Object.keys(responseData).map((key, index) => ({
                title: key,
                description: responseData[key],
                top: getTopPosition(index),
                left: getLeftPosition(index)
            }));
            setData(formattedData);
        };
        fetchData();
    }, []);

    // Function to get top position based on index (this can be adjusted to match your design)
    const getTopPosition = (index) => {
        const positions = [
            "0px", "115px", "16px", "522px", "251px",
            "251px", "514px", "0px", "522px", "231px"
        ];
        return positions[index % positions.length];
    };

    // Function to get left position based on index (this can be adjusted to match your design)
    const getLeftPosition = (index) => {
        const positions = [
            "0px", "826px", "291px", "0px", "34px",
            "537px", "291px", "582px", "582px", "calc(50%_-_251px)"
        ];
        return positions[index % positions.length];
    };

    return (
        <div className={`${styles.globeContainer} w-full relative bg-white h-[1449px] overflow-hidden text-center text-base text-dark-blue font-heading-4-bold`}>
            <div className="absolute top-[115px] left-[calc(50%_-_589px)] w-[1179px] h-[1219px]">
                <img
                    className="absolute top-[119px] left-[calc(50%_-_589.5px)] w-[1100px] h-[1100px]"
                    alt=""
                    src="/ring.svg"
                />
                <div className="absolute top-[313px] left-[173px] w-[1006px] h-[702px]">
                    {data.map((item, index) => (
                        <div key={index} className={`${styles.globeItem} absolute shadow-[0px_4px_48px_rgba(218,_0,_255,_0.12)_inset] rounded-981xl bg-white w-[180px] h-[180px] overflow-hidden flex flex-col items-center justify-center p-8 box-border gap-[16px]`} style={{ top: item.top, left: item.left }}>
                            <b className="self-stretch relative leading-[120%]">{item.title}</b>
                            <div className="w-[148px] relative text-xs leading-[120%] inline-block whitespace-pre-wrap">{item.description}</div>
                        </div>
                    ))}
                </div>
                <b className="absolute top-[0px] left-[calc(50%_-_362.5px)] text-[30px] leading-[120%] inline-block text-default-colors-black text-left w-[728px] h-[45px]">
                    Documents Required for Study Abroad Loan
                </b>
            </div>
        </div>
    );
};

export default Globe;
