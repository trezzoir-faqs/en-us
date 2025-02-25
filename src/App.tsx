import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Cpu, Settings, HelpCircle, AlertTriangle, ChevronDown, Menu, Lock, Key, Rocket, PenTool as Tool, CheckCircle } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Header */}
      <header className="fixed w-full top-0 z-50 glass-effect">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold gradient-text"
            >
              Trėzor.io/start®
            </motion.div>
            
            <div className="hidden md:flex space-x-8">
              <NavLink href="#features">Features</NavLink>
              <NavLink href="#install">Install</NavLink>
              <NavLink href="#security">Security</NavLink>
              <NavLink href="#faq">FAQ</NavLink>
            </div>

            <div className="flex space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cyber-button rounded-full text-white"
              >
                Get Started
              </motion.button>
              
              <button 
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden mt-4 space-y-4 pb-4"
            >
              <MobileNavLink href="#features">Features</MobileNavLink>
              <MobileNavLink href="#install">Install</MobileNavLink>
              <MobileNavLink href="#security">Security</MobileNavLink>
              <MobileNavLink href="#faq">FAQ</MobileNavLink>
            </motion.div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="pt-32 pb-20 px-4 animated-bg"
      >
        <div className="container mx-auto">
          <motion.h1
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6 gradient-text text-center"
          >
            Secure Your Cryptocurrency with Trezor Wallet
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-[var(--text)] mb-8 max-w-4xl mx-auto text-center"
          >
            In the fast-evolving world of cryptocurrency, security is paramount. With increasing cyber threats and hacking attempts, securing your digital assets has never been more important. <strong>Trezor</strong> is one of the most trusted hardware wallets available today.
          </motion.p>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold mb-12 gradient-text text-center"
          >
            Why Choose a Trezor Hardware Wallet?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Lock className="w-8 h-8" />}
              title="Offline Security"
              description="Private keys never leave your device, making it immune to online threats."
            />
            <FeatureCard
              icon={<Settings className="w-8 h-8" />}
              title="User-Friendly Interface"
              description="Simple setup process through Trezor Suite."
            />
            <FeatureCard
              icon={<Cpu className="w-8 h-8" />}
              title="Multi-Currency Support"
              description="Supports over 1,000 cryptocurrencies including Bitcoin, Ethereum, and more."
            />
          </div>
        </div>
      </section>

      {/* Setup Guide */}
      <section className="py-20 px-4 glass-effect">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold mb-12 gradient-text text-center"
          >
            Getting Started with Your Trezor Wallet
          </motion.h2>
          <div className="space-y-8">
            <SetupStep
              number={1}
              title="Unboxing & Connecting"
              content="Verify the security seal and connect your device using the provided USB cable."
            />
            <SetupStep
              number={2}
              title="Installing Firmware"
              content="Download and install the latest firmware from Trėzor.io/Start."
            />
            <SetupStep
              number={3}
              title="Creating Your Wallet"
              content="Set up your new wallet and securely back up your recovery seed."
            />
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold mb-12 gradient-text text-center"
          >
            Best Security Practices
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SecurityCard
              icon={<Shield />}
              title="Regular Updates"
              description="Keep your device secure with the latest firmware updates."
            />
            <SecurityCard
              icon={<Key />}
              title="Recovery Seed Protection"
              description="Store your recovery seed offline in a secure location."
            />
            <SecurityCard
              icon={<Lock />}
              title="Strong PIN"
              description="Use a unique, strong PIN and enable passphrase protection."
            />
            <SecurityCard
              icon={<AlertTriangle />}
              title="Phishing Protection"
              description="Always verify website URLs before entering sensitive information."
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 glass-effect">
        <div className="container mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold mb-8 gradient-text"
          >
            Ready to Secure Your Crypto?
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex justify-center"
          >
            <a
              href="https://trezor.io/start"
              className="cyber-button rounded-full text-white text-lg inline-flex items-center gap-2"
            >
              <Rocket className="w-6 h-6" />
              Get Started Today
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--background)] py-12 px-4 border-t border-[var(--primary)] border-opacity-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold gradient-text mb-4">Trėzor.io/start®</h3>
              <p className="text-[var(--text)] opacity-80">Your trusted partner in cryptocurrency security.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="nav-link">Features</a></li>
                <li><a href="#install" className="nav-link">Installation</a></li>
                <li><a href="#security" className="nav-link">Security</a></li>
                <li><a href="#faq" className="nav-link">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="nav-link">Help Center</a></li>
                <li><a href="#" className="nav-link">Documentation</a></li>
                <li><a href="#" className="nav-link">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="nav-link">Privacy Policy</a></li>
                <li><a href="#" className="nav-link">Terms of Service</a></li>
                <li><a href="#" className="nav-link">Disclaimer</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-[var(--primary)] border-opacity-20 text-center text-[var(--text)] opacity-80">
            <p>© 2024 Trėzor.io/start®. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="nav-link"
  >
    {children}
  </a>
);

const MobileNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="block py-2 nav-link"
  >
    {children}
  </a>
);

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    className="p-6 rounded-xl neon-border"
  >
    <div className="feature-icon mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-[var(--text)] opacity-80">{description}</p>
  </motion.div>
);

const SetupStep = ({ number, title, content }: { number: number; title: string; content: string }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    className="flex items-start gap-6 p-6 rounded-xl highlight-box"
  >
    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--primary)] flex items-center justify-center text-xl font-bold">
      {number}
    </div>
    <div>
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-[var(--text)] opacity-80">{content}</p>
    </div>
  </motion.div>
);

const SecurityCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    className="p-6 rounded-xl security-card"
  >
    <div className="feature-icon mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-[var(--text)] opacity-80">{description}</p>
  </motion.div>
);

export default App;