import { Brain, Rocket, Satellite, Camera, Globe2, ChevronRight, Microscope, Shield } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

function Home(){
    return(
        <div className="min-h-screen bg-black text-white scroll-smooth overflow-x-hidden">
        <Navbar />    
        {/* Home Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
              alt="Space Background"
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30" />
          </div>
          <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Revolutionizing Space Imaging
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Advanced neuromorphic-based hybrid imaging systems for next-generation Earth & Space applications
            </p>
            <p className="text-base md:text-base text-[rgb(148,148,148)] mb-4">website under development</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all flex items-center gap-2 mx-auto">
              Explore Our Technology <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </section>

        {/* Technology Section */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900" id='technology'>
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">Revolutionary Technology</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Brain className="w-12 h-12 text-blue-400" />,
                  title: "Neuromorphic Processing",
                  description: "Bio-inspired computing architecture for real-time image processing"
                },
                {
                  icon: <Camera className="w-12 h-12 text-purple-400" />,
                  title: "Hybrid Imaging",
                  description: "Multi-spectral fusion technology for unprecedented clarity"
                },
                {
                  icon: <Satellite className="w-12 h-12 text-cyan-400" />,
                  title: "Space-Grade Systems",
                  description: "Radiation-hardened hardware for extreme environments"
                }
              ].map((feature, index) => (
                <div key={index} className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm hover:transform hover:-translate-y-1 transition-all">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black" id='application'>
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">Applications</h2>
            <div className="grid md:grid-cols-2 gap-12">
              {[
                {
                  icon: <Globe2 className="w-8 h-8" />,
                  title: "Earth Observation",
                  description: "High-resolution imaging for climate monitoring, agriculture, and urban planning"
                },
                {
                  icon: <Rocket className="w-8 h-8" />,
                  title: "Space Exploration",
                  description: "Advanced imaging systems for deep space missions and planetary research"
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: "Defense & Security",
                  description: "Real-time surveillance and reconnaissance capabilities"
                },
                {
                  icon: <Microscope className="w-8 h-8" />,
                  title: "Scientific Research",
                  description: "Cutting-edge tools for astronomical and atmospheric studies"
                }
              ].map((app, index) => (
                <div key={index} className="flex gap-6 items-start p-6 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-all">
                  <div className="p-3 bg-blue-600/20 rounded-lg">
                    {app.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{app.title}</h3>
                    <p className="text-gray-400">{app.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 relative" id='about'>
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80"
              alt="Space"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Space Imaging?</h2>
            <p className="text-xl text-gray-400 mb-8">
              Join us in shaping the future of space technology with our revolutionary imaging solutions.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all">
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=questions@zoove.space" target="_blank">
              Contact Our Team
              </a>
            </button>
          </div>
        </section>
        <Footer />
      </div>
    )
}

export default Home