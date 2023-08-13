const socket = io();

socket.emit('login',{userId:'YourUserID'});
socket.on('usercnt', function(msg) {
  $('#UsersCounnt')[0].innerHTML = "There is "+ msg +" Users online";
});

//   // Fetch all items data
// async function CreateGraph()
// {
//   var existingItems=[];
//   var prices = [];
//   var itemNames = [];

// const y=await fetch('/allItemsJson').
// then(response=>response.json())
// .then(data2=>{
// data2.forEach(item => {
// existingItems.push(item);
// itemNames.push(item.name); // Assuming there's a 'name' property for items

// prices.push(item.price); // Assuming there's a 'price' property for items
// })
// });
//  // Create the price chart data
//  const priceData = {
//   labels: itemNames,
//   datasets: [
//     {
//       label: 'Prices',
//       data: prices,
//       borderColor: 'rgba(255, 99, 132, 1)',
//       backgroundColor: 'rgba(255, 99, 132, 0.5)',
//       fill: false,
//       pointRadius: 4
//     }
//   ]
// };
//   // Create the chart configuration for each chart
//   const config1 = {
//     type: 'line',
//     data: priceData,
//     options: {
//       responsive: true,
//       scales: {
//         y: {
//           beginAtZero: true
//         }
//       }
//     }
//   };

    // Create the price chart
    //const priceCtx = document.getElementById('priceChart').getContext('2d');
  //  const priceChart = new Chart(priceCtx, config1);

    // const changeData = [/* ... */];
    // const volumeData = [/* ... */];

    // // Set the dimensions and margins for the charts
    // const width = 300; // Adjust the width as needed
    // const height = 200; // Adjust the height as needed
    // const margin = { top: 20, right: 20, bottom: 30, left: 40 };

    // // Create SVG elements for the charts using D3
    // const priceChartSvg = d3.select("#priceChart")
    //     .attr("width", width + margin.left + margin.right)
    //     .attr("height", height + margin.top + margin.bottom)
    //     .append("g")
    //     .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    
    // const changeChartSvg = d3.select("#changeChart")
    //     .attr("width", width + margin.left + margin.right)
    //     .attr("height", height + margin.top + margin.bottom)
    //     .append("g")
    //     .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    
    // const volumeChartSvg = d3.select("#volumeChart")
    //     .attr("width", width + margin.left + margin.right)
    //     .attr("height", height + margin.top + margin.bottom)
    //     .append("g")
  
    //     .attr("transform", "translate(" + margin.left + "," + margin.top + ")"); 
//}
// Fetch all items data and create the graph
async function createGraph() {
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

// Call the createGraph function
createGraph();
