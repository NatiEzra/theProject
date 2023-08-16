const socket = io();

socket.emit('login',{userId:'YourUserID'});
socket.on('usercnt', function(msg) {
  $('#UsersCounnt')[0].innerHTML = "There is "+ msg +" Users online";
});


async function createGenderGraph() {
  let valuepergender;
    var GenderGraph = {
    "url" : `http://localhost:70/ItemGender`,
    "method" : "GET",
  }
  await $.ajax(GenderGraph).done(function(response){
     valuepergender = response;
  });

  const itemNames = valuepergender.map(item => item._id);
  const prices = valuepergender.map(item => item.items.length);

  // Set up the dimensions for the SVG container
  const svgWidth = 800; // Adjust the SVG width as needed
  const svgHeight = 600; // Adjust the SVG height as needed
  const margin = { top: 40, right: 40, bottom: 80, left: 60 }; // Increased bottom margin for x-axis labels
  const width = svgWidth - margin.left - margin.right;
  const height = svgHeight - margin.top - margin.bottom;

  // Create the SVG container for the chart
  const svg = d3.select("#GenderChart")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

  // Create a group within the SVG for the charting area
  const chart = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // Define a title for the graph
  const graphTitle = "Items Count per Gender";

      // Create a text element for the title and position it at the center
  svg.append("text")
  .attr("class", "graph-title")
  .attr("x", svgWidth / 2)
  .attr("y", margin.top / 2) // Position it above the chart area
  .text(graphTitle);


  // Adjust the padding between item names on the x-axis
  const paddingInner = 0.1;
  const paddingOuter = 0.2;

  // Set up scales for x and y axes with adjusted padding
  const xScale = d3.scaleBand()
    .domain(itemNames)
    .range([0, width])
    .paddingInner(paddingInner)
    .paddingOuter(paddingOuter);

  const yScale = d3.scaleLinear()
    .domain([0, d3.max(prices)])
    .nice()
    .range([height, 0]);

  // Create the columns for the chart
  chart.selectAll(".bar")
    .data(prices)
    .enter().append("rect")
    .attr("class", "barGender")
    .attr("x", (item, index) => xScale(itemNames[index])+ xScale.bandwidth() / 2.7)
    .attr("y", item => yScale(item))
    .attr("width", xScale.bandwidth())
    .attr("height", item => height - yScale(item))

  // Create x and y axes
  const xAxis = d3.axisBottom(xScale);

// Append x axis to the charting area
const xAxisGroup = chart.append("g")
  .attr("class", "x-axis")
  .attr("transform", "translate(0," + (height) + ")") // Adjust the second parameter to move the labels up
  .call(xAxis);

// Add a class to the x-axis labels
xAxisGroup.selectAll("text")
  .attr("class", "x-axis-label"); // Add this class to the x-axis labels

  // Append y axis to the charting area
  chart.append("g")
    .attr("class", "y-axis")
    .call(d3.axisLeft(yScale));
}

