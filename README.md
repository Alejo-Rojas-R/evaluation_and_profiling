# 📑 Evaluation and Profiling

This application was designed to systematize the process of how the HR managers categorize the candidates that enroll in [Betek](https://betek.la/)'s academic courses. The backend for this application is developed with the Spring framework and its documentation can be found in the following links.

#### :link: [API RESTful Documentation (EN)](https://github.com/Alejo-Rojas-R/MakaiaProyectoFinal/blob/main/README-en.md)
#### :link: [API RESTful Documentation (ES)](https://github.com/Alejo-Rojas-R/MakaiaProyectoFinal)

# 💻 Tech Stacks:

### Front-End:
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB), 
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white), 
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white), 
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white), 
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white), Axios, React Icons.


### Back-End:
![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white), 
![Spring](https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white), 
![Apache Maven](https://img.shields.io/badge/Apache%20Maven-C71A36?style=for-the-badge&logo=Apache%20Maven&logoColor=white), 
![MySQL](https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white), 
![Hibernate](https://img.shields.io/badge/Hibernate-59666C?style=for-the-badge&logo=Hibernate&logoColor=white), 
![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white), JUnit, Railway

# 🖥️ Demo & Screen Captures: 
### 🔓 Login 

Initially, the application asks for credentials to access the application. If the credentials are found in the database the backend will return a token that is stored in the local storage of the browser which later is internally used to access the different HTTP actions served by the API endpoints.

![image](https://github.com/Alejo-Rojas-R/evaluation_and_profiling/assets/125615397/fd4a7dd2-92c7-41ec-b95b-2902e186f654)

### 🗃️ Candidates List 
After a successful login, the managers can see a list of the candidates who applied to Betek's academic courses. This results list allows the users to filter for a specific candidate by searching for their ID number.

![image](https://github.com/Alejo-Rojas-R/evaluation_and_profiling/assets/125615397/3ae0f9a9-dc62-4522-a032-79847f2f3f55)

### 📂 Not Found
If a candidate is not found with the provided ID, a no-results message is shown to the user.

![image](https://github.com/Alejo-Rojas-R/evaluation_and_profiling/assets/125615397/c462b18f-ae14-4c3b-9d37-0d0ab2fbec66)

### 🔍 Candidate Details
The list provides a details button that redirects the users to a candidate page where they can see all the details that belong to the user, this is where the magic happens and the managers can see which category this specific candidate belongs to, this category was automatically given to the user based on the answers they gave when filling the register form. These details update every 24 hours because the applicants have to also fill in a Test Gorilla assessment test, which will also help to decide if the candidates have the minimum required knowledge to be eligible for the Bootcamp.

![image](https://github.com/Alejo-Rojas-R/evaluation_and_profiling/assets/125615397/cf61b75a-1146-465a-b814-bc904ef9aed0)

### 🧑‍🏭 Edit Candidate
Managers can edit the candidate data in case something needs to be fixed or the automatic categorization has to manually be handled.

![image](https://github.com/Alejo-Rojas-R/evaluation_and_profiling/assets/125615397/1fbab49e-cd7c-4713-b2d3-446d2d034ee3)

### 🚷 Delete Candidate
If needed, managers can delete a candidate from the database, this action needs to be handled with caution, therefore a confirm dialog is shown to the user.

![image](https://github.com/Alejo-Rojas-R/evaluation_and_profiling/assets/125615397/b51644d7-76ce-4667-9e2a-ded3f9d197d3)

Managers can log out after they are done with their work. They will be redirected to the login page and their credentials will be removed from the cache.

# :dizzy: CI-Continuous Integration:

GitHub Actions :octocat: is used for continuous integration. GitHub Actions is an automation tool that allows you to run automated workflows in response to specific events, such as the creation of a merge request. This tool automates test execution, application packaging, and deployment to different environments, all within the same workflow. This saves time and reduces errors by ensuring the application is built correctly with every change made to the code. GitHub Actions allows you to customize configurations to meet your specific project needs.

# :arrow_double_up: CD-Continuous Deployment:

Railway :bullettrain_side: is used for continuous deployment. The application hosting platform provides continuous deployment functionality that allows any code changes to be automatically deployed to a production environment. Using Github as a source, Railway triggers an automatic build and deployment to the production environment on every change to the repository without the need for manual intervention.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
