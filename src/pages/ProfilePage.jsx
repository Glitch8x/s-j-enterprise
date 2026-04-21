import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Clock, Package, ShieldCheck, MapPin, ChevronRight } from 'lucide-react';
import { useUser } from '../context/UserContext';
import { useRef, useState } from 'react';

const ProfilePage = () => {
  const { user, updateAvatar } = useUser();
  const fileInputRef = useRef(null);

  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        updateAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const activeProjects = user.projects || [];
  const orderHistory = user.orders || [];

  return (
    <div className="pt-32 pb-24 bg-secondary min-h-screen">
      <div className="container">
        
        {/* Header Profile Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 md:p-12 shadow-2xl rounded-sm mb-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full -translate-y-32 translate-x-32" />
          <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
            <div className="relative group cursor-pointer" onClick={handleAvatarClick}>
              <img src={user.avatar} alt={user.name} className="w-32 h-32 rounded-full object-cover border-4 border-accent shadow-xl group-hover:opacity-75 transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                 <Package size={24} className="text-white" />
              </div>
              <button className="absolute bottom-0 right-0 p-2 bg-primary text-white rounded-full hover:bg-accent hover:text-primary transition-colors border-2 border-white">
                <Settings size={16} />
              </button>
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleFileChange} 
                className="hidden" 
                accept="image/*" 
              />
            </div>
            <div className="text-center md:text-left flex-1">
              <h1 className="text-4xl font-serif text-primary mb-2">{user.name}</h1>
              <p className="text-xs font-black tracking-widest text-accent mb-4 uppercase">{user.email}</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-6 text-[10px] font-black uppercase tracking-widest text-primary/40">
                <span className="flex items-center gap-2"><MapPin size={12} className="text-accent" /> {user.location}</span>
                <span className="flex items-center gap-2"><ShieldCheck size={12} className="text-accent" /> Platinum Member</span>
                <span className="flex items-center gap-2"><Clock size={12} className="text-accent" /> Joined {user.joined}</span>
              </div>
            </div>
            <div className="flex gap-4">
              <button className="px-8 py-4 bg-primary text-white text-xs font-black tracking-widest hover:bg-primary-dark transition-all uppercase">
                New Project Inquiry
              </button>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left: Active Projects & Saved */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Active Projects */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-serif text-primary mb-8 flex items-center gap-4">
                Active Space Projects
                <span className="text-xs bg-accent text-primary font-black px-3 py-1 rounded-full">{activeProjects.length}</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {activeProjects.map(project => (
                  <div key={project.id} className="bg-white p-8 border border-gray-100 shadow-xl rounded-sm hover:-translate-y-2 transition-transform duration-500 group">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h4 className="text-lg font-serif text-primary mb-1">{project.service}</h4>
                        <p className="text-xs font-black tracking-widest text-accent-orange uppercase">{project.status}</p>
                      </div>
                      <Package className="text-primary/20 group-hover:text-accent transition-colors" size={24} />
                    </div>
                    <div className="w-full bg-secondary h-1.5 mb-2 overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${project.progress}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-primary"
                      />
                    </div>
                    <div className="flex justify-between text-[10px] font-black text-primary/40 uppercase mb-6">
                      <span>Progress</span>
                      <span>{project.progress}%</span>
                    </div>
                    <p className="text-xs text-primary/60 italic border-t border-gray-50 pt-4 mb-6">
                      Estimated Completion: {project.date}
                    </p>
                    <button className="w-full py-3 border border-primary/10 text-[10px] font-black tracking-widest uppercase hover:bg-primary hover:text-white transition-all">
                      View Details
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Verification of Space Requirements */}
            <motion.div 
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               className="p-8 border-2 border-dashed border-primary/10 rounded-sm flex flex-col items-center justify-center text-center space-y-4"
            >
               <Package size={40} className="text-primary/20" />
               <div className="max-w-sm">
                  <h4 className="text-lg font-serif text-primary mb-2">Space Evaluation Pending</h4>
                  <p className="text-xs text-primary/50 italic leading-relaxed">
                     Detailed metrics for your upcoming projects will appear here once the site inspection is complete.
                  </p>
               </div>
            </motion.div>

          </div>

          {/* Right: Order History & Support */}
          <div className="space-y-12">
            

            {/* Recent Orders */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white p-8 border border-gray-100 shadow-xl rounded-sm"
            >
              <h3 className="text-xl font-serif text-primary mb-8 border-b border-gray-50 pb-6">Recent Confirmations</h3>
              <div className="space-y-8">
                {orderHistory.map(order => (
                  <div key={order.id} className="flex justify-between items-center group pb-8 border-b border-gray-50 last:border-0 last:pb-0">
                    <div>
                      <p className="text-[10px] font-black text-primary/40 mb-1">{order.id}</p>
                      <h5 className="text-sm font-bold text-primary mb-1 underline decoration-accent/30">{order.item}</h5>
                      <span className="text-[10px] font-medium text-white bg-primary/20 px-2 py-0.5 rounded-full">{order.status}</span>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-black text-primary">{order.total}</p>
                      <p className="text-[10px] font-medium text-primary/30">{order.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Support CTA */}
            <div className="bg-accent-orange/5 p-8 border-l-4 border-accent-orange italic text-sm text-primary/70 leading-relaxed rounded-r-sm">
              "Need immediate assistance with your installation? Our luxury concierge is available 24/7."
              <button className="text-[10px] font-black tracking-widest uppercase mt-6 text-accent-orange block border-b-2 border-accent-orange/20 pb-1 hover:border-accent-orange transition-all">
                REQUEST CALL BACK
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
