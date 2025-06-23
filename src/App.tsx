import React from 'react';
import './App.css';

function App() {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo-section">
          <div className="logo-circle">R</div>
          <div className="logo-text">
            <span className="brand-main">Refill</span>
            <span className="brand-sub">Health</span>
          </div>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li className="active">Dashboard</li>
            <li>Calender</li>
            <li>Client</li>
            <li>Messages</li>
            <li>Notes</li>
            <li>Resources</li>
            <li>Settings</li>
            <li>Need Help</li>
          </ul>
        </nav>
        <div className="sidebar-user">
          <div className="user-avatar"></div>
          <div>
            <div className="user-name">Johnathon Doe</div>
            <div className="user-role">Back-office</div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="main-area">
        {/* Top Bar */}
        <header className="topbar">
          <input className="search-bar" placeholder="What are you looking for?" />
          <div className="topbar-actions">
            <span className="icon-bell" />
            <div className="topbar-user">
              <div className="user-avatar"></div>
              <div>
                <div className="user-name">Johnathon Doe</div>
                <div className="user-role">Therapist</div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Dashboard Content */}
        <main className="main-content">
          {/* Placeholders for dashboard sections */}
          <div className="dashboard-sections">
            <div className="section-left">
              {/* Sessions for Today, Welcome, Alert, Next Session, Upcoming Sessions */}
              <div className="sessions-for-today">
                <div className="sft-header-row">
                  <div>
                    <h2>Sessions for Today</h2>
                    <div className="sft-main-count">57</div>
                  </div>
                  <div className="sft-progress">
                    <div className="sft-progress-bar">
                      <div className="sft-progress-fill" style={{width: '65%'}}></div>
                    </div>
                    <span className="sft-progress-label">65% complete</span>
                  </div>
                  <div className="sft-today-label">Today</div>
                </div>
                <div className="sft-cards-row">
                  <div className="sft-card sft-card-green">
                    <div className="sft-card-title">No. of sessions</div>
                    <div className="sft-card-value">24</div>
                    <div className="sft-card-growth">+5.11%</div>
                  </div>
                  <div className="sft-card sft-card-blue">
                    <div className="sft-card-title">No. of sessions</div>
                    <div className="sft-card-value">24</div>
                    <div className="sft-card-growth">+5.11%</div>
                  </div>
                  <div className="sft-card sft-card-purple">
                    <div className="sft-card-title">No. of sessions</div>
                    <div className="sft-card-value">24</div>
                    <div className="sft-card-growth">+5.11%</div>
                  </div>
                </div>
              </div>
              <div className="welcome-message">
                <div className="welcome-row">
                  <span>
                    Welcome <b>291 Clients</b> with a personal warm message <span role="img" aria-label="smile">😊</span>
                  </span>
                  <button className="send-message-btn">Send message</button>
                </div>
                <div className="welcome-avatars-row">
                  <div className="avatar-list">
                    <div className="avatar avatar-1" title="Courtney Henry"></div>
                    <div className="avatar avatar-2" title="Courtney Henry"></div>
                    <div className="avatar avatar-3" title="Jenny Wilson"></div>
                    <div className="avatar avatar-4" title="Cameron Williamson"></div>
                  </div>
                  <button className="view-all-btn" title="View all">
                    <span className="arrow-right">→</span>
                  </button>
                </div>
              </div>
              <div className="alert-section">
                <span className="alert-icon">⚠️</span>
                <span className="alert-text">Two Patients Need <b>Imediate attention</b></span>
                <button className="alert-review-btn">Review</button>
              </div>
              <div className="next-session">
                <div className="ns-header">
                  <div className="ns-avatar" />
                  <div className="ns-info">
                    <div className="ns-name">Denzel White</div>
                    <div className="ns-type">Follow Up Session</div>
                  </div>
                  <div className="ns-status">
                    <span className="ns-status-badge">Starts in 1 hr</span>
                    <button className="ns-join-btn">Join Now</button>
                  </div>
                </div>
                <div className="ns-details">
                  <div className="ns-detail-row">
                    <span className="ns-detail-icon">📅</span>
                    <span>Mon, 11 June 2024</span>
                    <span className="ns-detail-time">11:00 AM - 12:00 PM</span>
                  </div>
                  <div className="ns-detail-row">
                    <span className="ns-detail-icon">📝</span>
                    <span>Client Assessment Summery</span>
                  </div>
                  <div className="ns-detail-row ns-detail-summary">
                    <span className="ns-detail-icon">💬</span>
                    <span>symptoms of <b>Anxiety</b> and <b>Burnout</b></span>
                  </div>
                  <div className="ns-detail-row ns-detail-summary">
                    <span className="ns-detail-icon">😴</span>
                    <span>Showing signs of sleep disturbance</span>
                  </div>
                  <div className="ns-detail-row ns-detail-report">
                    <span className="ns-detail-icon">📄</span>
                    <span>User report <span className="ns-report-size">2.4 MB</span></span>
                  </div>
                </div>
                <div className="ns-actions">
                  <button className="ns-action-btn">Review history</button>
                  <button className="ns-action-btn">Client Notes(3)</button>
                </div>
              </div>
              <div className="upcoming-sessions">
                <div className="us-header-row">
                  <span className="us-title">Upcoming Sessions</span>
                  <input className="us-search" placeholder="Search by names" />
                </div>
                <div className="us-table-wrapper">
                  <table className="us-table">
                    <thead>
                      <tr>
                        <th>Client ID</th>
                        <th>Name</th>
                        <th>Appointment Date</th>
                        <th>Time</th>
                        <th>Contact Number</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>#123</td>
                        <td><div className="us-avatar us-avatar-1"></div>Lorem Ipsum</td>
                        <td>14/06/2025</td>
                        <td>08:00 AM - 08:30AM</td>
                        <td>+91 0000000000</td>
                        <td><span className="us-status us-status-completed">Completed</span></td>
                      </tr>
                      <tr>
                        <td>#123</td>
                        <td><div className="us-avatar us-avatar-2"></div>Lorem Ipsum</td>
                        <td>14/06/2025</td>
                        <td>08:00 AM - 08:30AM</td>
                        <td>+91 0000000000</td>
                        <td><span className="us-status us-status-pending">Pending</span></td>
                      </tr>
                      <tr>
                        <td>#123</td>
                        <td><div className="us-avatar us-avatar-3"></div>Lorem Ipsum</td>
                        <td>14/06/2025</td>
                        <td>08:00 AM - 08:30AM</td>
                        <td>+91 0000000000</td>
                        <td><span className="us-status us-status-completed">Completed</span></td>
                      </tr>
                      <tr>
                        <td>#123</td>
                        <td><div className="us-avatar us-avatar-4"></div>Lorem Ipsum</td>
                        <td>14/06/2025</td>
                        <td>08:00 AM - 08:30AM</td>
                        <td>+91 0000000000</td>
                        <td><span className="us-status us-status-pending">Pending</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="us-pagination-row">
                  <span>Previous</span>
                  <span className="us-page us-page-active">1</span>
                  <span className="us-page">2</span>
                  <span className="us-page">3</span>
                  <span>Next</span>
                </div>
              </div>
            </div>
            <div className="section-right">
              {/* Calendar, To-Do List */}
              <div className="calendar-section">
                <div className="calendar-header">
                  <span className="calendar-title">Calender</span>
                  <div className="calendar-month-nav">
                    <span className="calendar-arrow">&#60;</span>
                    <span className="calendar-month">April 2024</span>
                    <span className="calendar-arrow">&#62;</span>
                  </div>
                </div>
                <table className="calendar-table">
                  <thead>
                    <tr>
                      <th>MON</th><th>TUE</th><th>WED</th><th>THU</th><th>FRI</th><th>SAT</th><th>SUN</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td></td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td></tr>
                    <tr><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td></tr>
                    <tr><td>14</td><td>15</td><td>16</td><td>17</td><td>18</td><td>19</td><td>20</td></tr>
                    <tr><td>21</td><td>22</td><td className="calendar-today">23</td><td>24</td><td>25</td><td>26</td><td>27</td></tr>
                    <tr><td>28</td><td>29</td><td>30</td><td></td><td></td><td></td><td></td></tr>
                  </tbody>
                </table>
                <div className="calendar-legend">
                  <span className="legend-item legend-booked">Booked</span>
                  <span className="legend-item legend-available">Available slot</span>
                  <span className="legend-item legend-holiday">Holiday</span>
                  <span className="legend-item legend-onleave">On leave</span>
                </div>
                <div className="calendar-events">
                  <div className="calendar-event-row">
                    <span className="calendar-event-title">Wed Apr 23,2024</span>
                  </div>
                  <div className="calendar-event-list">
                    <div className="calendar-event-item"><span>session with Olivia</span><span className="calendar-event-time">12:00 pm</span></div>
                    <div className="calendar-event-item"><span>slot available</span><span className="calendar-event-time">1:00 pm</span></div>
                    <div className="calendar-event-item"><span>session with Olivia</span><span className="calendar-event-time">12:00 pm</span></div>
                    <div className="calendar-event-more">2 more...</div>
                  </div>
                </div>
              </div>
              <div className="todo-list-section">
                <div className="todo-header-row">
                  <span className="todo-title">To-Do List</span>
                  <button className="todo-add-btn">+ Add New</button>
                </div>
                <ul className="todo-list">
                  <li><input type="checkbox" /> Send assignment to JhonD</li>
                  <li><input type="checkbox" /> Update Notes For Jhon</li>
                  <li><input type="checkbox" /> Update Notes For Jhon</li>
                  <li><input type="checkbox" /> Update Notes For Jhon</li>
                  <li><input type="checkbox" /> Update Notes For Jhon</li>
                  <li><input type="checkbox" /> Update Notes For Jhon</li>
                  <li><input type="checkbox" /> Update Notes For Jhon</li>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
      {/* Bottom-right Messages Button */}
      <div className="messages-fab">
        <button className="messages-btn">
          <span className="messages-icon">💬</span>
          Messages
          <span className="messages-avatars">
            <span className="messages-avatar messages-avatar-1"></span>
            <span className="messages-avatar messages-avatar-2"></span>
          </span>
        </button>
      </div>
    </div>
  );
}

export default App;
