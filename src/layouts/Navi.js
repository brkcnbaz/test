/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Container } from 'semantic-ui-react';

export default function Navi() {

    let [usd, setUsd] = useState([]);
    let [gbp, setGbp] = useState([]);
    let [euro, setEuro] = useState([]);
    async function getData() {
        try {
            let response = await axios(
                `https://api.coindesk.com/v1/bpi/currentprice.json`
            );
            let data = await response.data;
            setUsd(data.bpi.USD);
            setGbp(data.bpi.GBP);
            setEuro(data.bpi.EUR);
        }
        catch (error) {
            alert(error.response);
        }

    }
    useEffect(() => {
        getData();
        let interval = setInterval(() => {
            getData();
        }, 1000 * 30)
        return () => {
            clearInterval(interval);
        }
    }, []);

    return (
        <div>
            <Container>
                <div class="ui inverted segment" style={{ opacity: "0.8" }}>
                    <div class="ui inverted secondary pointing menu" style={{ justifyContent: "space-between", fontWeight: "bold" }}>
                        <a class="item" >
                            <div class="card">
                                <div class="content">
                                    <div class="description">

                                        <i class="icon bitcoin">itcoin&nbsp;Prices</i>

                                    </div>
                                </div>
                            </div>
                        </a>
                        <a class="item" >
                            <div class="card">
                                <div class="content">
                                    <div class="description">

                                        <i class="icon dollar sign">&nbsp;{usd.rate}</i>

                                    </div>
                                </div>
                            </div>
                        </a>
                        <a class="item">
                            <div class="card">
                                <div class="content">
                                    <div class="description">

                                        <i class="icon pound sign">&nbsp;{gbp.rate}</i>

                                    </div>
                                </div>
                            </div>
                        </a>
                        <a class="item">
                            <div class="card">
                                <div class="content">
                                    <div class="description">

                                        <i class="icon euro sign">&nbsp;{euro.rate}</i>

                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </Container>
        </div>
    )
}

