import React, { useState, useEffect, useRef } from "react";
import "./Contact.css";

import founder1Image from "../../assets/images/h25.jpeg";
import founder2Image from "../../assets/images/h26.jpeg";

const fallbackImage1 =
  "https://images.unsplash.com/photo-1472099645785-5658abf4e?w=600&h=600&fit=crop";

const fallbackImage2 =
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop";

const Contact = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello 👋 Welcome to MJ & Roberts Consulting. Ask me anything about our services, pricing, cloud, AI, ERP, CRM, DevOps, or digital transformation.",
      isBot: true,
      timestamp: new Date().toLocaleTimeString(),
    },
  ]);

  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [imgErrors, setImgErrors] = useState({});

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const companyInfo = {
    services: [
      "IT Consulting",
      "Software Engineering",
      "Cloud Solutions",
      "Managed IT Services",
      "DevOps Engineering",
      "AI & Automation",
    ],

    contact: {
      email: "info@mjroberts.com",
      phone: "+254 723 156066",
    },
  };

  const getBotResponse = (message) => {
    const msg = message.toLowerCase();

    if (msg.includes("service")) {
      return `We offer:\n${companyInfo.services
        .map((item) => `• ${item}`)
        .join("\n")}`;
    }

    if (msg.includes("price") || msg.includes("cost")) {
      return "Pricing depends on project requirements. Contact us for a custom quote.";
    }

    if (msg.includes("contact")) {
      return `📧 ${companyInfo.contact.email}\n📞 ${companyInfo.contact.phone}`;
    }

    if (msg.includes("cloud")) {
      return "We provide AWS, Azure, and Google Cloud migration and management solutions.";
    }

    return "Thanks for your message. Ask me about services, pricing, AI, CRM, ERP, cloud, DevOps, or digital transformation.";
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: inputMessage,
      isBot: false,
      timestamp: new Date().toLocaleTimeString(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    setTimeout(() => {
      const botMessage = {
        id: Date.now() + 1,
        text: getBotResponse(inputMessage),
        isBot: true,
        timestamp: new Date().toLocaleTimeString(),
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleImageError = (id) => {
    setImgErrors((prev) => ({
      ...prev,
      [id]: true,
    }));
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const owners = [
    {
      id: 1,
      name: "Mohamed Jeylani Sayed",
      title: "Co-Founder & CEO",
      email: "info@mjroberts.com",
      phone: "+254723156066",
      whatsapp: "254723156066",
      avatar: imgErrors[1] ? fallbackImage1 : founder1Image,
      bio: "15+ years of enterprise technology and digital transformation leadership.",
      expertise: [
        "Leadership",
        "Digital Transformation",
        "Business Strategy",
      ],
    },

    {
      id: 2,
      name: "Roberts Vildon Elisha",
      title: "Co-Founder & CTO",
      email: "info@mjroberts.com",
      phone: "+254723156066",
      whatsapp: "254723156066",
      avatar: imgErrors[2] ? fallbackImage2 : founder2Image,
      bio: "Expert in cloud architecture, AI systems, and scalable infrastructure.",
      expertise: ["Cloud", "AI/ML", "DevOps"],
    },
  ];

  return (
    <div className="contact-page-wrapper">
      {/* HERO */}
      <div className="contact-hero">
        <div className="contact-hero-content">
          <h1>MJ & Roberts Consulting</h1>
          <p>Your trusted digital transformation partner.</p>
        </div>
      </div>

      <div className="contact-container">
        {/* CHATBOT */}
        <div className="chatbot-card">
          <div className="chatbot-header">
            <div>
              <h3>🤖 AI Assistant</h3>
              <p>Ask anything about our company</p>
            </div>

            <span className="chat-status">Online</span>
          </div>

          {/* MESSAGES */}
          <div className="chatbot-messages">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`chat-message ${msg.isBot ? "bot" : "user"}`}
              >
                <div className="message-bubble">
                  <div className="message-text">{msg.text}</div>

                  <div className="message-time">{msg.timestamp}</div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="chat-message bot">
                <div className="message-bubble">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef}></div>
          </div>

          {/* INPUT */}
          <div className="chatbot-input-area">
            <input
              ref={inputRef}
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about services, pricing, AI, cloud..."
              className="chat-input-field"
            />

            <button
              onClick={handleSendMessage}
              className="chat-send-btn"
            >
              Send
            </button>
          </div>

          {/* SUGGESTIONS */}
          <div className="chat-suggestions">
            <button
              onClick={() =>
                setInputMessage("What services do you offer?")
              }
            >
              Services
            </button>

            <button
              onClick={() =>
                setInputMessage("Tell me about cloud solutions")
              }
            >
              Cloud
            </button>

            <button
              onClick={() =>
                setInputMessage("How much does it cost?")
              }
            >
              Pricing
            </button>

            <button
              onClick={() =>
                setInputMessage("Contact information")
              }
            >
              Contact
            </button>
          </div>
        </div>

        {/* TEAM */}
        <div className="team-section">
          <div className="team-header">
            <h2>Meet Our Founders</h2>

            <p>The leadership behind MJ & Roberts Consulting</p>
          </div>

          <div className="team-grid">
            {owners.map((owner) => (
              <div key={owner.id} className="team-card">
                <div className="team-avatar">
                  <img
                    src={owner.avatar}
                    alt={owner.name}
                    onError={() => handleImageError(owner.id)}
                  />
                </div>

                <div className="team-info">
                  <h3>{owner.name}</h3>

                  <span className="team-badge">
                    {owner.title}
                  </span>

                  <p className="team-bio">{owner.bio}</p>

                  <div className="team-expertise">
                    {owner.expertise.map((item, index) => (
                      <span
                        key={index}
                        className="expertise-badge"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="team-contact-info">
                    <div className="contact-row">
                      📧{" "}
                      <a href={`mailto:${owner.email}`}>
                        {owner.email}
                      </a>
                    </div>

                    <div className="contact-row">
                      💬{" "}
                      <a
                        href={`https://wa.me/${owner.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {owner.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* STATS */}
        <div className="stats-grid">
          <div className="stat-card">
            <h3>300+</h3>
            <p>Clients</p>
          </div>

          <div className="stat-card">
            <h3>500+</h3>
            <p>Projects</p>
          </div>

          <div className="stat-card">
            <h3>15+</h3>
            <p>Countries</p>
          </div>

          <div className="stat-card">
            <h3>98%</h3>
            <p>Satisfaction</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;