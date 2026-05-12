import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Opportunity from '../components/Opportunity';
import Spaces from '../components/Spaces';
import ManagedOffices from '../components/ManagedOffices';
import MeetingRooms from '../components/MeetingRooms';
import Testimonials from '../components/Testimonials';
import ListYourSpace from '../components/ListYourSpace';
import FAQ from '../components/FAQ';
import FindSpace from '../components/FindSpace';

export default function Landing() {
  return (
    <Layout>
      <Hero />
      <Opportunity />
      <Spaces />
      <ManagedOffices />
      <MeetingRooms />
      <Testimonials />
      <ListYourSpace />
      <FAQ />
      <FindSpace />
    </Layout>
  );
}
