import React, { createContext, useState, useEffect, useContext } from 'react';

const UserContext = createContext();

// Initial data for the default Alexander Vance user
const INITIAL_ALEXANDER = {
  name: 'Alexander Vance',
  email: 'vance.alex@luxury.com',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
  location: 'Lagos, Nigeria',
  joined: '2024',
  projects: [
    {
      id: 1,
      service: '3D Wall Panels',
      status: 'On-site Installation',
      progress: 75,
      date: 'April 24, 2026',
    },
    {
      id: 2,
      service: 'Window Blinds',
      status: 'Measurements Confirmed',
      progress: 30,
      date: 'May 02, 2026',
    }
  ],
  orders: [
    { id: '#SJ-8801', item: 'The Obsidian Silk Rug', date: 'Mar 12', status: 'Delivered', total: '₦8,202' },
    { id: '#SJ-7729', item: 'Fluted Wood Set', date: 'Feb 28', status: 'Confirmed', total: '₦4,250' },
  ]
};

export const UserProvider = ({ children }) => {
  // Mock Database in localStorage
  const [db, setDb] = useState(() => {
    const savedDb = localStorage.getItem('sj_users_db');
    if (savedDb) return JSON.parse(savedDb);
    
    // Seed database with Alexander
    const initialDb = { [INITIAL_ALEXANDER.email]: INITIAL_ALEXANDER };
    localStorage.setItem('sj_users_db', JSON.stringify(initialDb));
    return initialDb;
  });

  const [user, setUser] = useState(() => {
    const activeEmail = localStorage.getItem('sj_active_user_email');
    if (activeEmail && db[activeEmail]) {
      return db[activeEmail];
    }
    return INITIAL_ALEXANDER;
  });

  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('sj_auth') === 'true';
  });

  // Sync user changes (like avatar) to the DB
  useEffect(() => {
    if (user && user.email) {
      const updatedDb = { ...db, [user.email]: user };
      setDb(updatedDb);
      localStorage.setItem('sj_users_db', JSON.stringify(updatedDb));
      localStorage.setItem('sj_active_user_email', user.email);
    }
  }, [user]);

  useEffect(() => {
    localStorage.setItem('sj_auth', isAuthenticated);
  }, [isAuthenticated]);

  const login = (email) => {
    const lowercaseEmail = email.toLowerCase();
    const existingUser = db[lowercaseEmail];
    
    if (existingUser) {
      setUser(existingUser);
      setIsAuthenticated(true);
      return true;
    }
    return false; // User not found
  };

  const signup = (userData) => {
    const lowercaseEmail = userData.email.toLowerCase();
    const newUser = {
      ...userData,
      email: lowercaseEmail,
      avatar: 'https://ui-avatars.com/api/?name=' + encodeURIComponent(userData.name) + '&background=0D3B2E&color=C4A052',
      location: 'New Member',
      joined: new Date().getFullYear().toString(),
      projects: [
        {
          id: Date.now(),
          service: 'Space Assessment',
          status: 'Pending Evaluation',
          progress: 5,
          date: 'Awaiting Inspection',
        }
      ],
      orders: []
    };

    const updatedDb = { ...db, [lowercaseEmail]: newUser };
    setDb(updatedDb);
    localStorage.setItem('sj_users_db', JSON.stringify(updatedDb));
    
    setUser(newUser);
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('sj_active_user_email');
    // We don't reset 'user' state purely so the last login email persists for UX if needed,
    // but the session is cleared by isAuthenticated.
  };

  const updateAvatar = (newAvatar) => {
    setUser(prev => ({ ...prev, avatar: newAvatar }));
  };

  const updateProfile = (updatedData) => {
    setUser(prev => ({ ...prev, ...updatedData }));
  };

  return (
    <UserContext.Provider value={{ user, isAuthenticated, login, signup, logout, updateAvatar, updateProfile }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
