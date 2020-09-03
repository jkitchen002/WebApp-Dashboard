const trafficCanvas = document.getElementById('traffic-chart');
const dailyCanvas = document.getElementById('daily-chart');
const mobileCanvas = document.getElementById('mobile-chart');
const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");

// ************** notifications **************************************
const bell = document.getElementById('bell');
const notifications = document.querySelector('.notification-box');
const gridContainer = document.querySelector('.grid-container');

bell.addEventListener('click', (e) =>{
    if(e.target == bell){
        notifications.style.opacity = "1";
    } 
});

gridContainer.addEventListener('click', (e) =>{
    if(e.target != bell){
        notifications.style.display = 'none';
    } 
});





// ********************** alert *****************************************
const alertBanner = document.getElementById('alert');

alertBanner.innerHTML= `<div class="alert-banner">
<p><strong>Alert:</strong> You have <strong>4</strong> overdue tasks
to complete</p>
<p class="alert-banner-close">x</p>
</div>`

alertBanner.addEventListener('click', e => {
    const close= e.target;
    if(close.classList.contains('alert-banner-close')){
        alertBanner.style.display = 'none'
    }
});


// ************Traffic chart************************
let trafficData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
    "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
    data: [0, 750, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 2250],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1,
    }]
    };

    let trafficOptions = {
        aspectRatio: 2.5,
        animation: {
        duration: 0
        },
        scales: {
        yAxes: [{
        ticks: {
        beginAtZero:true
        }
        }]
        },
        legend : {
        display: false,
        }
        };

let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
    });

    let trafficData2 = {
        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
        "4-10", "11-17", "18-24", "25-31"],
        datasets: [{
        data: [0, 800, 1300, 1500, 2000, 2500, 2000, 2250, 1560, 2250, 2500, 2250, 1700],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
        }]
        };

    let trafficData3 = {
        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
        "4-10", "11-17", "18-24", "25-31"],
        datasets: [{
        data: [0, 700, 1200, 905, 2000, 2500, 1000, 2250, 1500, 1250, 1750, 1250, 1750],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
        }]
        };

    let trafficData4 = {
        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
        "4-10", "11-17", "18-24", "25-31"],
        datasets: [{
        data: [0, 900, 1350, 1200, 2300, 2500, 700, 1250, 2250, 1250, 2000, 1550, 1750],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
        }]
        };
    
// ********* Daily ********************* 

const dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
    label: '# of Hits',
    data: [75, 115, 175, 125, 225, 200, 100],
    backgroundColor: '#7477BF',
    borderWidth: 1
    }]
    };
    const dailyOptions = {
    scales: {
    yAxes: [{
    ticks: {
    beginAtZero:true
    }
    }]
    },
    legend : {
    display: false
    }
    }
        
let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
    });

// **************** Mobile *****************
const mobileData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
    label: '# of Users',
    data: [2000, 550, 500],
    borderWidth: 0,
    backgroundColor: [
    '#7477BF',
    '#78CF82',
    '#51B6C8'
    ]
    }]
    };

const mobileOptions = {
    legend: {
    position: 'right',
    labels: {
    boxWidth: 20,
    fontStyle: 'bold'
    }
    }
    }

let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
    });

// *****************AutoComplete Search********************
const searchBar = document.getElementById("userField");
const suggestionsPanel = document.querySelector('.suggestions')
let members = [
    {name: 'Victoria Chambers'},
    {name: "Tom Pope"},
    {name: "Sienna Zuniga"},
    {name: "Jeremiah Avila"}
];

searchBar.addEventListener('keyup', (e) => {
    const searchMember = e.target.value;
    suggestionsPanel.innerHTML = '';
    const filteredMembers = members.filter( members => {
        return (
            members.name.toLowerCase().includes(searchMember)
        );
    });
    filteredMembers.forEach (function(suggested){
        const div = document.createElement('div');
        div.innerHTML = suggested.name;
        suggestionsPanel.appendChild(div);
    });
if(searchMember === '') {
    suggestionsPanel.innerHTML = "";
}
});

// ***********Message section***************************
send.addEventListener('click', () => {
    // ensure user and message fields are filled out
    if (user.value === "" && message.value === "") {
    alert("Please fill out user and message fields before sending");
    } else if (user.value === "" ) {
    alert("Please fill out user field before sending");
    } else if (message.value === "" ) {
    alert("Please fill out message field before sending");
    } else {
    alert(`Message successfully sent to: ${user.value}`);
    }
    });


// **********************localStorage******************************
const timezone = document.getElementById("timezone");
const saveButton = document.getElementById("save");
const cancelButton = document.getElementById("cancel");
const switch1 = document.getElementById("myonoffswitch");
const switch2 = document.getElementById("myonoffswitch1");
const savingsMessage = document.getElementById("savings-message");

save.addEventListener("click", function () {
  localStorage.setItem("timezone", timezone.value);
  localStorage.setItem("switch1", switch1.checked);
  localStorage.setItem("switch2", switch2.checked);
  savingsMessage.innerHTML = "Your settings have been saved!";
});

cancel.addEventListener("click", function () {
  localStorage.clear();
  timezone.value = "";
  switch1.checked = false;
  switch2.checked = false;
  savingsMessage.innerHTML= "Your settings have been canceled!";
})