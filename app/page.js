"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PieChart from '../components/PieChart';
import LineChart from '../components/LineChart';
import BarChart from '../components/BarChart';
import Doughnut from '../components/DoughnutChart'
import StatsCard from '../components/StatsCard';
import logo from '../assets/next-logo.svg'
import Image from 'next/image';
import Head from 'next/head';

const HomePage = () => {
  const [data, setData] = useState();
  const [timeRange, setTimeRange] = useState('1day'); // default time range

  useEffect(() => {
    // Fetch dummy data from an API(or use static dummy data)
    axios.get(`/api/stats?timeRange=${timeRange}`).then((res) => {
      setData(res.data);
      console.log(res.data)
    });
  }, [timeRange]);

  return (
    <>
      <Head>
        <link rel="icon" href="./favicon.ico" sizes="226x226" />
      </Head>
      <div className="bg-gradient-to-r from-customblue to-customlightblue w-full px-8 py-6">
        <header className="p-4 bg-gradient-to-r from-customblue/25 to-customlightblue/25  rounded-3xl sticky top-6 flex flex-col justify-center items-center gap-4 sm:md:flex-row sm:md:justify-between sm:md:items-center">

          <div className='flex gap-4 items-center justify-center'>
            <Image src={logo} alt="logo" width={30}></Image>
            <span className='text-2xl text-white'>TailorTalk</span>
          </div>
          <h1 className="text-2xl text-white font-semibold">CRM Statistics</h1>
          <select
            className="border rounded px-2 py-1"
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
          >
            <option value="1day">Last Day</option>
            <option value="1week">Last Week</option>
            <option value="1month">Last Month</option>
          </select>

        </header>
        <section className="mx-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          <StatsCard title="Total Sales" value={data?.totalSales} />
          <StatsCard title="New Customers" value={data?.newCustomers} />
          <StatsCard title="Total Revenue" value={data?.totalRevenue} />
          <StatsCard title="Customer Retention" value={`${data?.retentionRate}%`} />
        </section>
        <section className="mx-5 grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <PieChart data={data?.leadStatus} />
          <LineChart data={data?.salesOverTime} />
          <BarChart data={data?.marketingPerformance} />
          <Doughnut data={data?.conversionRate} />
        </section>
      </div>
    </>
  );
};

export default HomePage;
