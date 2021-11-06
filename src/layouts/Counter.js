/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useState, useEffect } from 'react';


const Counter = () => {
    // const { initialHour = 10, initialMinute = 0, initialSeconds = 0 } = props;
    const [hour, setHour] = useState(10);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    useEffect(() => {
        let interval = setInterval(() => {

            if (seconds > 0) {
                if ((seconds / 59) > 1 && minutes + 1 !== 60) {
                    setSeconds(seconds - 60);
                    setMinutes(minutes + 1);
                }
                else if(seconds / 59 > 1 && minutes + 1 === 60) {
                    setSeconds(seconds - 60);
                    setHour(hour + 1);
                    setMinutes(0);
                }
                else {
                    setSeconds(seconds - 1);
                }
            }

            if ((minutes / 59) > 1) {
                setMinutes((minutes - (Math.floor(minutes / 60) * 60)));
                setHour(hour + (Math.floor(minutes / 60)));
                setSeconds(seconds);
                
            }

            if (seconds === 0 && minutes!== 60) {
                if (minutes === 0) {
                    setSeconds(59);
                    setMinutes(59);
                    setHour(hour - 1);

                }
                else {
                    setMinutes(minutes-1)
                    setSeconds(59);
                }
            }
        }, 1000)
        return () => {
            clearInterval(interval);
        };
    });
    return (
        <div className="counter-component">
            <div id="cards" class="ui cards">
                <div class="card">
                    <div class="content">
                        <div class="description">
                        
                            <i class="icon plus" onClick={() => setHour(hour + 1)}></i>
                            <pre>{hour} hours</pre>
                            <i class="icon minus" onClick={() => {
                                if (hour - 1 >= 0) {
                                    setHour(hour - 1)
                                }
                            }}></i>

                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="content">
                        <div class="description">

                            <i class="icon plus" onClick={() => setMinutes(minutes + 1)}></i>
                            <pre>{minutes} minutes</pre>
                            <i class="icon minus" onClick={() => {
                                if (minutes - 1 >= 0) {
                                    setMinutes(minutes - 1)
                                }
                            }}></i>

                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="content">
                        <div class="description">

                            <i class="icon plus" onClick={() => setSeconds(seconds + 1)}></i>
                            <pre>{seconds} seconds left</pre>
                            <i class="icon minus" onClick={() => {
                                if (seconds - 1 >= 0) {
                                    setSeconds(seconds - 1)
                                }
                            }}></i>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Counter;