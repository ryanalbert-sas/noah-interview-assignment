# git-search-task

Install dependencies:

```$ npm install```

Start the development server:

```$ npm start```

The console should output the port on which the application is running - usually http://localhost:8000 or http://localhost:3000. Open the application in your browser.

# Scenario:

We require a web application to search for GitHub repositories using their REST API (https://developer.github.com/v3/search/). We’ve made a start on it, but it needs to be completed.
You are not necessarily expected to complete all the tasks. Quality of code is more important than completeness.
Please note: The API only allows for 60 requests per hour when using the public API. It would be a good idea to disable dynamic loading / autosaving where applicable.

## Frameworks
The starter app is provided in React with Bootstrap also included via CDN in index.html - If you would prefer to use a different framework or different libraries then please feel free. You can use any IDE, framework or development tool that you require.

## Tasks

• Complete the search results page to show the results returned by the search. Each result item should include at least its name and avatar.

• Create a detail view linked from the results which displays details of the GitHub project. Decide which details about the repository are most relevant and display them in a readable format. If possible, make this page bookmarkable so that it could be shared with others.

• The application is a bit plain. Add some styling. Keep in mind that this application might be used on a variety of devices.

• There is currently no error handing or input checking. Consider what should happen if the user inputs a dangerous search or uses special characters like '/' or '%'.

• By default, only the first 30 results are returned. Add the ability to page through the results. This can either be done with paging controls (1 to 30 of X; Prev, Next links, etc.) or with infinite scrolling. The pagination API is found here: (https://developer.github.com/v3/#pagination)
