<div align="center"><img src="./public/assets/hackato.png" alt="hackathon header"></div>

## Technologies Used

#### FrontEnd:
  <img src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=000&style=flat" alt="React Badge">  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000&style=flat" alt="JavaScript Badge"> 
lds.io/badge/Axios-5A29E4?logo=axios&logoColor=fff&style=flat" alt="Axios Badge">

#### Development Tools:
  <img src="https://img.shields.io/badge/React%20Router-CA4245?logo=reactrouter&logoColor=fff&style=flat" alt="React Router Badge">   <img src="https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=fff&style=flat" alt="Vite Badge">
 

## Workflow Description:
1. The user selects a filter from the `FiltersGroup`, which updates the filter state using the `IdeaContext`.
2. `IdeaGenerator` calls the `fetchIdea` function with the updated filter.
4. `fetchIdea` makes a request to the API to get a new activity and updates the `IdeaContext` with the received information.
5. `Activitat` displays the obtained idea or handles error states.


## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/tomi-casabona/booredApp
   ```

2. Navigate to the project directory:

   ```bash
   cd booredApp.git
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the application:

   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:{PortNumber}`.

## Usage
1. Use the filter bar at the top to select an activity category.
2. Click the "Generate" button to get a random idea from the selected category.
3. If no filter is selected, a random unfiltered activity will be displayed.
