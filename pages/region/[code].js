import React from "react";
import axios from "axios";
import Head from "next/head";
import {Layout} from "../../components/layout";

const CodeRegion = ({ data }) => {
    console.log(data);
    return(
        <>
            {
                data && (
                    <>
                        <Head>
                            <title>{data.nom}</title>
                        </Head>
                        <Layout>
                            <h1>Région: {data.nom}</h1>
                            <p>Code: {data.code}</p>
                        </Layout>
                    </>
                )
            }
        </>
    );
}

export const getServerSideProps = async ({params}) => {
    const code = params.code
    const url = "https://geo.api.gouv.fr/regions/";
    const {data} = await axios.get(url + code )
    return {
        props: {
            data
        }
    }
}

export default CodeRegion;
