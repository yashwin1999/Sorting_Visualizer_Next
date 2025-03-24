Author: Yashwin Bangalore Subramani

Sorting Visualizer Next (Sorting Comparison)
=======================

Sorting Visualizer Next is an interactive web application for visualizing various sorting algorithms. Built with Next.js, React, Tailwind CSS, and Chart.js, this tool helps users understand sorting algorithms through real-time visualizations.


Overview
--------
This project enables users to visualize different sorting algorithms with options to:
- Select and compare sorting algorithms.
- View animated sorting processes in a real-time graph.

Installation Instructions
------------------
1. **Clone the Repository**:
   - If you haven't already, clone the repository from GitHub

2. **Navigate to the Project Directory**:
   - Move into the project directory:
     ```
     cd sorting_visualizer_next
     ```


3. **Install Dependencies**:
   - Open a terminal in the project directory.
   - Run the following command to install all required dependencies:
     ```
     npm install
     ```

Running the Application
-----------------------
1. **Start in Development Mode**:
   - To run the app in development mode, use:
     ```
     npm run dev
     ```
   - Open your browser and go to http://localhost:3000 (or which ever port that the server is using) to view the app.

3. **Start in Production Mode**:
   - After building, start the production server with:
     ```
     npm run build
     npm start
     ```

Using the Application
---------------------
1. **Insert the number of comparisons required**:
   - Type in the number of comparisons required (number of sorting algorithms to be compares at once) required in the first text box. The maximum number of comparisons allowed is 7 because there are 7 algorithms.

2. **Insert Array Size**:
   - Type the size of array that should be used in sorting and comparing.

3. **Select Sorting Algorithm**:
   - Choose a sorting algorithm from the list of available options in the application’s interface, each interface can hold different algorithms.

4. **Generate the random array for the given array size**:
   - Click on "Generate" to generate a random array for the provided input size.

5. **Run the Sort**:
   - Click on "Start" to begin the visualization.
   - The application will animate the sorting process in real time.

Dependencies
-----------------
Key dependencies from **package.json** include:
- **Next.js**: Framework for server-side rendering.
- **React**: UI library.
- **Tailwind CSS**: Utility-first CSS framework.
- **Chart.js** and **react-chartjs-2**: For charting and visualization.
=======
# Sorting_Visualizer_Next
