import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Opportunity from '../components/Opportunity';
import PassTiers from '../components/PassTiers';
import Spaces from '../components/Spaces';
import ManagedOffices from '../components/ManagedOffices';
import MeetingRooms from '../components/MeetingRooms';
import Community from '../components/Community';
import Testimonials from '../components/Testimonials';
import ListYourSpace from '../components/ListYourSpace';
import FAQ from '../components/FAQ';
import AISearch from '../components/AISearch';

export default function Landing() {
  return (
    <Layout>
      <Hero />
      <Opportunity />
      <PassTiers />
      <Spaces />
      <ManagedOffices />
      <MeetingRooms />
      <Community />
      <Testimonials />
      <ListYourSpace />
      <FAQ />
      <AISearch />
    </Layout>
  );
}