// Fetch all items data and create the graph
async function createPriceGraph() {
  const existingItems = await fetch('/MenJson')
    .then(response => response.json());
  // Extract item names and prices from the fetched data
  const itemNames = existingItems.map(item => item.name);
  const prices = existingItems.map(item => item.price);

  // Set up the dimensions for the SVG container
  const svgWidth = 800; // Adjust the SVG width as needed
  const svgHeight = 600; // Adjust the SVG height as needed
  const margin = { top: 40, right: 40, bottom: 80, left: 60 }; // Increased bottom margin for x-axis labels
  const width = svgWidth - margin.left - margin.right;
  const height = svgHeight - margin.top - margin.bottom;

  // Create the SVG container for the chart
  const svg = d3.select("#priceChart")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

  // Create a group within the SVG for the charting area
  const chart = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // Define a title for the graph
  const graphTitle = "Men items Prices";

      // Create a text element for the title and position it at the center
  svg.append("text")
  .attr("class", "graph-title")
  .attr("x", svgWidth / 2)
  .attr("y", margin.top / 2) // Position it above the chart area
  .text(graphTitle);


  // Adjust the padding between item names on the x-axis
  const paddingInner = 0.1;
  const paddingOuter = 0.2;

  // Set up scales for x and y axes with adjusted padding
  const xScale = d3.scaleBand()
    .domain(itemNames)
    .range([0, width])
    .paddingInner(paddingInner)
    .paddingOuter(paddingOuter);

  const yScale = d3.scaleLinear()
    .domain([0, d3.max(prices)])
    .nice()
    .range([height, 0]);

  // Create the columns for the chart
  chart.selectAll(".bar")
    .data(prices)
    .enter().append("rect")
    .attr("class", "bar")
    .attr("x", (item, index) => xScale(itemNames[index]))
    .attr("y", item => yScale(item))
    .attr("width", xScale.bandwidth())
    .attr("height", item => height - yScale(item))

  // Create x and y axes
  const xAxis = d3.axisBottom(xScale);

// Append x axis to the charting area
const xAxisGroup = chart.append("g")
  .attr("class", "x-axis")
  .attr("transform", "translate(0," + (height) + ")") // Adjust the second parameter to move the labels up
  .call(xAxis);

// Add a class to the x-axis labels
xAxisGroup.selectAll("text")
  .attr("class", "x-axis-label"); // Add this class to the x-axis labels

  // Append y axis to the charting area
  chart.append("g")
    .attr("class", "y-axis")
    .call(d3.axisLeft(yScale));
}
async function createPromoDiscountGraph() {
    const existingPromo = await fetch('/getPromo')
    .then(response => response.json());
  // Extract item names and prices from the fetched data
  const promoNames = existingPromo.map(promo => promo.promocodename);
  const discount = existingPromo.map(promo => promo.discount);

  // Set up the dimensions for the SVG container
  const svgWidth = 800; // Adjust the SVG width as needed
  const svgHeight = 600; // Adjust the SVG height as needed
  const margin = { top: 40, right: 40, bottom: 80, left: 60 }; // Increased bottom margin for x-axis labels
  const width = svgWidth - margin.left - margin.right;
  const height = svgHeight - margin.top - margin.bottom;

  // Create the SVG container for the chart
  const svg = d3.select("#promoChart")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

  // Create a group within the SVG for the charting area
  const chart = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // Define a title for the graph
  const graphTitle = "Promocodes discounts";

      // Create a text element for the title and position it at the center
  svg.append("text")
  .attr("class", "graph-title")
  .attr("x", svgWidth / 2)
  .attr("y", margin.top / 2) // Position it above the chart area
  .text(graphTitle);


  // Adjust the padding between item names on the x-axis
  const paddingInner = 0.1;
  const paddingOuter = 0.2;

  // Set up scales for x and y axes with adjusted padding
  const xScale = d3.scaleBand()
    .domain(promoNames)
    .range([0, width])
    .paddingInner(paddingInner)
    .paddingOuter(paddingOuter);

  const yScale = d3.scaleLinear()
    .domain([0, d3.max(discount)])
    .nice()
    .range([height, 0]);

  // Create the columns for the chart
  chart.selectAll(".bar")
    .data(discount)
    .enter().append("rect")
    .attr("class", "barPromo")
    .attr("x", (item, index) => xScale(promoNames[index]))
    .attr("y", item => yScale(item))
    .attr("width", xScale.bandwidth())
    .attr("height", item => height - yScale(item))

  // Create x and y axes
  const xAxis = d3.axisBottom(xScale);

// Append x axis to the charting area
const xAxisGroup = chart.append("g")
  .attr("class", "x-axis")
  .attr("transform", "translate(0," + (height) + ")") // Adjust the second parameter to move the labels up
  .call(xAxis);

// Add a class to the x-axis labels
xAxisGroup.selectAll("text")
  .attr("class", "x-axis-label"); // Add this class to the x-axis labels

  // Append y axis to the charting area
  chart.append("g")
    .attr("class", "y-axis")
    .call(d3.axisLeft(yScale));
}
async function createOrderGraph() {
  try {
    const existingOrder = await fetch('/allOrdersJsonForAll').then(response => response.json());

    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
       // Initialize an array to hold the order counts for each month
       const orderCountsByMonth = Array.from({ length: 12 }, () => ({ month: '', count: 0 }));
       console.log(`existingOrder length: ${existingOrder.length}`);

     // Group orders by month and count the total number of orders for each month
     existingOrder.forEach(order => {
      const monthName = order.month; // Assuming your API response contains a "month" property
      const monthIndex = monthNames.indexOf(monthName); // Get the month index

      orderCountsByMonth[monthIndex].month = monthName;
      orderCountsByMonth[monthIndex].count++;
    });   

    // Set up the dimensions for the SVG container
    const svgWidth = 800; // Adjust the SVG width as needed
    const svgHeight = 600; // Adjust the SVG height as needed
    const margin = { top: 40, right: 40, bottom: 80, left: 60 }; // Increased bottom margin for x-axis labels
    const width = svgWidth - margin.left - margin.right;
    const height = svgHeight - margin.top - margin.bottom;

    // Create the SVG container for the chart
    const svg = d3.select("#orderChart")
      .attr("width", svgWidth)
      .attr("height", svgHeight);

    // Create a group within the SVG for the charting area
    const chart = svg.append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


  // Define a title for the graph
  const graphTitle = "Orders per month";

      // Create a text element for the title and position it at the center
  svg.append("text")
  .attr("class", "graph-title")
  .attr("x", svgWidth / 2)
  .attr("y", margin.top / 2) // Position it above the chart area
  .text(graphTitle);


    // Create x and y scales
    const xScale = d3.scaleBand()
      .domain(monthNames)
      .range([0, width])
      .paddingInner(0.1)
      .paddingOuter(0.2);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(orderCountsByMonth, d => d.count)])
      .nice()
      .range([height, 0]);

      

    // Create the columns for the chart
    chart.selectAll(".bar")
      .data(orderCountsByMonth)
      .enter().append("rect")
      .attr("class", "barOrder")
      .attr("x", d => xScale(d.month))
      .attr("y", d => yScale(d.count))
      .attr("width", xScale.bandwidth())
      .attr("height", d => height - yScale(d.count));

    // Create x and y axes
    const xAxis = d3.axisBottom(xScale);

    // Append x axis to the charting area
    const xAxisGroup = chart.append("g")
      .attr("class", "x-axis")
      .attr("transform", "translate(0," + height + ")") // Adjust the second parameter to move the labels up
      .call(xAxis);

    // Add a class to the x-axis labels
    xAxisGroup.selectAll("text")
      .attr("class", "x-axis-label") // Add this class to the x-axis labels
      .attr("transform", "rotate(-45)") // Rotate the x-axis labels for better readability
      .attr("dy", "0.35em") // Adjust vertical alignment of the rotated labels
      .attr("text-anchor", "end"); // Align the end of the label with the tick

    // Append y axis to the charting area
    chart.append("g")
      .attr("class", "y-axis")
      .call(d3.axisLeft(yScale));
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call the functions
createOrderGraph();
createPriceGraph();
createGenderGraph();
createPromoDiscountGraph();

