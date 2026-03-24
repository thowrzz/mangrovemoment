'use client'

import Image from 'next/image'
import { Clock, MessageCircle, Users, ArrowRight, Zap, X, ChevronLeft, Shield, Sun, Users2, AlertTriangle, CheckCircle, Info, Star } from 'lucide-react'
import { useState } from 'react'

// ─── Activity Data (extended with full details) ───────────────────────────────
const activities = [
  {
    id: 1,
    name: 'Country Boating',
    duration: '2 – 2.5 hrs',
    price: '₹1,800',
    tag: 'Most Popular',
    tagColor: '#c9a84c',
    description: 'Glide through ancient mangrove channels on a traditional wooden country boat. The most immersive way to experience Paravur backwaters.',
    image: './countryboating.png',
    icon: '⛵',
    details: {
      fullDescription: `Step aboard a hand-crafted traditional Kerala country boat and drift through the timeless labyrinth of Paravur's mangrove waterways. This is not merely a boat ride — it is an unhurried communion with one of Kerala's most pristine backwater ecosystems. Your experienced local guide will navigate narrow channels where kingfishers dart overhead and the air carries the gentle fragrance of water hyacinth.

The journey takes you through sections of the backwater inaccessible by any other vessel, passing small island communities, ancient coconut groves, and the hypnotic rhythm of everyday life on the water. This is the flagship experience at Paravur Backwaters — chosen by over 70% of our guests.`,
      timings: [
        { slot: 'Morning Session', time: '6:30 AM – 9:00 AM', note: 'Best for birdwatching & golden light' },
        { slot: 'Mid-Morning', time: '9:30 AM – 12:00 PM', note: 'Popular family slot' },
        { slot: 'Evening Session', time: '4:00 PM – 6:30 PM', note: 'Ideal for sunset & golden hour' },
      ],
      rules: [
        'Life jackets are mandatory and provided for all passengers',
        'Maximum capacity: 8 persons per boat',
        'No standing or sudden movements while on the boat',
        'Photography welcome — tripods and large equipment extra',
        'Children under 5 must be held by a parent at all times',
        'No littering in the waterway',
        'Alcohol not permitted on board',
        'Cancellations must be made 4 hours in advance for a refund',
      ],
      includes: [
        'Experienced local guide/oarsman',
        'Life jackets for all passengers',
        'Complimentary mineral water',
        'Brief mangrove ecology orientation',
        'Photo stop at scenic viewpoint',
      ],
      bestFor: ['Families', 'Couples', 'Nature lovers', 'First-time visitors', 'Senior travellers'],
      difficulty: 'Easy',
      minAge: '3 years+',
      groupSize: 'Up to 8 persons',
      weatherNote: 'Available year-round. During monsoon (Jun–Aug), routes may vary for safety.',
      highlights: [
        'Navigate exclusive mangrove tunnels',
        'Spot migratory birds & local wildlife',
        'Visit a traditional fishing village',
        'Witness authentic Kerala backwater life',
      ],
    },
  },
  {
    id: 2,
    name: 'Kayaking',
    duration: '2 – 2.5 hrs',
    price: '₹550',
    tag: 'Best Value',
    tagColor: '#4caf82',
    description: 'Paddle silently through narrow mangrove tunnels with a local guide. Perfect for nature lovers and first-timers.',
    image: './Kayaking.png',
    icon: '🛶',
    details: {
      fullDescription: `Kayaking on Paravur backwaters is the purest way to explore the ecosystem at your own pace. Gliding silently through narrow mangrove tunnels, you become part of the landscape rather than an observer of it. The low profile of the kayak allows you to slip under overhanging roots and enter channels invisible to larger boats.

Our guides are trained naturalists who can identify mangrove species, local bird life, and aquatic fauna along the route. Whether you're a first-time paddler or an experienced kayaker, the calm waters of Paravur Lake are perfect for a fulfilling session. No prior experience required.`,
      timings: [
        { slot: 'Morning Session', time: '6:30 AM – 9:00 AM', note: 'Best wildlife sightings' },
        { slot: 'Late Morning', time: '9:30 AM – 12:00 PM', note: 'Great for beginners' },
        { slot: 'Evening Session', time: '4:00 PM – 6:30 PM', note: 'Calm water & cooler temps' },
      ],
      rules: [
        'Life jackets must be worn throughout the session',
        'One paddler per kayak (tandem kayaks available on request)',
        'Follow guide instructions at all times',
        'Do not paddle into restricted eco-sensitive zones',
        'Secure all electronics before entering the water',
        'Minimum age: 10 years for solo; younger with parent in tandem',
        'Guests must be able to swim or wear full-body flotation vest',
        'Cancellation required 2 hours before session for full refund',
      ],
      includes: [
        'Quality kayak & paddle',
        'Life jacket & safety gear',
        'Certified guide (leads the group)',
        'Basic paddle technique training',
        'Waterproof bag for essentials',
      ],
      bestFor: ['Solo travellers', 'Adventure seekers', 'Nature enthusiasts', 'Teens & adults', 'Photography lovers'],
      difficulty: 'Easy to Moderate',
      minAge: '10 years (solo) / 5 years (tandem)',
      groupSize: '1–10 kayaks per session',
      weatherNote: 'Not available during heavy rain or strong winds. Safety call made morning of booking.',
      highlights: [
        'Navigate narrow mangrove tunnels',
        'Silent approach for birdwatching',
        'Guided eco-commentary throughout',
        'Access hidden waterways unreachable by boats',
      ],
    },
  },
  {
    id: 3,
    name: 'Stand Up Paddle',
    duration: '2 – 2.5 hrs',
    price: '₹600',
    tag: 'Fun & Easy',
    tagColor: '#4c8ec9',
    description: 'Balance on the glassy backwaters and soak in stunning lake views. No experience needed — our guides ensure a great time.',
    image: './standup.png',
    icon: '🏄',
    details: {
      fullDescription: `Stand-Up Paddleboarding (SUP) on Paravur Lake is as meditative as it is exhilarating. The lake's naturally calm surface makes it one of Kerala's finest SUP destinations — wide open water with breathtaking views of the Western Ghats in the distance and the backwater landscape all around.

Start on your knees if needed — our instructors will have you standing and paddling confidently within the first 20 minutes. The experience combines core fitness, mindful balance, and sheer scenic beauty. Popular with yoga practitioners and wellness travellers, SUP at sunrise is a genuinely transcendent experience.`,
      timings: [
        { slot: 'Sunrise Session', time: '6:00 AM – 8:30 AM', note: 'Mirror-flat water, perfect conditions' },
        { slot: 'Morning', time: '9:00 AM – 11:30 AM', note: 'Great for beginners' },
        { slot: 'Evening Session', time: '4:30 PM – 7:00 PM', note: 'Sunset paddling' },
      ],
      rules: [
        'Life jackets must be worn until instructor certifies you are comfortable',
        'Always use the ankle leash provided',
        'Do not venture beyond the marked paddling zones',
        'Respect other water users — give way to boats',
        'In case of fall, stay with the board and raise one hand',
        'No paddling alone — always stay within group view',
        'Minimum age: 12 years',
        'Not recommended for those with severe balance or vertigo issues',
      ],
      includes: [
        'SUP board & paddle',
        'Ankle leash & life jacket',
        'Full beginner instruction session',
        'Safety kayak escort nearby',
        'Towel & rinse area access',
      ],
      bestFor: ['Wellness & yoga travellers', 'Beginners', 'Couples', 'Fitness enthusiasts', 'Adventure tourists'],
      difficulty: 'Easy (with instruction)',
      minAge: '12 years+',
      groupSize: 'Up to 8 boards per session',
      weatherNote: 'Wind above 15 km/h = session rescheduled. Best conditions April–June and Oct–Dec.',
      highlights: [
        'Panoramic views of Paravur Lake',
        'Core workout disguised as pure fun',
        'Sunrise sessions — magical golden light',
        'Certified instructors for all levels',
      ],
    },
  },
  {
    id: 4,
    name: 'Coracle Ride',
    duration: '15 min',
    price: '₹400',
    tag: 'Unique to Kerala',
    tagColor: '#c97a4c',
    description: "Spin and drift in a traditional round basket boat — a centuries-old Kerala tradition that's pure joy for all ages.",
    image: './coracleRide.jpg',
    icon: '🪵',
    details: {
      fullDescription: `The coracle — known locally as "parisal" — is a perfectly round, bowl-shaped boat woven from bamboo and sealed with tar, a craft that has remained virtually unchanged for over a thousand years. Riding in one is unlike any other watercraft experience: it spins gently, rocks with the current, and offers a wonderfully disorienting yet perfectly safe journey across the water.

Operated by a skilled local coracle-man using a single paddle with expert rotational technique, the ride is short but utterly memorable. Beloved by children and adults alike, it's the most photographed activity at Paravur Backwaters. A perfect add-on to any longer experience.`,
      timings: [
        { slot: 'All Day', time: '7:00 AM – 6:30 PM', note: 'Walk-in friendly, no reservation needed' },
      ],
      rules: [
        'Maximum 2 persons per coracle at a time',
        'Life jackets provided and must be worn',
        'Sit still and do not attempt to row yourself',
        'Keep hands inside the coracle at all times',
        'No standing at any time',
        'Children under 6 must sit on parent\'s lap',
        'Combined weight limit: 150 kg per coracle',
      ],
      includes: [
        'Skilled coracle operator',
        'Life jackets',
        'Assistance boarding & alighting',
        'Photo opportunity at the launch point',
      ],
      bestFor: ['Families with children', 'All ages', 'Cultural experience seekers', 'Photography lovers', 'Quick stopover guests'],
      difficulty: 'None — fully passive',
      minAge: 'All ages (children with adult)',
      groupSize: 'Up to 2 per coracle',
      weatherNote: 'Available in all weather. Paused only during lightning warnings.',
      highlights: [
        'Centuries-old Kerala tradition',
        'Utterly unique spinning-boat experience',
        'Perfect for all ages including young children',
        'Walk-in friendly — no advance booking needed',
      ],
    },
  },
  {
    id: 5,
    name: 'ATV Ride',
    duration: '15 – 20 min',
    price: '₹350',
    tag: 'Adrenaline',
    tagColor: '#c94c4c',
    description: 'Rev up on rugged terrain beside the backwaters. A short but thrilling off-road adventure to get the heart pumping.',
    image: './avtride.png',
    icon: '🏍️',
    details: {
      fullDescription: `Our ATV track runs along the backwater shoreline through a rugged mix of mud, gravel, and grass terrain — purpose-built for maximum thrill with controlled safety. Ride powerful all-terrain quad bikes along a scenic route where the backwaters shimmer just metres away.

Whether you're an experienced rider or a complete first-timer, our instructors will brief you thoroughly and ensure you're comfortable before the timer starts. The track features moderate elevation changes, gentle turns, and a few heart-pumping straightaways. It's the most popular activity among teenagers and corporate groups.`,
      timings: [
        { slot: 'All Day Slots', time: '8:00 AM – 6:00 PM', note: 'Every 30 min, book in advance' },
      ],
      rules: [
        'Helmet and protective gear mandatory — provided by us',
        'Minimum age: 16 years to ride solo; 10 years with adult escort',
        'No passengers permitted unless on dual-seat ATV',
        'Follow the marked track at all times — no off-routing',
        'Speed limits enforced by instructors on the course',
        'Closed-toe footwear required (sandals/flip-flops not permitted)',
        'No riding under the influence of alcohol or medication',
        'Pregnant guests and those with spinal conditions should not participate',
        'Damage caused by reckless riding will be charged to the rider',
      ],
      includes: [
        'Full safety gear (helmet, gloves, knee pads)',
        'Instructor briefing & supervised ride',
        'ATV fuel for the session',
        'First aid availability on site',
      ],
      bestFor: ['Teens & young adults', 'Thrill seekers', 'Corporate team outings', 'Groups', 'Adrenaline enthusiasts'],
      difficulty: 'Moderate',
      minAge: '16 years solo / 10 years with adult',
      groupSize: 'Up to 4 riders simultaneously on track',
      weatherNote: 'Track closes during heavy rain for safety. Light rain — rides continue with gear.',
      highlights: [
        'Scenic backwater-edge track',
        'Powerful quad bikes for real off-road feel',
        'Beginner-friendly with full instruction',
        'Most thrilling activity in the package',
      ],
    },
  },
  {
    id: 6,
    name: 'Speed Boat',
    duration: 'Variable',
    price: '₹3,500',
    tag: 'Premium',
    tagColor: '#8e4cc9',
    description: "Feel the rush as you tear across Paravur Lake at full speed. Perfect for groups who want the ultimate water thrill.",
    image: './boat.png',
    icon: '🚤',
    details: {
      fullDescription: `The speed boat experience is Paravur's most premium water activity — a full-throttle blast across the open expanse of Paravur Lake. The lake's size and typically smooth morning surface make it ideal for high-speed runs, with the surrounding landscape of palms and hillocks creating a dramatic backdrop.

The experience is priced per boat (not per person), making it excellent value for groups of up to 6. The boat operator performs high-speed sweeps, figure-eight turns, and where conditions allow, wake-jumping runs. Arrive early morning for the best conditions and the most spectacular scenery.`,
      timings: [
        { slot: 'Early Morning', time: '6:30 AM – 8:30 AM', note: 'Glassiest water — premium experience' },
        { slot: 'Morning', time: '9:00 AM – 12:00 PM', note: 'Standard availability' },
        { slot: 'Late Afternoon', time: '3:30 PM – 5:30 PM', note: 'Sunset run available' },
      ],
      rules: [
        'Life jackets mandatory for all on board',
        'Maximum 6 passengers per boat',
        'Remain seated during high-speed runs',
        'No leaning overboard or standing',
        'Follow operator instructions at all times',
        'Pregnant guests and those with heart conditions should not participate',
        'Minimum age: 8 years',
        'Price is per boat — shared up to 6 persons',
        'Pre-booking required — walk-ins subject to availability',
      ],
      includes: [
        'Boat + professional operator',
        'Life jackets for all passengers',
        'Approximately 20–30 minutes on water',
        'Custom route based on group preference',
        'GoPro mount point available (bring your own)',
      ],
      bestFor: ['Groups & families', 'Corporate outings', 'Celebration trips', 'Thrill seekers', 'Premium experience seekers'],
      difficulty: 'Easy — fully passive',
      minAge: '8 years+',
      groupSize: 'Up to 6 passengers per boat',
      weatherNote: 'Not available when wind speed exceeds 20 km/h or during rough water advisories.',
      highlights: [
        'Full-throttle run across open lake',
        'Best group activity for shared thrills',
        'Priced per boat — great group value',
        'Professional operator + premium vessel',
      ],
    },
  },
]

