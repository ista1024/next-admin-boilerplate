import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import axios from "axios";

export function SendMsg(url, request_data) {
   console.log('test')

   const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                APIUrl
            }
        }
    }`
    )
    const APIUrl = data.site.siteMetadata.APIUrl;

    /*axios({
        method: method,
        url: APIUrl + url,
        responseType: "type",
        data: request_data,
    }).then(function (response) {
        //response Action
        console.log(response);
    }).catch(function (e) {
        console.log(e);
    });*/
    axios.post(APIUrl + url, request_data).then(function (response) {
        console.log(response);
    }).catch(function (error){
        console.log(error);
    })

    return (
        <div></div>
    )
    
}