import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Admin.css';

function AdminDashboard() {
  const [stats, setStats] = useState({});
  const [applications, setApplications] = useState([]);
  const [activeTab, setActiveTab] = useState('applications');
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const token = localStorage.getItem('adminToken');
    try {
      const [statsRes, appsRes] = await Promise.all([
        axios.get('/api/admin/stats', { headers: { Authorization: `Bearer ${token}` } }),
        axios.get('/api/applications', { headers: { Authorization: `Bearer ${token}` } })
      ]);
      setStats(statsRes.data);
      setApplications(appsRes.data);
    } catch (error) {
      if (error.response?.status === 401) {
        navigate('/admin');
      }
    }
  };

  const updateStatus = async (id, status) => {
    const token = localStorage.getItem('adminToken');
    try {
      await axios.put(`/api/applications/${id}/status`, { status }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchData();
    } catch (error) {
      alert('Error updating status');
    }
  };

  const logout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin');
  };

  return (
    <div className="admin-dashboard">
      <aside className="sidebar">
        <h3>📊 Admin Panel</h3>
        <nav>
          <button 
            className={activeTab === 'applications' ? 'active' : ''}
            onClick={() => setActiveTab('applications')}
          >
            Applications
          </button>
          <button 
            className={activeTab === 'news' ? 'active' : ''}
            onClick={() => setActiveTab('news')}
          >
            News & Events
          </button>
          <button onClick={logout} className="logout">Logout</button>
        </nav>
      </aside>

      <main className="main-content">
        {activeTab === 'applications' && (
          <div className="applications-tab">
            <h2>Applications</h2>
            <div className="stats-cards">
              <div className="stat-card">
                <h4>{stats.totalApplications || 0}</h4>
                <p>Total Applications</p>
              </div>
              <div className="stat-card pending">
                <h4>{stats.pendingApplications || 0}</h4>
                <p>Pending</p>
              </div>
              <div className="stat-card accepted">
                <h4>{stats.acceptedApplications || 0}</h4>
                <p>Accepted</p>
              </div>
            </div>

            <div className="applications-list">
              {applications.map(app => (
                <div key={app.id} className={`application-card ${app.status}`}>
                  <div className="app-header">
                    <h4>{app.first_name} {app.last_name}</h4>
                    <span className={`status ${app.status}`}>{app.status}</span>
                  </div>
                  <div className="app-details">
                    <p><strong>Email:</strong> {app.email}</p>
                    <p><strong>Phone:</strong> {app.phone}</p>
                    <p><strong>Parent Phone:</strong> {app.parent_phone}</p>
                    <p><strong>Program:</strong> {app.program}</p>
                    <p><strong>Level:</strong> {app.level}</p>
                    {app.result_slip && (
                      <p>
                        <strong>Result Slip:</strong>{' '}
                        <a href={`/uploads/${app.result_slip}`} target="_blank" rel="noopener noreferrer">
                          View Document
                        </a>
                      </p>
                    )}
                  </div>
                  <div className="app-actions">
                    <button onClick={() => updateStatus(app.id, 'accepted')} className="accept">
                      Accept
                    </button>
                    <button onClick={() => updateStatus(app.id, 'rejected')} className="reject">
                      Reject
                    </button>
                    <button onClick={() => updateStatus(app.id, 'pending')} className="pending">
                      Pending
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'news' && <NewsManager />}
      </main>
    </div>
  );
}

// News Manager Component
function NewsManager() {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    excerpt: '',
    category: 'Events'
  });
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('adminToken');
    
    const data = new FormData();
    Object.keys(formData).forEach(key => data.append(key, formData[key]));
    if (image) data.append('image', image);

    try {
      await axios.post('/api/admin/news', data, {
        headers: { 
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      });
      setMessage('✅ News posted successfully!');
      setFormData({ title: '', content: '', excerpt: '', category: 'Events' });
      setImage(null);
    } catch (error) {
      setMessage('❌ Error posting news');
    }
  };

  return (
    <div className="news-manager">
      <h2>Post News / Event</h2>
      {message && <div className="message">{message}</div>}
      
      <form onSubmit={handleSubmit} className="news-form">
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({...formData, title: e.target.value})}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Excerpt (Short Description)</label>
          <input
            type="text"
            value={formData.excerpt}
            onChange={(e) => setFormData({...formData, excerpt: e.target.value})}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Category</label>
          <select
            value={formData.category}
            onChange={(e) => setFormData({...formData, category: e.target.value})}
          >
            <option>Events</option>
            <option>News</option>
            <option>Announcements</option>
          </select>
        </div>
        
        <div className="form-group">
          <label>Content</label>
          <textarea
            rows="5"
            value={formData.content}
            onChange={(e) => setFormData({...formData, content: e.target.value})}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        
        <button type="submit">Post News</button>
      </form>
    </div>
  );
}

export default AdminDashboard;