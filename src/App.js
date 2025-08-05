import React, { useEffect, useRef } from "react";
import "./App.css";

function useScrollAnimation() {
  const ref = useRef();
  useEffect(() => {
    const el = ref.current;
    const onScroll = ([entry]) => {
      if (entry.isIntersecting) el.classList.add("visible");
    };
    const observer = new window.IntersectionObserver(onScroll, {
      threshold: 0.2,
    });
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

const features = [
  {
    icon: "✅",
    title: "Easy Tracking",
    desc: "Stay on top of every task with simple lists.",
  },
  {
    icon: "🔔",
    title: "Smart Reminders",
    desc: "Never miss a deadline with automated reminders.",
  },
  {
    icon: "📊",
    title: "Progress Insights",
    desc: "Visualize your workflow and productivity.",
  },
];

const reviews = [
  {
    name: "Sarah",
    text: "TaskFlow totally changed how I organize my day. Love it!",
    emoji: "😀",
  },
  {
    name: "Ali",
    text: "The reminders keep me on track. Highly recommended!",
    emoji: "👍",
  },
  {
    name: "Maria",
    text: "Easy, clean, and super helpful for team tasks.",
    emoji: "💡",
  },
];

const pricing = [
  {
    plan: "Free",
    price: "$0/mo",
    features: ["Basic Tasks", "Single User", "Basic Reminders"],
  },
  {
    plan: "Pro",
    price: "$5/mo",
    features: ["Unlimited Tasks", "Advanced Reminders", "Stats"],
  },
  {
    plan: "Team",
    price: "$12/mo",
    features: ["All Pro Features", "Team Collaboration", "Priority Support"],
  },
];

function App() {
  const heroRef = useScrollAnimation();
  const featuresRef = useScrollAnimation();
  const reviewsRef = useScrollAnimation();
  const pricingRef = useScrollAnimation();
  const footerRef = useScrollAnimation();

  return (
    <div className="main-container">
      {/* Hero */}
      <section className="hero section" ref={heroRef}>
        <h1>TaskFlow</h1>
        <p>Organize your tasks, boost your productivity.</p>
        <button>Get Started</button>
      </section>

      {/* Features */}
      <section className="features section" ref={featuresRef}>
        <h2>Features</h2>
        <div className="features-list">
          {features.map((f) => (
            <div className="feature-card" key={f.title}>
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="reviews section" ref={reviewsRef}>
        <h2>What Users Say</h2>
        <div className="review-list">
          {reviews.map((r) => (
            <div className="review-card" key={r.name}>
              <div className="review-emoji">{r.emoji}</div>
              <p>"{r.text}"</p>
              <span className="review-name">- {r.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="pricing section" ref={pricingRef}>
        <h2>Pricing</h2>
        <div className="pricing-list">
          {pricing.map((p) => (
            <div className="pricing-card" key={p.plan}>
              <h3>{p.plan}</h3>
              <div className="price">{p.price}</div>
              <ul>
                {p.features.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <button>Choose</button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer section" ref={footerRef}>
        <div>Contact: <a href="mailto:info@taskflow.com">info@taskflow.com</a></div>
        <div className="socials">
          <a href="#"><span role="img" aria-label="twitter">🐦</span></a>
          <a href="#"><span role="img" aria-label="facebook">📘</span></a>
          <a href="#"><span role="img" aria-label="instagram">📸</span></a>
        </div>
        <p>&copy; 2025 TaskFlow. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