// ─── Detail Page Component ────────────────────────────────────────────────────

function ActivityDetailPage({
  activity,
  onBack,
}: {
  activity: (typeof activities)[0]
  onBack: () => void
}) {
  const bookOnWhatsApp = (activityName: string) => {
    const message = encodeURIComponent(
      `Hi! I'd like to book the *${activityName}* experience. Please share availability and details.`
    )
    window.open(`https://wa.me/919744201662?text=${message}`, '_blank')
  }

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: '#f7f5f0',
        zIndex: 1000,
        overflowY: 'auto',
        fontFamily: "'Jost', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,400&family=Jost:wght@300;400;500;600&display=swap');

        .detail-hero-img { transition: transform 8s ease; }
        .detail-hero-img:hover { transform: scale(1.04); }

        .detail-pill {
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(13,36,21,0.06);
          border: 1px solid rgba(13,36,21,0.1);
          padding: 5px 12px;
          font-family: 'Jost', sans-serif;
          font-size: 0.65rem;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #0d2415;
        }

        .detail-rule-item {
          display: flex; gap: 12px; align-items: flex-start;
          padding: 10px 0;
          border-bottom: 1px solid rgba(0,0,0,0.05);
          font-size: 0.82rem;
          font-weight: 300;
          color: #444;
          line-height: 1.6;
        }
        .detail-rule-item:last-child { border-bottom: none; }

        .detail-include-item {
          display: flex; gap: 10px; align-items: flex-start;
          padding: 8px 0;
          font-size: 0.82rem;
          font-weight: 300;
          color: #444;
          line-height: 1.5;
        }

        .timing-row {
          padding: 16px 20px;
          border: 1px solid rgba(0,0,0,0.07);
          background: #fff;
          margin-bottom: 8px;
          display: flex; justify-content: space-between; align-items: center;
          flex-wrap: wrap; gap: 8px;
        }

        .highlight-chip {
          background: linear-gradient(135deg, #0d2415, #1a3c2e);
          color: #e8d49a;
          padding: 8px 16px;
          font-family: 'Jost', sans-serif;
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          display: inline-flex;
          align-items: center;
          gap: 7px;
        }

        .back-btn {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'Jost', sans-serif;
          font-size: 0.68rem;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #0d2415;
          background: transparent;
          border: 1px solid rgba(13,36,21,0.2);
          padding: 10px 18px;
          cursor: pointer;
          transition: all 0.25s;
        }
        .back-btn:hover {
          background: #0d2415;
          color: #fff;
          border-color: #0d2415;
        }

        .detail-book-btn {
          display: inline-flex; align-items: center; gap: 9px;
          font-family: 'Jost', sans-serif;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          background: #0d2415;
          color: #fff;
          border: none;
          padding: 14px 28px 14px 24px;
          cursor: pointer;
          clip-path: polygon(0% 0%, calc(100% - 10px) 0%, 100% 50%, calc(100% - 10px) 100%, 0% 100%);
          transition: all 0.25s;
        }
        .detail-book-btn:hover {
          background: #c9a84c;
          color: #0d2415;
          box-shadow: 0 8px 28px rgba(201,168,76,0.35);
        }

        .section-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.3rem;
          font-weight: 600;
          color: #0d2415;
          margin-bottom: 16px;
          padding-bottom: 10px;
          border-bottom: 1px solid rgba(201,168,76,0.35);
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .tag-badge {
          font-family: 'Jost', sans-serif;
          font-size: 0.58rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #fff;
          padding: 3px 10px;
        }

        .weather-note {
          background: rgba(76,142,201,0.08);
          border: 1px solid rgba(76,142,201,0.2);
          padding: 14px 18px;
          display: flex;
          gap: 12px;
          align-items: flex-start;
        }

        @media (max-width: 768px) {
          .detail-two-col { flex-direction: column !important; }
          .detail-hero { height: 280px !important; }
        }
      `}</style>

      {/* ── Sticky Nav ── */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 10,
          background: 'rgba(247,245,240,0.95)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(0,0,0,0.08)',
          padding: '14px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
        }}
      >
        <button className="back-btn" onClick={onBack}>
          <ChevronLeft size={13} />
          All Activities
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '1.1rem',
              fontWeight: 600,
              color: '#0d2415',
            }}
          >
            {activity.name}
          </span>
          <span
            className="tag-badge"
            style={{ background: activity.tagColor }}
          >
            {activity.tag}
          </span>
        </div>

        <button
          className="detail-book-btn"
          onClick={() => bookOnWhatsApp(activity.name)}
          style={{ fontSize: '0.63rem', padding: '10px 20px 10px 16px' }}
        >
          Book Now
          <ArrowRight size={12} />
        </button>
      </div>

      {/* ── Hero ── */}
      <div
        className="detail-hero"
        style={{
          position: 'relative',
          height: '420px',
          overflow: 'hidden',
          background: '#0d2415',
        }}
      >
        <Image
          src={activity.image}
          alt={activity.name}
          fill
          className="detail-hero-img"
          style={{ objectFit: 'cover', opacity: 0.8 }}
        />
        {/* Gradient */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(13,36,21,0.75) 100%)',
          }}
        />
        {/* Content */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '40px 40px 36px',
          }}
        >
          <div style={{ marginBottom: 12 }}>
            <span
              className="tag-badge"
              style={{ background: activity.tagColor }}
            >
              {activity.tag}
            </span>
          </div>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2.2rem, 5vw, 3.4rem)',
              fontWeight: 300,
              color: '#fff',
              margin: 0,
              lineHeight: 1.1,
            }}
          >
            {activity.icon}{' '}
            <em style={{ fontStyle: 'italic', color: '#e8d49a' }}>
              {activity.name}
            </em>
          </h1>
          <div
            style={{
              display: 'flex',
              gap: 20,
              marginTop: 16,
              flexWrap: 'wrap',
            }}
          >
            <span className="detail-pill" style={{ background: 'rgba(255,255,255,0.12)', borderColor: 'rgba(255,255,255,0.2)', color: '#fff' }}>
              <Clock size={11} />
              {activity.duration}
            </span>
            <span className="detail-pill" style={{ background: 'rgba(201,168,76,0.2)', borderColor: 'rgba(201,168,76,0.4)', color: '#e8d49a' }}>
              {activity.price} / person
            </span>
            <span className="detail-pill" style={{ background: 'rgba(255,255,255,0.12)', borderColor: 'rgba(255,255,255,0.2)', color: '#fff' }}>
              <Users2 size={11} />
              {activity.details.groupSize}
            </span>
          </div>
        </div>
      </div>

      {/* ── Body ── */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '48px 24px 80px' }}>

        {/* Quick meta bar */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
            gap: 1,
            background: 'rgba(0,0,0,0.08)',
            border: '1px solid rgba(0,0,0,0.08)',
            marginBottom: 48,
          }}
        >
          {[
            { label: 'Difficulty', value: activity.details.difficulty },
            { label: 'Min. Age', value: activity.details.minAge },
            { label: 'Group Size', value: activity.details.groupSize },
            { label: 'Duration', value: activity.duration },
            { label: 'Price', value: `${activity.price} / person` },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                background: '#fff',
                padding: '18px 20px',
                borderRight: '1px solid rgba(0,0,0,0.06)',
              }}
            >
              <div
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: '0.6rem',
                  fontWeight: 600,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: '#c9a84c',
                  marginBottom: 5,
                }}
              >
                {item.label}
              </div>
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: '#0d2415',
                }}
              >
                {item.value}
              </div>
            </div>
          ))}
        </div>

        {/* Two column layout */}
        <div
          className="detail-two-col"
          style={{ display: 'flex', gap: 40, alignItems: 'flex-start' }}
        >
          {/* LEFT: Main content */}
          <div style={{ flex: '1 1 60%', minWidth: 0 }}>

            {/* About */}
            <div style={{ marginBottom: 40 }}>
              <h2 className="section-heading">
                <Info size={16} color="#c9a84c" />
                About this Experience
              </h2>
              {activity.details.fullDescription.split('\n\n').map((para, i) => (
                <p
                  key={i}
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: '0.88rem',
                    fontWeight: 300,
                    color: '#444',
                    lineHeight: 1.8,
                    marginBottom: 16,
                  }}
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Highlights */}
            <div style={{ marginBottom: 40 }}>
              <h2 className="section-heading">
                <Star size={16} color="#c9a84c" />
                Highlights
              </h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {activity.details.highlights.map((h, i) => (
                  <span key={i} className="highlight-chip">
                    <CheckCircle size={11} />
                    {h}
                  </span>
                ))}
              </div>
            </div>

            {/* Timings */}
            <div style={{ marginBottom: 40 }}>
              <h2 className="section-heading">
                <Clock size={16} color="#c9a84c" />
                Session Timings
              </h2>
              {activity.details.timings.map((t, i) => (
                <div key={i} className="timing-row">
                  <div>
                    <div
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: '1rem',
                        fontWeight: 700,
                        color: '#0d2415',
                      }}
                    >
                      {t.slot}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Jost', sans-serif",
                        fontSize: '0.75rem',
                        fontWeight: 400,
                        color: '#888',
                        marginTop: 2,
                      }}
                    >
                      {t.note}
                    </div>
                  </div>
                  <div
                    style={{
                      fontFamily: "'Jost', sans-serif",
                      fontSize: '0.78rem',
                      fontWeight: 500,
                      color: '#0d2415',
                      background: 'rgba(201,168,76,0.1)',
                      border: '1px solid rgba(201,168,76,0.25)',
                      padding: '5px 12px',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {t.time}
                  </div>
                </div>
              ))}
            </div>

            {/* Rules */}
            <div style={{ marginBottom: 40 }}>
              <h2 className="section-heading">
                <Shield size={16} color="#c9a84c" />
                Rules & Safety Guidelines
              </h2>
              <div>
                {activity.details.rules.map((rule, i) => (
                  <div key={i} className="detail-rule-item">
                    <div
                      style={{
                        minWidth: 20,
                        height: 20,
                        background: 'rgba(201,168,76,0.12)',
                        border: '1px solid rgba(201,168,76,0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        marginTop: 2,
                      }}
                    >
                      <span
                        style={{
                          fontSize: '0.58rem',
                          fontWeight: 700,
                          color: '#c9a84c',
                        }}
                      >
                        {i + 1}
                      </span>
                    </div>
                    {rule}
                  </div>
                ))}
              </div>
            </div>

            {/* Weather Note */}
            <div className="weather-note" style={{ marginBottom: 40 }}>
              <Sun size={18} color="#4c8ec9" style={{ flexShrink: 0, marginTop: 1 }} />
              <div>
                <div
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: '0.65rem',
                    fontWeight: 600,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: '#4c8ec9',
                    marginBottom: 5,
                  }}
                >
                  Weather & Availability Note
                </div>
                <p
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: '0.82rem',
                    fontWeight: 300,
                    color: '#555',
                    margin: 0,
                    lineHeight: 1.6,
                  }}
                >
                  {activity.details.weatherNote}
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: Sidebar */}
          <div style={{ flex: '0 0 300px', minWidth: 0 }}>

            {/* What's Included */}
            <div
              style={{
                background: '#fff',
                border: '1px solid rgba(0,0,0,0.07)',
                padding: '24px',
                marginBottom: 20,
              }}
            >
              <h3 className="section-heading" style={{ fontSize: '1.1rem' }}>
                <CheckCircle size={15} color="#4caf82" />
                What's Included
              </h3>
              {activity.details.includes.map((item, i) => (
                <div key={i} className="detail-include-item">
                  <div
                    style={{
                      width: 18,
                      height: 18,
                      borderRadius: '50%',
                      background: 'rgba(76,175,130,0.1)',
                      border: '1px solid rgba(76,175,130,0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: 1,
                    }}
                  >
                    <CheckCircle size={9} color="#4caf82" />
                  </div>
                  {item}
                </div>
              ))}
            </div>

            {/* Best For */}
            <div
              style={{
                background: '#fff',
                border: '1px solid rgba(0,0,0,0.07)',
                padding: '24px',
                marginBottom: 20,
              }}
            >
              <h3 className="section-heading" style={{ fontSize: '1.1rem' }}>
                <Users2 size={15} color="#c9a84c" />
                Best For
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {activity.details.bestFor.map((item, i) => (
                  <span
                    key={i}
                    style={{
                      background: 'rgba(13,36,21,0.05)',
                      border: '1px solid rgba(13,36,21,0.1)',
                      fontFamily: "'Jost', sans-serif",
                      fontSize: '0.7rem',
                      fontWeight: 500,
                      color: '#0d2415',
                      padding: '5px 12px',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Book CTA card */}
            <div
              style={{
                background: 'linear-gradient(135deg, #0d2415 0%, #1a3c2e 100%)',
                padding: '28px 24px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Decorative */}
              <div style={{ position: 'absolute', top: 12, right: 12, width: 24, height: 24, borderTop: '1px solid rgba(201,168,76,0.3)', borderRight: '1px solid rgba(201,168,76,0.3)' }} />
              <div style={{ position: 'absolute', bottom: 12, left: 12, width: 24, height: 24, borderBottom: '1px solid rgba(201,168,76,0.3)', borderLeft: '1px solid rgba(201,168,76,0.3)' }} />

              <div
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: '0.6rem',
                  fontWeight: 600,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: '#c9a84c',
                  marginBottom: 8,
                }}
              >
                Reserve Your Spot
              </div>
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '1.5rem',
                  fontWeight: 300,
                  color: '#fff',
                  marginBottom: 4,
                  lineHeight: 1.2,
                }}
              >
                {activity.price}{' '}
                <span
                  style={{
                    fontSize: '0.85rem',
                    color: 'rgba(255,255,255,0.5)',
                    fontFamily: "'Jost', sans-serif",
                    fontWeight: 300,
                  }}
                >
                  / person
                </span>
              </div>
              <p
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: '0.75rem',
                  fontWeight: 300,
                  color: 'rgba(255,255,255,0.55)',
                  marginBottom: 20,
                  lineHeight: 1.5,
                }}
              >
                Group discounts available for 10+ guests. Contact us for custom packages.
              </p>

              <button
                className="detail-book-btn"
                onClick={() => bookOnWhatsApp(activity.name)}
                style={{ width: '100%', justifyContent: 'center', clipPath: 'none' }}
              >
                <MessageCircle size={14} />
                Book via WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Activities Section (updated with More Details button) ────────────────────

export function ActivitiesSection() {
  const [selectedActivity, setSelectedActivity] = useState<(typeof activities)[0] | null>(null)

  const scrollToContact = () =>
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })

  const bookOnWhatsApp = (activityName: string) => {
    const message = encodeURIComponent(
      `Hi! I'd like to book the *${activityName}* experience. Please share availability and details.`
    )
    window.open(`https://wa.me/919744201662?text=${message}`, '_blank')
  }

  // Show detail page
  if (selectedActivity) {
    return (
      <ActivityDetailPage
        activity={selectedActivity}
        onBack={() => setSelectedActivity(null)}
      />
    )
  }

  return (
    <section
      id="activities"
      style={{
        background: '#f7f5f0',
        fontFamily: "'Jost', sans-serif",
        paddingTop: '96px',
        paddingBottom: '96px',
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,400&family=Jost:wght@300;400;500;600&display=swap');

        .act-card {
          background: #fff;
          border: 1px solid rgba(0,0,0,0.06);
          overflow: hidden;
          position: relative;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          cursor: pointer;
        }
        .act-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 60px rgba(0,0,0,0.12);
          border-color: rgba(201,168,76,0.3);
        }
        .act-card:hover .act-img { transform: scale(1.06); }
        .act-card:hover .act-book-btn .book-btn-arrow { transform: translateX(3px); }

        .act-img { transition: transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94); object-fit: cover; }

        .act-tag {
          position: absolute; top: 14px; left: 14px;
          font-family: 'Jost', sans-serif; font-size: 0.6rem; font-weight: 600;
          letter-spacing: 0.14em; text-transform: uppercase;
          padding: 4px 10px; border-radius: 2px; color: #fff; z-index: 2;
        }

        .act-price {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.6rem; font-weight: 600; color: #0d2415; line-height: 1;
        }

        .act-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.35rem; font-weight: 700; color: #0d2415; line-height: 1.15;
        }

        .act-desc {
          font-family: 'Jost', sans-serif;
          font-size: 0.8rem; font-weight: 300; color: #555; line-height: 1.65;
        }

        .act-duration {
          display: inline-flex; align-items: center; gap: 5px;
          font-family: 'Jost', sans-serif; font-size: 0.68rem; font-weight: 500;
          letter-spacing: 0.1em; color: #888; text-transform: uppercase;
        }

        /* Book Now button */
        .act-book-btn {
          font-family: 'Jost', sans-serif; font-size: 0.68rem; font-weight: 600;
          letter-spacing: 0.16em; text-transform: uppercase;
          background: #0d2415; color: #fff; border: none;
          padding: 11px 20px 11px 16px;
          cursor: pointer; display: inline-flex; align-items: center; gap: 8px;
          transition: background 0.25s, color 0.25s, box-shadow 0.25s;
          clip-path: polygon(0% 0%, calc(100% - 8px) 0%, 100% 50%, calc(100% - 8px) 100%, 0% 100%);
        }
        .act-book-btn:hover {
          background: #c9a84c !important; color: #0d2415 !important;
          box-shadow: 0 6px 20px rgba(201,168,76,0.35);
        }
        .act-book-btn:hover .book-btn-arrow { transform: translateX(3px) !important; color: #0d2415 !important; }
        .book-btn-arrow { transition: transform 0.25s; color: #c9a84c; }

        /* More Details button */
        .act-details-btn {
          font-family: 'Jost', sans-serif; font-size: 0.68rem; font-weight: 500;
          letter-spacing: 0.14em; text-transform: uppercase;
          background: transparent; color: #0d2415;
          border: 1px solid rgba(13,36,21,0.2);
          padding: 10px 16px;
          cursor: pointer; display: inline-flex; align-items: center; gap: 7px;
          transition: all 0.25s;
        }
        .act-details-btn:hover {
          background: rgba(13,36,21,0.04);
          border-color: rgba(13,36,21,0.4);
        }
        .act-details-btn:hover .details-arrow { transform: translateX(2px); }
        .details-arrow { transition: transform 0.25s; color: #c9a84c; }

        .section-label {
          font-family: 'Jost', sans-serif; font-size: 0.68rem; font-weight: 500;
          letter-spacing: 0.22em; text-transform: uppercase; color: #c9a84c;
        }

        .section-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.2rem, 4vw, 3.2rem); font-weight: 300;
          color: #0d2415; line-height: 1.12;
        }

        .promo-banner {
          background: linear-gradient(135deg, #0d2415 0%, #1a3c2e 50%, #0d2415 100%);
          position: relative; overflow: hidden;
        }
        .promo-banner::before {
          content: ''; position: absolute; inset: 0;
          background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9a84c' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
        }

        .promo-wa-btn {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'Jost', sans-serif; font-size: 0.72rem; font-weight: 600;
          letter-spacing: 0.15em; text-transform: uppercase;
          background: #25d366; color: #fff; border: none; padding: 13px 28px;
          cursor: pointer; clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);
          transition: all 0.3s; text-decoration: none;
        }
        .promo-wa-btn:hover { background: #1ebe5a; box-shadow: 0 8px 24px rgba(37,211,102,0.35); transform: translateY(-1px); }

        .promo-book-btn {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'Jost', sans-serif; font-size: 0.72rem; font-weight: 600;
          letter-spacing: 0.15em; text-transform: uppercase;
          background: transparent; color: #fff; border: 1px solid rgba(255,255,255,0.3);
          padding: 13px 28px; cursor: pointer;
          clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);
          transition: all 0.3s; text-decoration: none;
        }
        .promo-book-btn:hover { background: rgba(255,255,255,0.08); border-color: rgba(255,255,255,0.6); transform: translateY(-1px); }

        .divider-line {
          height: 1px;
          background: linear-gradient(to right, transparent, #c9a84c, transparent);
          width: 60px; margin: 0 auto;
        }
      `}</style>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>

        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <p className="section-label" style={{ marginBottom: '14px' }}>What We Offer</p>
          <h2 className="section-title" style={{ marginBottom: '16px' }}>
            Six Ways to
            <em style={{ fontStyle: 'italic', color: '#c9a84c' }}> Experience</em>
            <br />Paravur Backwaters
          </h2>
          <div className="divider-line" style={{ marginBottom: '20px' }} />
          <p style={{
            fontFamily: "'Jost', sans-serif", fontSize: '0.9rem', fontWeight: 300,
            color: '#666', maxWidth: '480px', margin: '0 auto', lineHeight: 1.7,
          }}>
            Premium eco-experiences on Paravur Lake —<br />
            group discounts & homestay packages available
          </p>
        </div>

        {/* Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '24px',
          marginBottom: '56px',
        }}>
          {activities.map((activity) => (
            <div key={activity.id} className="act-card">
              {/* Image */}
              <div style={{ position: 'relative', height: '210px', overflow: 'hidden', background: '#e0ddd6' }}>
                <Image
                  src={activity.image}
                  alt={activity.name}
                  fill
                  className="act-img"
                  style={{ objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 60%)',
                }} />
                <div className="act-tag" style={{ background: activity.tagColor }}>{activity.tag}</div>
                <div style={{
                  position: 'absolute', bottom: 14, left: 14, right: 14,
                  display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', zIndex: 2,
                }}>
                  <span style={{ fontSize: '1.6rem' }}>{activity.icon}</span>
                  <div style={{
                    background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(8px)',
                    padding: '4px 12px', borderRadius: '2px',
                  }}>
                    <span className="act-price" style={{ color: '#e8d49a', fontSize: '1.2rem' }}>{activity.price}</span>
                    <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.65rem', fontFamily: "'Jost', sans-serif", marginLeft: 3 }}>/person</span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '20px 20px 20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                  <h3 className="act-name">{activity.name}</h3>
                  <span className="act-duration">
                    <Clock size={11} />
                    {activity.duration}
                  </span>
                </div>

                <p className="act-desc" style={{ marginBottom: '20px' }}>{activity.description}</p>

                {/* ── Button Row: Book Now + More Details ── */}
                <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
                  <button className="act-book-btn" onClick={() => bookOnWhatsApp(activity.name)}>
                    Book Now
                    <ArrowRight size={13} className="book-btn-arrow" />
                  </button>

                  <button
                    className="act-details-btn"
                    onClick={() => setSelectedActivity(activity)}
                  >
                    More Details
                    <ArrowRight size={12} className="details-arrow" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Promo Banner */}
        <div className="promo-banner" style={{ padding: '56px 40px', textAlign: 'center' }}>
          <div style={{ position: 'absolute', top: 20, left: 20, width: 32, height: 32, borderTop: '1px solid rgba(201,168,76,0.4)', borderLeft: '1px solid rgba(201,168,76,0.4)' }} />
          <div style={{ position: 'absolute', bottom: 20, right: 20, width: 32, height: 32, borderBottom: '1px solid rgba(201,168,76,0.4)', borderRight: '1px solid rgba(201,168,76,0.4)' }} />

          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.25)',
            padding: '6px 16px', marginBottom: '20px',
          }}>
            <Users size={13} color="#c9a84c" />
            <span style={{
              fontFamily: "'Jost', sans-serif", fontSize: '0.65rem', fontWeight: 500,
              letterSpacing: '0.18em', textTransform: 'uppercase', color: '#c9a84c',
            }}>Groups & Bulk Bookings</span>
          </div>

          <h3 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 300,
            color: '#fff', marginBottom: '12px', lineHeight: 1.2,
          }}>
            School Trips, Family Groups &{' '}
            <em style={{ fontStyle: 'italic', color: '#e8d49a' }}>Corporate Outings</em>
          </h3>

          <p style={{
            fontFamily: "'Jost', sans-serif", fontSize: '0.85rem', fontWeight: 300,
            color: 'rgba(255,255,255,0.65)', marginBottom: '32px', lineHeight: 1.7,
          }}>
            Special discounts for groups of 10+ · Homestay arrangements on request<br />
            Call or WhatsApp to get a custom quote for your group
          </p>

          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://wa.me/919744201662" target="_blank" rel="noopener noreferrer" className="promo-wa-btn">
              <MessageCircle size={15} />
              WhatsApp Us
            </a>
            <button className="promo-book-btn" onClick={scrollToContact}>
              <Zap size={14} />
              Get a Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}