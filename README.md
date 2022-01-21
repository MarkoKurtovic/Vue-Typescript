# Vue-Typescript

The app should contain 3 parts:
1. Workers list – a list of all workers in the system.
2. Flights of the worker – a table with all flight information of the worker.
Columns of the table are:
1. Flight Number
2. Origin
3. Origin Date
4. Destination
5. Destination Date

3. Flight information – this part will show an extra information of the flight
a. Plane Number
b. Duration of the flight
c. Origin gate
d. Destination gate

Clicking on worker name, will show all his flights in the table.
The flights in the table should be refreshed automatically every 1 minute.
The timer should be per worker, it means that clicking on another worker will start a new timer.
The first row is default selected row of the table.
Clicking on specific flight, will show the flight details in Flight Information.
The duration should be displayed in prettier format. (using pipe)
Example: 350 (response from API in minutes) → 5h 50m
