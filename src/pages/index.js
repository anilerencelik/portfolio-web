import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss'; 
import publicIp from "public-ip";

export default () => {
  const { title, lang, description, endpoint } = headData;


  const adana = async() => {
    const ip = await publicIp.v4()
    console.log(endpoint, {ip})
    await fetch(`${endpoint}?ip=${ip}`, 
      {headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST"})
  }

  useEffect(() => {
    adana()
  }, [])

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'Portfolioo'}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description || 'Portfolio'} />
      </Helmet>
      <App />
    </>
  );
};
