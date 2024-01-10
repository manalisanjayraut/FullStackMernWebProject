![CareerNest](https://github.com/info-6150-fall-2023/final-project-mind-benders/blob/main/Screenshot%202023-12-13%20at%208.29.44%20PM.png)


### Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Web-app directory](web-directory)
- [Getting Started](#getting-started)


## Overview <a name="overview"></a>
Welcome to CareerNest, your go-to platform for revolutionizing the job search and hiring experience. CareerNest is more than just a job portal; it's a dynamic ecosystem that seamlessly connects candidates with their dream job opportunities while providing recruiters with powerful tools for efficient talent acquisition.

In CareerNest, we prioritize user experience, transparency, and empowerment. Whether you're a candidate searching for your next career move or a recruiter looking to find the perfect match for your team, CareerNest has you covered.

## Features <a name="features"></a>

### Profile Management:
Experience full control over your digital presence with the Profile Management feature. Users can seamlessly create, update, and delete their profiles. Initiate profile creation, provide essential details, and modify information as needed. Additionally, explore a functionality that allows users to view all candidates, providing a broader perspective on potential professional connections.


### User Authentication:
Ensure secure access with the User Authentication feature. Users verify their identity by providing credentials, and successful authentication grants access to personalized information. Unsuccessful attempts prevent unauthorized access, enhancing the overall security of the platform.


### Job Search:
Navigate a user-friendly and refined job search experience tailored to your preferences. Discover opportunities based on detailed job descriptions, competitive salaries, and relevant experience levels. Refine your search by Job Category and further narrow down options based on job location. The Job Search feature also enables users to search using keywords, ensuring a comprehensive and customizable exploration.


### Job Management:
Empower recruiters with an efficient and user-friendly job posting process. Enjoy real-time updates to job descriptions and easy tracking of candidate progress. If a job opportunity becomes obsolete, recruiters can swiftly delete it, removing it from the platform and halting new applications. This ensures a dynamic and responsive recruitment process.


### Application Process:
Candidates can apply for jobs through the platform, with an intuitive process that enables them to retrieve the list of their job applications. Additionally, candidates can view specific details of each application, manage application statuses, and even withdraw applications if needed.

### Application Status:
Candidates can actively manage the status of their job applications, providing transparency and control over their job search journey.

### Interview Scheduling: 
The HR department possesses the capability to assess candidates who have submitted applications for a particular job. Leveraging skillset criteria pertinent to the position, HR can seamlessly initiate the interview scheduling process by selecting the "Schedule Interview" button. This action sets in motion an internal workflow that automatically dispatches emails to the selected candidates, containing essential details such as the scheduled interview time and a Zoom link for the upcoming interview. This streamlined process enhances efficiency and ensures a prompt and organized communication channel with prospective candidates.


### Skill Matching: 
Unlock tailored career paths with our Skill Matching feature. Candidates can explore job opportunities that harmonize with their distinct skill sets, fostering more meaningful and fulfilling job matches. This innovative feature provides a compatibility percentage, offering candidates a comprehensive understanding of how their skills align with the requirements outlined in the job description.

### Data Visualization:
Empowering recruiters with strategic insights, the Application Data Visualization API transforms raw data into actionable intelligence. By specifying a recruiter's ID, the API dynamically retrieves statistics, unveiling the application landscape for different job IDs associated with that recruiter. This invaluable visualization equips recruiters with the tools to analyze and comprehend the distribution of applications across diverse job opportunities. The result? Informed decision-making that propels the recruitment process forward with precision and clarity.


## Tech Stack <a name="tech-stack"></a>

| Technology | Description          |
|------------|----------------------|
| MongoDB    | NoSQL database       |
| Node.js    | JavaScript runtime   |
| React      | JavaScript library   |
| HTML       | Markup language      |
| CSS        | Styling language     |


## Web App and Restful API Directory  <a name="web-directory"></a>
```
/FINAL-PROJECT-MIND-BENDERS
  /app
    controllers/
    middleware/
    models/
    routes/
    services/
    utils/
    app.js
  /frontend
    /scr
        component/
        images/
        pages/
        redux/
        styles/
server.js
```

## Getting Started <a name="getting-started"></a>

### Prerequisites
Ensure you have the following installed:
- Node.js
- MongoDB

# Steps to Setup Backend

**1. Clone the application **

```bash
git clone "https://github.com/info-6150-fall-2023/final-project-mind-benders.git"
```

**2. Build and install Express framework **

```bash
npm install 
```

**3. Run the app using **

```bash
cd app

npm start
```
The Server will be running on port 9000

# Steps to Setup Frontend

In the project directory, you can run:

```bash
cd frontend
npm install
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


<p>
 <img alt="image" src="/docs/images/CareerNest.jpg">
</p>



