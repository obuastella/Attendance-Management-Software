# Geolocation-Based Attendance Management System

## Introduction
This system provides an innovative approach to attendance management by leveraging geolocation technology to ensure accurate and tamper-proof attendance records. Designed for educational settings, the platform enables students to sign in only when they are within a specific proximity to their lecturer.

## Features
### For Students:
- **Geofencing:** Ensures students can only sign attendance when near the lecturer.
- **Real-time Notifications:** Alerts for successful attendance sign-ins and updates.
- **Attendance Reports:** Provides detailed records for students to review their attendance history.
- **User-Friendly Interface:** Simple login, sign-up, and attendance tracking process.

### For Lecturers:
- **Geofencing Management:** Set the geofenced area for attendance tracking.
- **Attendance Monitoring:** View real-time attendance status for their classes.
- **Detailed Reports:** Access class-specific attendance summaries and export data if needed.

### For Super Admins:
- **User Management:** Manage students, lecturers, and their roles.
- **Analytics Dashboard:** Monitor overall attendance trends and system usage.
- **System Settings:** Configure global settings like geofencing sensitivity and notification preferences.

## Prerequisites
- Node.js and npm installed on your system.
- A MongoDB database instance.
- Postman (optional, for testing APIs).

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/geolocation-attendance.git
   cd geolocation-attendance
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the project root and configure the following environment variables:
   ```env
   PORT=5000
   DATABASE_URL=your-mongodb-connection-string
   JWT_SECRET=your-secret-key
   ```

4. Start the development server:
   ```bash
   npm start
   ```

## Usage
1. **Login Page:**
   - The first page displayed is the student login page.
   - Students can use the "Sign Up" link to create an account if they don’t have one.

2. **Student Dashboard:**
   - Once logged in, students can view their attendance status and sign in when within the geofenced area.
   - Students can also view their attendance history for all registered courses.
   - Students will also get real time update once a lecture has commenced.

3. **Lecturer Dashboard (Future Development):**
   - Lecturers will have the ability to set geofenced areas and view real-time attendance.
   - Lecturers will have the ability to uncheck a students attendance.
   - Lecturers will have the ability to set online classes on the platform.

4. **Admin Dashboard (Future Development):**
   - Super Admins will manage users, monitor system analytics, and configure settings.

## Technologies Used
- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Geolocation Services:** Integrated with GPS APIs

## Future Enhancements
- Add lecturer-specific dashboards.
- Implement role-based access control.
- Extend the geolocation feature to support multi-campus institutions.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request for review.

## License
This project is licensed under the [MIT License](LICENSE).
